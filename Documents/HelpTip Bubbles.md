---
PublicURL: https://docs.pitchprint.com/article/52-helptip-bubbles
ArticleID: 5900c3e52c7d3a057f889658
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1218
Created at: 2017-04-26T15:59:33Z
Created By: 188184
Updated At: 2017-04-26T16:05:26Z
Updated By: 188184
Last Published: 2017-04-26T16:05:26Z
Slug: helptip-bubbles
---

PitchPrint application has an inbuilt help-tip bubble that shows on certain UI elements when users mouse over them. An example is on the Submit button:

You can add this to your UI elements by following these steps:

Log unto the layout section: ttps://pitchprint.net/admin/layouts
Select your layout and search for the element you want the help-tip to appear on.

Add the following html attribute to that element: 
data-tip="Sample Tip Message" anchor="b"

Save the layout and load your product page, mouse over the element and see it appears.
data-tip attribute is the message that will appear.
The anchor is set to b. You can set it to l = left, t = top, b = bottom, r = right. It simply defines the orientation of the help-tip.