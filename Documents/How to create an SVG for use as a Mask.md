---
PublicURL: https://docs.pitchprint.com/article/70-how-to-create-an-svg-for-use-as-mask
ArticleID: 599e9f802c7d3a73488c43ca
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 2777
Created at: 2017-08-24T09:42:24Z
Created By: 188184
Updated At: 2020-10-11T01:20:43Z
Updated By: 188184
Last Published: 2017-08-24T10:50:09Z
Slug: how-to-create-an-svg-for-use-as-mask
---

Image mask is a means of cutting an image along the outlines of a shape path.
This can be achieved in PitchPrint by placing any of the default plain shapes on the canvas an then dragging a photo unto them. The Photo fills out the shape as a mask.
You can as well use your own unique SVG files for this purpose. To do this, the most important criteria is that the SVG needs to be a single path node. In essence, when you open up the SVG in a text editor, it should show a path element just at the base of the svg node, not enclosed in a group or other elements.
A sample is shown in the image below:
To achieve this, select the shape you want to use for masking in Illustrator and convert it into a path. If you have non-touching parts, select them all and make sure they are flattened as one single element, not grouped.
Select them and click Object > Compound Path > Make.
Then copy the new item and open your text editor. Paste into the text editor and save the file with a .svg extension. Check the code and ensure you see it as a single path node similar the image above.
Import same into PitchPrint and that should work as an Photo Mask.