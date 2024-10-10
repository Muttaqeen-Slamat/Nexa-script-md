---
PublicURL: https://docs.pitchprint.com/article/85-initialization-options
ArticleID: 5ae465320428631126f17b56
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 2565
Created at: 2018-04-28T12:12:34Z
Created By: 188184
Updated At: 2024-05-15T11:19:20Z
Updated By: 339322
Last Published: 2024-05-15T11:19:20Z
---
To create an instance of the PitchPrint class, here are the possible options you can pass in:var ppclient = new PitchPrintClient(options);
The parameters value is a key-value object and are defined as follows: (values preceded by red asteriks* are required)

* apiKey : (string)
 This is the API Key generated from the admin portal and is assigned to your domain. This is what identifies each domain from the other, not the domain name which can be renamed at any time. 
You can generate your apiKey from here.

 designId : (string)
 This is the ID of the design you intend to load for new projects. To get a listing of all designs under your account, you can call up this endpoint URL from the admin

 mode : (string)
 The mode in which the app should load. Default value should be "new". But when a user has finished creating a design but has not left the page, they may decide to want to edit again. You should then set this to "edit-project" just before loading up the editor for editing.

 product : (object)
 The product details passed in as a value-pair object. 

 It is useful when reading through the project design file or you need to identify each project design against your products. It can contain any values you so desire, but we normally use Id and title, so it looks like: {id: 'xyz', title: 'Purple Phamplets'}

 langCode : (string)
 Language code the editor should use. If omitted, ‘en’ English will be used. Please note, this is different from the "lang" property defined above. Here is the list of all languages to which PitchPrint has been translated:
bg – Bulgarian
ca – Catalan
cs – Czech
da – Danish
nl – Dutch
fi – Finnish
fr – French
de – German
el – Greek
he – Hebrew
hu – Hungarian
id – Indonesian
it – Italian
lv – Latvian
lt – Lithuanian
no – Norwegian
pl – Polish
pt – Portuguese
pt-br – Portuguese (Brazilian)
ru – Russian
es – Spanish
sl – Slovak
sv – Swedish
tr – Turkish
vi – Vietnamese

 userId : (string)
 For every user that instantiates the app, a folder is created on the server so their pictures and design projects can be saved and referenced anytime.
 This is a unique code we use to reference each user. If this value is omitted, we will use ‘guest’ but when they reload the app on a different browser, their images etc are lost so it is advisable you provide a unique ID to identify each user and store their assets separately and safely.

 userData : (string)
 This is a key-value pair of the user's additional information like email, address, phone etc that you will like attached to the particular project and that will appear in the projects page in our admin.

 designId : (string)
 This is the ID of the design you intend to load for new projects. To get a listing of all designs under your account, you can call up this endpoint URL from the admin

 projectId : (string)
 This is a unique code that should be used to save the project on the server. We advise you leave it blank which gives the server the ease to generate a unique ID of its own. 
 After a project has been saved, this ID is passed down to you via the onSave function as stated above. You subsequently can pass this in as an ID if you want to edit same project or retrieve the PDF file.

 custom : (string)
 Always set this to true. It allows the class to prevent some default actions which we have baked in for popular frameworks

