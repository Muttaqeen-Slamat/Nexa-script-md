---
PublicURL: https://docs.pitchprint.com/article/134-localstorage-trigger
ArticleID: 6059dca2c44f5d025f446eb1
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 257
Created at: 2021-03-23T12:18:42Z
Created By: 205509
Updated At: 2021-03-30T09:43:16Z
Updated By: 274440
Last Published: 2021-03-30T09:43:16Z
Slug: localstorage-trigger
---

 Recent updates in browser settings have affected how our editor functions in various browsers which has led to us receiving multiple feedback from our customers who were affected by the latest browser security settings which resulted in the customize button not showing in the respective customer stores.
 After conducting a series of tests, we found out that Internet Explorer is not compatible with our platform, and this error is experienced by customers due to higher security settings enabled and subsequently blocking access to localStorage.
 We have come up with a temporary solution that detects if Internet Explorer is being used as the default browser, if so, the message seen in the image below will appear. Kindly click 'fix this problem' and you will be prompted to the next steps.
 
 A popup message will appear that prompts you to update or change browser.
 We can also detect if localStorage is accessible because our platform requires localStorage in order to function.
 If you are using any of the following browsers and are experiencing the error mentioned above, Please follow these easy steps below to change your security settings accordingly so as to rectify this error:
 
 Chrome
 Chrome users go to Security settings.
 Please change your settings to Standard protection indicated below:
 
 Edge
 Edge users go to Privacy settings.
 Change your settings to Balanced as see on the screenshot below:
 
 Firefox
 Firefox users please go to Browser privacy
 Change your settings to standard as highlighted below:
 
 SAFARI
 Safari users please go to Security Settings,
 Make sure that Enable JavaScript is ticked:
 
 Then go to Privacy Settings,
 Make sure that Block all cookies is not ticked.
 Once you have updated your security settings as suggested above, your respective browser will not block localStorage going forward and your designs will load correctly.
 Please do get in touch with our support team if you need further assistance with the above.