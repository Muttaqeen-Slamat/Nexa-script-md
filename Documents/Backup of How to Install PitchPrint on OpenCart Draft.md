---
PublicURL: https://docs.pitchprint.com/article/98-backup-of-how-to-install-pitchprint-on-opencart-draft
ArticleID: 5b43166a0428630abc0bd526
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 483
Created at: 2018-07-09T08:01:46Z
Created By: 274440
Updated At: 2020-02-08T16:48:11Z
Updated By: 188184
Last Published: 2020-02-08T16:48:11Z
Slug: backup-of-how-to-install-pitchprint-on-opencart-draft
---

OpenCart is an opensource cart framework that is easy to use and manage. Follow these steps to do a fresh installation of OpenCart and then PitchPrint or if you already have an OpenCart store, you can just jump over to step 3 to continue.

Download the latest OpenCart code from the download page:  http://opencart.com/index.php?route=download/download
Install the OpenCart package using the OpenCart installation procedure. You can always find the installation instruction in the downloaded package.
To make PitchPrint work with OpenCart, we need a module called vQmod. You can download it here: https://github.com/vqmod/vqmod/releases/download/v2.5.1-opencart.zip/vqmod-2.5.1-opencart.zip
   Kindly note, it is imperative you install this version for OpenCart and not the standalone edition

Once you have downloaded vQmod, follow the instructions on the following page to install vQmod: https://github.com/vqmod/vqmod/wiki/Installing-vQmod-on-OpenCart
Create an account on the PitchPrint portal here: https://pitchprint.net/admin/register or if you already have an account, you can just login: https://pitchprint.net/admin/login.
Add your domain on the PitchPrint portal here: http://pitchprint.net/admin/domains. Don’t worry you can still use it for localhost testing if you are not ready to go live yet. Provide your intended domain url, not a localhost. This will generate for you an API and Secret Key pair, you will need these in step 11.
Download the PitchPrint OpenCart module here: http://www.opencart.com/index.php?route=extension/extension/info&extension_id=18346 You should download the version for your OpenCart installation.
   There are three versions, 2.3, 2.2.x and 1.5.x Ensure you download the one that corresponds to your OpenCart version as each will work for the other.

Unpack the zip into a folder and upload the contents of the “upload” folder into your existing Opencart installation root. Over-write any existing file.
Using an FTP application like FileZilla, login to your server and change the folder permission on the folder ‘uploads/files’ to 777. After installation, please take some time to read and implement our security measures here.
In your OpenCart Admin, navigate to Extensions – > Modules. There you will find PictchPrint. Click to install it and once installed, click to edit.
Provide your API Key and Secret Key you generated from the portal in step 6 above.

Navigate to your OpenCart Admin panel and under Catalog->Products, edit any of the products in the collection or create a new one and go to the Options tab; there, type in Web2Print in the box by the left, the Web2Print option shows up, click to insert a new Web2Print option. Set Required to Yes and assign a design template to the product.

Check the recently edited product page on the store front; You should see the customize now button. If not, please reload the admin product page and check to ensure that a design is assigned. If a design has is shown to be assigned yet the Customize Now button is not showing, please read more on our trouble shooting page or send us a ticket. Thismay be due to your theme or some other server issues, but shouldn’t be so much problem.
 If you do not see the web2print option in OpenCart, kindly follow the instructions explained here: 
http://docs.pitchprint.com/article/68-web2print-options-missing-in-opencart-admin
