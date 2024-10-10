---
PublicURL: https://docs.pitchprint.com/article/67-admin-settings
ArticleID: 597c9c00042863033a1b7a14
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 4033
Created at: 2017-07-29T14:30:24Z
Created By: 188184
Updated At: 2024-09-23T06:44:36Z
Updated By: 339322
Last Published: 2024-09-23T06:44:36Z
Slug: admin-settings
---
The  Settings Page controls the PitchPrint app per domain and has the following settingsDesignerAuto Save: Auto saves the customers designs in the background at 5 minute intervals.Skip Preview: Enabling this feature will allow the submit button to skip the preview process.Lock Aspect Ratio: If enabled, this feature will allow you to maintain the aspect ratio when resizing images.Show Thumbnail Navigation: If enabled, this feature will allow you to show page thumbnails instead of the arrow navigation bar.Show Navigation on Bottom: Will allow you to show the thumbnail navigation below the canvas in the centre of the page.Enable Save for Later:  If enabled, it allows the customers to save their designs to their account and resume their designs at a later stage.Highlight on Item Hover: With this enabled, hovering over an item on the canvas will display its bounds. The anchor fill color is used for this with an opacity of roughly 0.3.Snap Items:  If enabled, it snaps items while dragging on the canvas.Hide Custom Color:  If enabled, it prevents the customer from adding their own colors.Custom Color Input: If enabled, the input values will be shown so customers can type in their colors.Disable Drag-Select Mobile: If enabled, users cannot drag to select multiple items on mobile phones.Disable Zoom on Mobile: If enabled, users will not be able to pinch to zoom the canvas on mobile phones.Clear Design On Reload: If enabled, the design will clear upon reload and the customer would need to start afresh.Image Encode Quality: This is the value used in encoding the design image previews. A higher value is better but obviously requires larger bandwidth to save.Snap Range: The value used for object snapping on the canvas while moving items around.Large Button Style: This is the style used for the top main buttons. You can have them as just icons, or icons and text.Watermark: Select or upload a picture you want to use as watermark while the design is being edited by users. A sample is attached, you can right click to download and use:Mask Shape Upload Indicator: Use this option to upload a picture that instructs your users to click to upload on a mask shape. This is only used where you have clickable mask shapes. A sample image is attached and you can right click to download and use.DownloadsDownload Files in App: When enabled it will allow the customer to download the design as a PDF, a PNG or JPEG file depending on what the admin allows.Download PDF in Order Details: This option gives users the option to download their designs in their account page when an order has been placed.Watermark PDF downloads in APP: When enabled the watermark uploaded in the designer section will be added to the PDF document when the customer downloads from inside the APP. **Please note we disabled this feature due to complaints from customers.**Download Formats: The admin has a choice to choose between either PDF only or a combination of PDF, JPEG and PNG download formats.AnchorsSize: The default size of the item control anchor on the canvas. It is larger on Mobile devices.Style: Option for a rectangular or circular anchorStroke Color: Color for the anchor's outer strokeFill Color: Anchor fill color.TextFloating Point Size: When enabled users can set font sizes in more granular level.Place new Text: When enabled places new text directly on the canvas without the user clicking the canvas.Auto Size New Text: When enabled new text will be resized to fit screen.New Text Size: Set a fixed size for text.Default Text Type: Gives the admin the ability to choose the default text type we have three options Text area, Wrapping text box and curved text.New Text Message: Add the default message for a new text.PDFFlatten Texts to vector shapes: Converts all texts into vector shapes within the PDF file.Print Cut Marks: When enabled, cut marks are printed on the final PDF file using the bleed margins you have set while creating the design.Render PDF in RGB: This forces the PDF distiller to render the final PDF using only RGB Values. Please read more on colors to understand how this works.PDF Distiller: Version 1 is based on TCPDF; Version 2 on CairoGraphics; Version 3 combines both functionalities of version 1 and 2. Kindly read more about our PDF distillers on the following link https://blog.pitchprint.com/distilling-pdf/PDF Version: Set your output PDF version.PDF Image Output Profile for V2: Version 2 distiller output Image profile. Default leaves image unchanged.PDF Render Intent for V2: Version 2 distiller PDF ICC render intents.ICC Profile: Select ICC profile to render PDF or JPEG in.Canvas LinesSolid Region Activation: Clicking on transparent regions of an image will NOT select it.Fill Bleed Area: If enabled, the bleed area will be filled with a fainted color.Show bleeds as dashed lines: Displays the bleeds lines as dashed.Bleed Line Color: Color used for the bleed lines on the canvas.Margin Line Color: Color used for the margin lines on the canvas.Snap Line Color: While editing, snap lines enables users to snap items to its surrounding element's bounds. This shows a dashed line on the canvas and you set that color here.Fold Line Color: The fold lines allows you to define fold boundaries on the design, which are not printed. Use this option to set the color used to display those lines.PluginsEnable Gallery Search: Shows a search box in the pictures gallery.Facebook: Enable this to show the Facebook panel under Pictures.Instagram: Enable this to show the Instagram panel under Pictures.Pixabay: We have integrated Pixabay for photo search and this allows customers to import photos from Pixabay. First, you need to register with Pixabay and generate an API Key. This is where you enter that API Key.However, please note you need to also send Pixabay an email requesting them to enable your APIKey for use via PitchPrint. By default, the API Key will not work unless they enable it for you on their end. Kindly read more here: http://docs.pitchprint.com/article/76-how-to-enable-pixabay-image-search.File UploadsClear User Uploads: Enabling this option clears the uploaded image cache before each user session.Flatten SVGs: Enabling this option will flatten all uploaded SVG images. This gives a better result in terms of what you see is what you get but then limits ability of customers to change the uploaded shape's colors.Flatten all other Vectors: Enabling this applies the same effect as above to other file formats like PDF, Illustrator, CorelDraw files etc. This is a highly recommended option as there are various vector files customers can upload and we can't guarantee their fidelity across board. Flattening these files upon upload ensures they get exactly what was in the file.Conversion Size (x10): Max pixel value to which your file will be scaled. E.g. 300 = 3000px.Display Image Source for Masks: Show a Panel where the user picks their image source when they click a mask.Retain Picture Dimensions: When a picture is added to canvas, place it at the original size. (May make it difficult for users to find handles).Reject Uploaded vectors with missing font: When a vector is uploaded and the font is not in your list, reject the file.Image DPI CheckEnable DPI Check: This option will limit users from stretching their uploaded images beyond certain limits to maintain quality.DPI Minimum: Use this to set the value for the DPI check.Store SettingsShow App on Startup: This enables the designer to automatically show when your product page launches.Retain Page Images: After a design has been customized, the app changes the product page's preview pictures to the new design's. Enabling this will force the app not to change the product page's images.Customization Required: Enabling this will force customers to first edit a design before they can add to cart. In some cart frameworks, this is achieved by hiding the Add to Cart button until a design is customized.Prevent Inline Scroll: Prevents the user from initially scrolling on the page when inline mode is enabled.Display mode: This refers to how the APP will show on your product page we have three options to choose from Mini Mode, Inline Mode and Full Window(Default).Modify Project ID: Prepend or Append data to the project ID.Inline Selector Element: This is where you specify an html element selector present on your product page where PitchPrint designer can attach itself and load inline as a part of your page instead of being displayed full screen. Usually customers can send us their product page URL and we will search for a suitable element and send back its value. This is because there are different themes out there each with its own layout and naming schemes.File Upload Types: The admin can use this field to specify acceptable file upload types for the upload section on the product page.Price Selector Element: Similar to the inline version described above, this allows PitchPrint to capture the price and display it within the app.Custom JavaScript: This is where you type in your custom JavaScript you wish to run when the app is loaded. You can use this for language customization.Custom CSS Style: Use this to specify additional styles you wish to apply to the designer when loaded.Help Content: Add your own help content with HTML.GeneralVersion 10: Our new version. We add more features each day & you can switch back anytime.Global Tags: Comma delimited tags. You can enable additional functionalities that are otherwise not in the settings page.