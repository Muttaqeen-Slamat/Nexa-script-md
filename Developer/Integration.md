---
PublicURL: https://docs.pitchprint.com/article/88-integration
ArticleID: 5ae469200428631126f17b69
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 7564
Created at: 2018-04-28T12:29:20Z
Created By: 188184
Updated At: 2023-10-26T12:03:16Z
Updated By: 339322
Last Published: 2022-06-06T08:53:40Z
---
 To start with, you need at least an html page loaded from your site where you will load the app unto. If you already have a website in place, this will naturally be your products page template.
  The code you are about to create can be downloaded here: 
 https://github.com/pitchprint/pitchprint/blob/master/sdk/index.html 
 The PitchPrint app relies on a few libraries and we have made efforts to bundle them all into a single file. So for a start, let's assume you are starting with an empty html page like this: 
<html>
<title>PitchPrint Sample SDK </title>
<head>

</head>
<body>

</body>
</html>
 PitchPrint relies on jQuery Blueimp uploader for file upload. So at the header, first load your jQuery, then add the PitchPrint client file as follows.. 
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://pitchprint.io/rsc/js/client.js"></script>
 Now load your page in a browser and check the browser console that there is no error whatsoever from PitchPrint and also check the resources > scripts tab and ensure the files are loaded. We suggest using Chrome developer tool for this. Next, we just created the html elements that we need to interact with... A loader indicator, the launch button and a div to place our final preview images once the customer has finished customizing their design. After that, we write out javaScript code to do the magic..Let's get a reference to our UI elements First, we need to get our elements into variables so we can use them later on, as follows: 
var _launchButton = document.getElementById('launch_btn'),
_previewDiv = document.getElementById('pp_preview_div'),
_loaderDiv = document.getElementById('pp_loader_div');
Initialize PitchPrint client Next, we need to initialize the PitchPrint client class, which will return us a reference () to interact with the app.. 
var ppclient = new PitchPrintClient({
apiKey: 'f80b84b4eb5cc81a140cb90f52e824f6',//Kindly provide your own APIKey
designId: '3d8f3899904ef2392795c681091600d0',//Change this to your designId
custom: true,
isvx: true
});
Define our event handler functions These are the two functions we are going to define to handle the app validated and project saved events.. 
//Function to run once the app is validated (ready to be used)
var appValidated = () => {
_launchButton.removeAttribute('disabled');//Enable the Launch button
_launchButton.onclick = () => ppclient.showApp();//Attach event listener to the button when clicked to show the app
_loaderDiv.style.display = 'none';//Hide the loader
};

//Function to run once the user has saved their project
var projectSaved = (_val) => {
let _data = _val.data;//You can console.log the _data variable to see all that's passed down
if (_data && _data.previews && _data.previews.length) {
_previewDiv.innerHTML = _data.previews.reduce((_str, _prev) => `${_str}<img src="${_prev}">`, '');//Show the preview images
}
};
Attach events to the app So here, we are going to attach events to the PitchPrint client class, such that if any of the events happen, it calls out functions 
ppclient.on('app-validated', appValidated);
ppclient.on('project-saved', projectSaved);
Test our app Ok, so far so good, you can test the page in a browser and see that it loads properly and that there are no errors thrown. To test, click the Launch Designer button. And your designer should show like this. If not, please open a ticket and let us know. Using your own credentials For simplicity, we have used our own demo-credentials, that is API key and designId. Now you should change these to yours, the one you created in the previous topic. So in the variables definition, change the apiKey value to your own apiKey. To get your designId, navigate to the designs page. Open the configuration tab of the design which you would like to use. Go to the history tab and you'll see the designId please have a look below for reference:Use the designId inside the code snippet as shown above. Save, reload page and ensure everything works fine. Next, we will explain what happens next when the customer saves their design.