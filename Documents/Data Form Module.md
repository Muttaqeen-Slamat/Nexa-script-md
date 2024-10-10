---
PublicURL: https://docs.pitchprint.com/article/40-data-form-module
ArticleID: 58fef8672c7d3a057f888709
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 3434
Created at: 2017-04-25T07:19:03Z
Created By: 188184
Updated At: 2021-10-22T06:52:41Z
Updated By: 339322
Last Published: 2021-10-22T06:52:41Z
Slug: data-form-module
---

 
 This is a PitchPrint module that shows a quick-edit form filled with data elements from the selected canvas. It allows customers to quickly customize their designs without reverting to moving and clicking items on the canvas.
 A sample demo can be seen here:  Corporate Card with Data Form
 Please note, this module is only available to Premium subscribers.How to Enable and Configure Data-Form module on a Design
 To enable this feature, navigate to your Designs page, simply click the Configure button on the design you like to assign this to. Then navigate to the Modules Tab. There you will find the Data Form module. Click to enable it and the configuration panel shows up as shown below:
 The configuration are as follows:

Title: The title you want to appear on top of the form. This can as well be blank.
Set as Default Tab: This shows the Data-Form as the default tab, the first tab that appears in the design app.
Hide other Tabs: This hides the Background, Picture as well as Text Tabs. This in a way allows you to limit what customers can add or customize in the design.
Make Background Editable: This gives customers ability to change the background color or image of the pages.
Edit Pictures after Upload: With this set, when a user uploads their pictures, they are taken to the image editor right away.
Force Background Cropping: This shows the image editor with the crop tool when a customer uploads a background image. With this, they can crop the image to exactly fit the canvas dimensions.
 When you enable this module, the application looks through your design page by page for elements with the following properties:

A Label.
Include in Form set to True.
 If you do not see your elements, kindly edit your design and make sure your have set a label to each element you want to include in the form as well as set the include in form switch to ON as shown:
 
Shapes - For Shape items you intend to use as clips / masks, please do ensure to enable the 
Clickable Mask option

Index - A new feature also allows you to specify and index (priority) for each item. The default index is 0 for all items. To give an item a higher priority, you should give it a higher number so it's displayed first. To display an item at the bottom, you can assign it a negative value, say -2 and like that..

 This module appears as shown in the app: You may want to check out How to enable the customization form