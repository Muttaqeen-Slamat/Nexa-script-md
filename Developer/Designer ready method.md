---
PublicURL: https://docs.pitchprint.com/article/91-designer-ready-method
ArticleID: 5ae58ba92c7d3a3f981f0d2a
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 3257
Created at: 2018-04-29T09:08:57Z
Created By: 188184
Updated At: 2018-04-29T09:18:47Z
Updated By: 188184
Last Published: 2018-04-29T09:18:47Z
---

We have implemented an easy way of integrating your custom code to the editor using the the ppDesignerInitialized method which can be hooked to the global page. This method is invoked once the app has started and the event bus is ready for use.
window.ppDesignerInitialized = function(_class) {
if (_class.name === 'client') {
// this was invoked by the client
} else if (_class.name === 'frame') {
// this was invoked by the frame
}
}

As explained in the section 
Events, version 9 loads the app in an iFrame, which is created by a client class sitting on the parent page (your page). Both the frame and client gets to invoke your function if placed in the customJs section of your settings page.