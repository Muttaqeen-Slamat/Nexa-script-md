---
PublicURL: https://docs.pitchprint.com/article/110-browser-compatibility
ArticleID: 5c34704204286304a71dfa73
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 911
Created at: 2019-01-08T09:41:22Z
Created By: 274440
Updated At: 2022-06-03T06:39:09Z
Updated By: 339322
Last Published: 2022-06-03T06:39:09Z
Slug: browser-compatibility
---

 In version 9 we make use of Grid CSS and ES6, therefore our app will not run on browsers that do not support these technologies. 
 
 Here is a list of the browsers that we do support:

Edge 16 or higher
 
Firefox 52 or higher
 
Chrome 57 or higher
 
Safari 10.1 or higher
 
Opera 44 or higher
 
iOS Safari 10.3 or higher
 
Android browser 67
 
Opera Mobile 46
 
Chrome for Android 70
 
Firefox for Android 63
 
UC Browser for Android 11.8
 
Samsung Internet 6.2 or higher
*Please note GOOGLE CHROME needs to be used for PITCHPRINT ADMIN.*Please do not use incognito mode, incognito mode blocks all 3rd party javascript code not embedded in your website, since PitchPrint is a 3rd party plugin that uses javascript it won't run.
 We have implemented a warning message in our app which will automatically detect incompatible browsers, 
 but you may display such a message as well if you wish to incase our message is not clear enough, You can do so by inserting the following code in the custom javascript section on the PitchPrint Admin Settings page:
window.ppBrowserMessage = "You custom no browser support message here.";

 or for mobile:
window.ppBrowserMessageMobile = "You custom no browser support message for mobile here."

 You may also have this supported list on your FAQ's page.