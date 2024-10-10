---
PublicURL: https://docs.pitchprint.com/article/46-how-to-create-a-design
ArticleID: 58ff88ba2c7d3a057f888d89
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 5343
Created at: 2017-04-25T17:34:50Z
Created By: 188184
Updated At: 2021-12-07T06:50:03Z
Updated By: 339322
Last Published: 2021-12-07T06:50:03Z
Slug: how-to-create-a-design
---

 A PitchPrint design is simply a file containing a combination of shapes, texts or pictures in the form of a template that customers can easily modify with little effort to suit their taste before adding to cart.
 The service has provided a collection of design samples you can quickly import from our store but of course the site admin can create their own designs based on their unique offerings, store and product preferences.
NOTE: Before creating your design, it is imperative you understand the type of designs you can create on PitchPrint.  
You can read that here.

  Also note, at the moment, PitchPrint only allows you to create design templates using the app via the admin. You cannot import Illustrator or other file formats as a design template. Rather, when you do import them, they are only added unto the canvas as an asset like importing pictures or text or shapes into your design and not a whole as a complete design.

 Designs can also be blank canvases giving customers the space to craft their own artwork but this should only be done if you are targeting customers that already have design flair and know exactly what they want.
 To get started, navigate to the designs section of the admin: https://admin.pitchprint.io/designs
 Here, you get to administer all your designs, managing categories as well as individual designs in those categories. To create a new design, simply click the red button labelled  “New Design” against the category where you wish to have your design. If the category doesn’t exists, just create one.
 This pops up a window as shown:
 
 Provide a design title, select the dimension and hit the submit button. This will take you to the standalone editor where you will create your design. Loading the editor may take a minute, just be patient. Once loaded, it will show you a bare editor without pages. So you start by creating your pages.
 Creating the Pages:
 The page panel will look like this, on the left-hand side of the screen:
 
 The page title allows you to create multiple pages using comma to delimit the page titles. For instance, if you type in “Front,Back”  (of course without the quotes) the app will create two identical pages titled Front and Back using the exact same dimensions and details you have provided. Another way you could do this is to clone pages which we will discuss later on.
 Next is the product dimensions. Please note, these are actual dimensions and  not canvas dimensions! The application does not stick to one particular canvas as screen sizes varies from person to person but these dimensions remain intact across the board. So if you are creating a landscape business card, you could use 8.6cm for width and 5.4cm for height, which are the common business card dimensions in the market. You can of course swap the values for portrait cards instead.
 The page index, leave it at 1. This is for arranging pages when designing a multi-page design.
 Provide your bleed line value. This should be a single value which will be drawn as bleed for top, right, bottom and left of the canvas. Also note, this value should be in the actual physical dimension as well. So you can provide a bleed of 0.2cm. You can optionally leave this blank, same with margin lines.
 Vertical and Horizontal fold lines are simply lines drawn on the design canvas to guide your users of folding portions within your design. For instance, if you are designing a greeting card, such could have a horizontal line depicting where the card will be folded, but will never be printed in the final PDF file. You can provide as many fold lines as you want by using comma to delimit each. No spacing, just comma, and should be physical values as well.
 You can now click the “Add Page” button to create your page. The page thumbnail image is used in modules that needs to show the product image during design selection, so you can ignore it for now. You can learn more about the other options here.
 This should create your new page(s). Once created, you will see your panel showing other icons used in administering the page as shown:
 
 The current page panel is there for you to edit your page. So you can always adjust your dimensions, the page title, bleed and the rest.
 You will also notice the following icons:
 
 Trash: Allows you to delete the current page, please note that this can't be undone.
 Page Duplicate: This will duplicate the current page for you. Duplicating a page also copies all the items you might have added to the canvas. They are all de-referenced, which means they cannot affect each other. 
 Import Page: This allows you to import a page from another design.
 Add Blank Page: This allows you to add a blank new page.
 Adding Shapes, Texts and Pictures:
 To add a Picture, simply click the Images tab, click or drag to add any of the pictures from the galleries to your canvas then scale as desired. To add a Uploaded Image to the canvas go to the Upload tab, Click on "Upload Your Artwork", click or drag to add the picture to your canvas then scale as desired.
 Same goes for shapes, click on the shape and add to canvas. A mask is simply a plain shape  (please note, “plain shape”) which can be used to mask out pictures into its unique shape. When you place a plain shape on the canvas, that shape automatically becomes a target for masking, so when you drag a picture from the gallery towards the canvas, you will observe you could actually drop your picture into the shape for the shape to mask the picture out. This will not happen if you have multi coloured or complex shapes with groups in them.
 There is a new feature that allows your customers to click on the shape to upload their pictures instead of having to drag picture from the gallery. This is called “Clickable Image Mask” as shown:
 
 This only appears when you select a plain shape. When you enable the toggle switch, the shape becomes clickable and when clicked upon, customers can then browse pictures from their system and it will upload and add it straight as a masked picture using that shape. This feature is chainable.
 Other item parameters are discussed as follows:
 
 Width, Height, X position and Y positions can be edited against an item and will reflect. These can be used to precisely position or dimension an item on the canvas.
 Label: This is used in forms as item titles or labels. If you have the show preset form set to true in the design admin, this value will be used as a title. It goes along with the “Include in Form” switch.
 Chain: This is used to chain items together in your design. Chaining means when one is edited, the other will reflect the new value. For instance you have a website address on both front and back of your card, you should use this value (you can give it any unique value, like “webaddress”) to chain them, so that when customer edits website on the front side, the wouldn’t need to go to the back or everywhere to change the same website value. This also works well on shape masks as well. So if you have a spot for logo, this could be very useful. This only affects the content value and not other editing parameters like position or color.
 Transform Lock: When set to Yes, the user cannot scale or move this object around. Note, admin can still move and rotate same object but not user.
 Edit Lock: For Text items, they cannot be edited when edit lock is set to Yes.
 Hide Context Menu: This does not show the context menu when the item is clicked, if set to Yes.
 Include in Form: Set this to Yes if you want this item to be included in the preset form or the new Data Form module
 Make Reference: There are situations you want to create guide elements like tips or instructions. You can just create the text, shape or even image and set this value to Yes; then that element will not be shown in preview nor printed in the final PDF. It will be ignored, more like a comment in programming, they have no effect in the final art work.
 You can read more about Text Styles here
 Once completed, you should click the submit button to save your new design. This will create the thumbnail of each page as well as save the design to your selected category.