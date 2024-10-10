---
PublicURL: https://docs.pitchprint.com/article/28-how-to-change-the-app-labels-and-texts
ArticleID: 58fd9e952c7d3a057f887b84
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 3378
Created at: 2017-04-24T06:43:33Z
Created By: 188184
Updated At: 2022-09-13T06:23:03Z
Updated By: 339322
Last Published: 2022-09-13T06:23:03Z
Slug: how-to-change-the-app-labels-and-texts
---

 Over time, one of the most frequent questions has been  “How do I change the text on Customize Button?" This article addresses that and explains how to overwrite the default text values by editing the content of the language file to suit your particular taste.
 Language files are loaded immediately the app loads. The language file is loaded based on the default language you have defined on your website. Our language files are hosted on GitHub and you can contribute by editing or adding a new language you like to have on the platform.
 Here is the Git repository:  https://github.com/pitchprint/pitchprint/tree/master/language
 English “en” is the default language. If your site has installed for instance dutch, it will automatically load the dutch language pack
 This article explains how you can change the language on your specific site without having to edit the files from our repository. To do that, kindly follow these steps:

Load the language file your site loads from and locate the text you wish to change from the repo:  https://github.com/pitchprint/pitchprint/tree/master/language (just click the language and it will open the text)
Next, navigate to your settings page here:  https://admin.pitchprint.com/settings
Scroll down to the Custom Javascript section and paste the following code: 
PPCLIENT.langEdits = {
"parameter": "Value text"
};
Next, copy the value corresponding with the language text you want to change above in step 1 and replace parameter with that name. Then type in your new value in place of Value Text.
 
Save the changes in your settings. If you want to add more values, just add as many lines of "parameter" : "Value Text" as you like but make sure to add a comma at the end of each line. The last item should not have a comma.
Please note: All modules should be added inside the modules section as shown in the language file.