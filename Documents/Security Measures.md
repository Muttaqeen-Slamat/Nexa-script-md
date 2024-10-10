---
PublicURL: https://docs.pitchprint.com/article/49-security-measures
ArticleID: 5900be442c7d3a057f88960e
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1841
Created at: 2017-04-26T15:35:32Z
Created By: 188184
Updated At: 2017-04-26T15:35:49Z
Updated By: 188184
Last Published: 2017-04-26T15:35:49Z
Slug: security-measures
---
We have developed a security tight solution in PitchPrint but as we all know, internet security can’t be absolute and so we strive to act swiftly to block any security hole that we become aware of on our solution. On our client’s sites, the major entry point via our plugin is the file upload module which is a port of BlueImp File Uploader and we have taken appropriate measures to prevent file malicious upload and then execution on your server.Be that as it may, it is imperative that our measure works properly and appropriately on your server. We took two steps to ensure this. Firstly, we limited up-loadable files to files with the following extensions: gif|jpe?g|png|svg|psd|tif|tiff|bmp|cdr|ai|eps|pdf|ps|zip|gzip|rar.However, schemers might still deceive the system by uploading files with any of any of the above extensions but are actually executable files like PHP. So we took the second step of using .htaccess file to ensure that no file in the upload folder is ever executed but when called, forces the browser to open a download dialog. So in your uploads/files/ directory, you will find a file named “.htaccess”. This file is very important.On some servers, this file might be skipped. Yes, some configuration might not read it and just ignore it, so it is imperative and important to ensure that .htaccess files are read and its rules applied to your server installation. To ensure this, kindly upload a test file to that directory and try accessing the file through your browser. It must force a download dialog, no matter the file type be it image or text or binary, it must never be rendered by the browser and if it does, please immediately contact your server host and make sure the .htaccess rules are applied on that folder.