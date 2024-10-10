---
PublicURL: https://docs.pitchprint.com/article/55-integrating-canvas-adjuster-to-a-wordpress-store
ArticleID: 59073ed30428634b4a32c037
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1653
Created at: 2017-05-01T13:57:39Z
Created By: 188184
Updated At: 2020-05-01T01:55:15Z
Updated By: 188184
Last Published: 2020-04-28T06:56:54Z
Slug: integrating-canvas-adjuster-to-a-wordpress-store
---

 To integrate the Canvas Adjuster module into your WordPress store, you need to first enable the module on your design. If you have not done that, click this  link to read on how to enable and configure the Canvas Adjuster module on your design. Once you have the module showing on the product, then we can proceed to integrate it into WordPress and then set the pricing variations based on the canvas size selected by the customer.
 For integrating the Canvas Adjuster to any store to update price variations, we have adopted two different models from which you will pick one based on the kind of product and pricing you choose to offer your customers. The first is  preset values, where the canvas sizes are fixed and as such, the pricing for a particular dimension is also set. The second is custom values whereby your customers get to input in their values and we use the width and height to calculate the canvas area and plot from a range, where the price fill fall within. So for instance if your customer wants a 20 by 12 inches banner, that will be 240 square inches. You can create ranges like 100 – 200, 201 – 300, 301 – 400 and of course the value will fit into the second pricing option. Or you can create just fixed area values such as 10, 20, 50, 100, 240 and in this case the value will then fit the last option.
 To do this you will need to create a Variable Product in WooCommerce instead of a Simple Product. So we will refer you to WooCommerce’s detailed documentation on how to create a Variable Product but first, four things to note and abide by for a Variable Product option to work with PitchPrint’s Canvas Adjuster.

You will create a Custom Product Attribute, not a global default.
Provide the above Element Selector as the Variation Element Selector to the Canvas Adjuster Module. 
 (see Variation element selector on Canvas Adjuster Module.)
For the values, you should use either the preset option: 20×12|12×20|30×40 ... or use the custom area option 0-240|241-360|360-500  ... etc or 100|200|300|500 ... etc. Either option depends on the configuration you have set in your Canvas Adjuster module. If you have unchecked “Clients can enter custom values“, then choose the presets path. If customers can enter in their values, choose the custom area option, even if you have presets added to that module.
 
 (Note that you will need to check the "Use Area for syncing" in the Canvas Adjuster Module for area range or area fixed values.) 
Get whatever it is you drink; Tea, Coffee, Beer or Coke and relax!
 Now, navigate to WooCommerce’s site and create that Variable Product assigning your design to it:  http://docs.woothemes.com/document/variable-product/