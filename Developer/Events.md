---
PublicURL: https://docs.pitchprint.com/article/90-events
ArticleID: 5ae489ac2c7d3a3f981f0bb9
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 2262
Created at: 2018-04-28T14:48:12Z
Created By: 188184
Updated At: 2024-08-02T06:44:09Z
Updated By: 339322
Last Published: 2024-08-02T06:44:09Z
---
Starting with version 9, the PitchPrint app is instantiated in a separate iFrame to sandbox it from your product page as well as prevent styling conflicts with the hosting page. To do this, we created two classes, the  PitchPrintClient which is instantiated inside the hosting page and a PitchPrintFrame which lives in the iFrame.The  PitchPrintClient class is your entry point into the app. This is the class that handles the creation of the iFrame and some other initialization procedures.
  If you are on any of the cart frameworks, you can use the; 
designer ready method to hook your events
PitchPrint is built on  T3 Javascript Framework and adheres to its core philosophy of modular design. To this end, everything on the PitchPrint app is actually a module and are loosely coupled, which means modules don't talk directly to each other. They simply broadcast events and any interested listener can plug in and perform an action based on the event.On the  PitchPrintClient class, you listen to events with the "on" method and fire by calling the "fire" method on the class.function doSomething(_e) {
//Do something when this function is called..
//_e contains the event dispatched with its data
}

//Listens to an event and calls a function when it happens
ppclient.on("event-name", doSomething);
Or talk to the app by firing an event!ppclient.fire("event-name", doSomething);
Events you can listen forList of events your app can listen for// 'app-validated' - Dispatched when the app has done it's validation..
ppclient.on('app-validated', _doSomething);

// 'lib-ready' - At this stage, the app has loaded the library.
// Library here refers to assets needed for that design
// like design data, list of images, fonts, layout, etc..
// This data is only loaded when you have set a designId or projectId in your options
ppclient.on('lib-ready', _doSomething);

// 'before-show' - Dispatched before the editor is lunched
ppclient.on('before-show', _doSomething);

// 'app-shown' - Dispatched when the editor has been displayed
ppclient.on('editor-shown', _doSomething);

// 'design-loaded' - Dispatched when a design has been loaded to canvas
ppclient.on('design-loaded', _doSomething);

// 'after-close-app' - Dispatched when the editor has been closed
ppclient.on('after-close-app', _doSomething);

// 'app-client-pageCount' - Dispatched when number of pages has changed.
ppclient.on('app-client-pageCount', _doSomething);

// 'app-client-templateChange' - Dispatched when the template image is changed
ppclient.on('app-client-templateChange', _doSomething);

// 'app-client-canvasResized' - Dispatched when page dimensions are changed
ppclient.on('app-client-canvasResized', _doSomething);

// 'page-created' - Dispatched when a page has been added
ppclient.on('page-created', _doSomething);

// 'page-select-end' - Dispatched when another page is selected
ppclient.on('page-select-end', _doSomething);

// 'before-start-save' - Dispatched before the app start saving
ppclient.on('before-save', _doSomething);

// 'project-saved' - Dispatched when the project has been saved and pdf..
//  ..is being generated. It passes JSON data with the project details: 
// source: 'stringified JSON of the project source code',
// projectId: 'string',
// numPages: number of pages in the project,
// previews: [] array of the page previews,
// meta: Additional meta data relating to the project
ppclient.on('project-saved', _doSomething);

// 'module-initialized' - Dispatched when a module has finished initializing
ppclient.on('module-initialized', _doSomething);
Events you can fireList of events your app can dispatch to PitchPrint// 'show-preview' - Show design preview
ppclient.fire('show-preview');

// 'hide-preview' - Hide design preview
ppclient.fire('hide-preview');

// 'delete-items' - Delete all currently selected items
ppclient.fire('delete-items');

// 'copy-items' - Copy all currently selected items into clipboard
ppclient.fire('copy-items');

// 'cut-items' - Cut all currently selected items
ppclient.fire('cut-items');

// 'paste-items' - Paste items in the clipboard on the current canvas
ppclient.fire('paste-items');

// 'discard-selection' - Deselect currently selected items
ppclient.fire('discard-selection');

// 'undo' - Undo last action
ppclient.fire('undo');

// 'redo' - Redo previous action
ppclient.fire('redo');

// 'show-editor' - Launch the editor window
ppclient.fire('show-app');

// 'load-design' - Load design
ppclient.fire('load-design', _designJsonData);

// 'load-design-by-id' - Load design by designId
ppclient.fire('load-design-by-id', _designId);

// 'show-preset-form' - Show the preset form
ppclient.fire('show-preset-form');

// 'close-app' - Close the app
ppclient.fire('close-app');

// 'show-welcome' - Show the welcome message if any one was set
ppclient.fire('show-welcome');

// 'select-page' - Change to page.. Parameter is page index
ppclient.fire('select-page', _idx);

// 'page-swap-dimension' - Swap the current page dimension
// Between potrait and landscape
ppclient.fire('swap-page-dimension');

// 'zoom-page' - Zoom current page. Parameters are:
// + : Zoom in
// - : Zoom out
ppclient.fire('zoom-page', '+');

// 'fit-page' - Zooms the current page to fit window as well as move
ppclient.fire('fit-page');

// 'load-image' - Will load an image unto the canvas
// Be reminded, if the image source is not CORS compliant,
// It will taint the canvas. Read more here:
// https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
// http://enable-cors.org/server_apache.html
ppclient.fire('load-image', { 
  url: _imageUrl,
  type: 'image' || 'shape',
  canvas: _canvas /* Optional. If null, it is loaded unto current canvas */
});

// 'new-text' - Adds a new text to the current canvas
ppclient.fire('new-text', {
  text: 'This is my text',
  type: 'i-text' || 'textbox',
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 'normal',
  textAlign: 'left',
  textDecoration: '',
  top: 50,
  left: 50,
  opacity: 1,
  angle: 0,
  scale: 1,
  canvas: _canvas /* Optional. If null, it is loaded unto current canvas */
});

// 'flash-show' - Show a flash message. The delay before hide is in ms
ppclient.fire('show-flash', {
  text: 'This is a flash',
  icon: 'icon-text_fields',
  delay: 3000
});

// 'flash-hide' - Hides the flash message if the hide delay has not
ppclient.fire('hide-flash');

// 'blank-page' - Creates a blank new page.
// Width and Height are provided in physical values, not pixels.
// You can optionally provide all the pageData attributes like bleed,
// hfoldlines, margin etc along or leave to use default
ppclient.fire('blank-page', {
  width: 12,
  height: 10,
  title: "My new page"
});

// 'resize-page' - Resize the dimension of a page.
// Width and Height are provided in physical values, not pixels.
// pageId is either the index of the page or the ID of the page
// scaleItems tries to scale the elements so they don't go
// off the screen should you scale from large to small size.
ppclient.fire('resize-page', {
  width: 12,
  height: 10,
  pageId: 0,
  scaleItems: false
});

// 'delete-page' - Removes a page.
// page can be a value of:
// "all" - deletes all the pages in the design
// type number - specifies the index of the page
// type string - specifies the id of the page
// undefined - deletes the current page
ppclient.fire('delete-page', page);

// 'update-bleed' - Updates a Page's bleed lines.
// bleed: Value of the new bleed
// pageId can be a value of:
// type number - specifies the index of the page
// type string - specifies the id of the page
// undefined - the current page
ppclient.fire('update-bleed', { bleed: 0.3, pageId: 0 });
