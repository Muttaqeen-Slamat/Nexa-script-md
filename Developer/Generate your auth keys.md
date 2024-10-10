---
PublicURL: https://docs.pitchprint.com/article/87-generate-your-auth-keys
ArticleID: 5ae467360428631126f17b61
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 1349
Created at: 2018-04-28T12:21:10Z
Created By: 188184
Updated At: 2020-04-03T04:43:23Z
Updated By: 188184
Last Published: 2018-04-28T12:28:51Z
---

To integrate the app into your website, you need an  API key as well as a Secret Key.
The API Key is for public facing side of your server and acts as a means of identifying your particular website, while the Secret Key is used to generate signatures for back-end communication with our system, more like a means to authenticate alongside the API Key that this request is coming from you.
So to start with, go to our registration page to create an account or the login page if you already have an account with us.
Once you’ve logged in, navigate to the Domains page and click the green button on the top right corner labelled "Add Domain". This pops up a window like this:

Now type in your domain name.

Take note, this name is simply a name and could be any domain name you so choose. We have our own internal identifier and this can easily be renamed later on. So relax and type a name you feel cool with, doesn't have to be the actual site domain.

Once you do that and click Submit button, the application creates that domain with its own layout file, sample design, images and so on. It also generates the two important items, the API and Secret keys.
Your domains page should now have one domain listed, the one you just created with its keys, date created, the license type Basic as well as an option to edit the domain name anytime you so choose to.
Now that you have generated the necessary keys, let's get started with a plain html page and load the necessary JavaScript files into it.