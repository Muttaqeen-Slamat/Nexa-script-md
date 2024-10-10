---
PublicURL: https://docs.pitchprint.com/article/106-how-to-create-colour-chains
ArticleID: 5b83a3b42c7d3a03f89e22bd
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1078
Created at: 2018-08-27T07:09:40Z
Created By: 205509
Updated At: 2020-02-19T06:40:13Z
Updated By: 188184
Last Published: 2020-02-19T06:40:13Z
Slug: how-to-create-colour-chains
---

 
 PitchPrint has a feature called chain, which basically allows you to link items on the canvas to each other. Such that when one item is edited, all other items with the same chain ID gets the same text or image value. With this feature, you can have multiple items like all email elements, chained together so that your customer gets to edit their email only once and that value synchronised across the design canvas.
 The general chain implementation only affects text and image values. This feature is now possible with colors as well. We made this distinction so that you can chain elements with same color together and not have their text values synchronised.
 So How does it work? 
 You will start by creating your design as usual, but then you will supply a chain value for the selected elements as shown below:
 
 What makes this different is the reserved list of values we have which are:
 col1, col2, col3, col4, col5, col6, col7, col8, col9 and col10

 So an element with any of the above values is deemed a color chain. Its text values will not be synchronized, only the color will. With this list, you can create up to chain groups with their colors linked.
 For example, to link two text item's colors, simply assign the first one col1 and the second one the same value col1. That way, they are in the same color group and will be synchronized. You can create a different group with col2 and so on. 
 Remember that chain values are case sensitive so make sure that the values are exactly the same.