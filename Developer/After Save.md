---
PublicURL: https://docs.pitchprint.com/article/89-after-save
ArticleID: 5ae47b9e0428631126f17b88
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 1826
Created at: 2018-04-28T13:48:14Z
Created By: 188184
Updated At: 2020-05-09T17:46:51Z
Updated By: 188184
Last Published: 2018-04-28T13:55:28Z
---

So what happens next after our customer clicks the Save Button in the designer?
The designer automatically generates all the design pages, saves the project on our servers, generates a PDF File, then comes back to you with all these details.
An event is dispatched 
"project-saved", which we want to handle with our event "projectSaved".
//Function to run once the user has saved their project
var projectSaved = (_val) => {
let _data = _val.data;
if (_data && _data.previews && _data.previews.length) {
_previewDiv.innerHTML = _data.previews.reduce((_str, _prev) => `${_str}<img src="${_prev}">`, '');
}
};

And what we did here is simply get the data property of the event, which has a property named 
previews, a collection of the project's preview pages
We then created image elements, setting the URL to the preview path and inserted them in our preview div.
From here on, you can integrate as you like to your web application. You have the projectId, the preview images, source, number of pages and most information you need to identify this special customization so it goes along with the product to the cart.
Good luck with the integration and if you get stuck, we are simply an email away!