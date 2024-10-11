const username = "063652cd0dfee19e6748f94dff1d506ce54b98d5"; // for authentication
const password = "x";
let headers = new Headers();
headers.set("Authorization", "Basic " + btoa(username + ":" + password));
const regex = /[/|?|:]/g;
// documents (94/84) (total/public)
// developer hub (14/13) (total/public)

async function gettingPagesDocs() {
  const response = await fetch(
    "https://docsapi.helpscout.net/v1/collections/58fd98042c7d3a057f887b63/articles", // going through the collection
    { method: "GET", headers }
  );
  if (!response.ok) throw new Error("Could not fetch pages");

  const json = await response.json();
  return json.articles.pages; // returns how many pages there are for that collection (max 50 artcles per page)
}

async function retrieveDocsFromDocuments() {
  let pages = await gettingPagesDocs();
  for (let j = 1; j <= pages; j++) {
    try {
      const response = await fetch(
        `https://docsapi.helpscout.net/v1/collections/58fd98042c7d3a057f887b63/articles?page=${j}`, // going through collection (Pitch print wiki tabs)
        { method: "GET", headers: headers } // only 2 are public (Documentation and Developer Hub)
      );
      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }
      const data = await response.json();
      for (let i = 0; i < data.articles.items.length + 1; i++) {
        let idx = data.articles.items[i].id;
        console.log(idx);

        
        fetch(`https://docsapi.helpscout.net/v1/articles/${idx}`, {
            // looping, getting each article id
            method: "GET",
            headers: headers,
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.article.public) {
                // if the document is public save that document
              const fs = require("node:fs");
              const metadata = `---\nPublicURL: ${data.articles.items[i].publicUrl}\nArticleID: ${data.articles.items[i].id}\nCategory ID: ${data.articles.items[i].collectionId}\nStatus: ${data.articles.items[i].status}\nViewCount: ${data.articles.items[i].viewCount}\nCreated at: ${data.articles.items[i].createdAt}\nCreated By: ${ data.articles.items[i].createdBy}\nUpdated At: ${data.articles.items[i].updatedAt}\nUpdated By: ${data.articles.items[i].updatedBy}\nLast Published: ${data.articles.items[i].lastPublishedAt}\nSlug: ${data.articles.items[i].slug}\n---\n`;
              // metadata comment ^^^^ for seeing personal id helpscout/settings/mailbox/{userid}/
              fs.writeFile(
                `./Documents/${data.articles.items[i].name // saves md file to desired location and file name is document title
                  .replaceAll(regex, " ")}.md`,
                metadata + //shows metadata
                  json.article.text
                    .replace(/(<([^>]+)>)/gi, "") // replaces the html elements and attributes it has
                    .replaceAll("&nbsp;", " ") // all the unicode replacements
                    .replaceAll("&gt;", ">")
                    .replaceAll("&lt;", "<")
                    .replaceAll("&hellip;", "...")
                    .replaceAll("&#39;", `'`)
                    .replaceAll("&quot;", `"`)
                    .replaceAll("&amp;", "&")
                    .replaceAll(`\t`, "")
                    .replaceAll(`\n\n\n`, "\n"),
                (err) => {
                  if (err) {
                    console.error(err);
                  } else {
                    // file written successfully
                  }
                }
              );
            }
          });
      }
    } catch (error) {
      console.error(error);
    }
  }
}
retrieveDocsFromDocuments();

async function gettingPagesDev() {
  const response = await fetch(
    "https://docsapi.helpscout.net/v1/collections/5ae45f3a2c7d3a3f981f0b35/articles",
    { method: "GET", headers }
  );

  if (!response.ok) throw new Error("Could not fetch pages");

  const json = await response.json();
  console.log(json);
  return json.articles.pages;
}
console.log(gettingPagesDev());

async function retrieveDocsFromDeveloper() {
  let pages = await gettingPagesDev();
  for (let j = 1; j <= pages; j++) {
    try {
      const response = await fetch(
        `https://docsapi.helpscout.net/v1/collections/5ae45f3a2c7d3a3f981f0b35/articles?page=${j}`,
        { method: "GET", headers: headers }
      );
      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }
      const data = await response.json();
      for (let i = 0; i < data.articles.items.length + 1; i++) {
        let idx = data.articles.items[i].id;
        console.log(idx);

        const fs = require("node:fs");

        fetch(`https://docsapi.helpscout.net/v1/articles/${idx}`, {
          // looping getting each article id
          method: "GET",
          headers: headers,
        })
          .then((response) => response.json())
          .then((json) => {
            if (json.article.public) {
              // if the document is public save that document
              const metadata = `---\nPublicURL: ${data.articles.items[i].publicUrl}\nArticleID: ${data.articles.items[i].id}\nCategory ID: ${data.articles.items[i].collectionId}\nStatus: ${data.articles.items[i].status}\nViewCount: ${data.articles.items[i].viewCount}\nCreated at: ${data.articles.items[i].createdAt}\nCreated By: ${data.articles.items[i].createdBy}\nUpdated At: ${data.articles.items[i].updatedAt}\nUpdated By: ${data.articles.items[i].updatedBy}\nLast Published: ${data.articles.items[i].lastPublishedAt}\n---\n`;
              // metadata comment ^^^^ for seeing personal id helpscout/settings/mailbox/{userid}/
              fs.writeFile(
                `./Developer/${data.articles.items[i].name // saves md file to desired location and file name is document title
                  .replaceAll(regex, " ")}.md`,
                metadata + //shows metadata
                  json.article.text
                    .replace(/(<([^>]+)>)/gi, "") // replaces the html elements and html unicode
                    .replaceAll("&nbsp;", " ")
                    .replaceAll("&gt;", ">")
                    .replaceAll("&lt;", "<")
                    .replaceAll("&hellip;", "...")
                    .replaceAll("&#39;", `'`)
                    .replaceAll("&quot;", `"`)
                    .replaceAll("&amp;", "&")
                    .replaceAll(`\t`, "")
                    .replaceAll(`\n\n\n`, "\n"),
                (err) => {
                  if (err) {
                    console.error(err);
                  } else {
                    // file written successfully
                  }
                }
              );
            }
          });
      }
    } catch (error) {
      console.error(error);
    }
  }
}
retrieveDocsFromDeveloper();
