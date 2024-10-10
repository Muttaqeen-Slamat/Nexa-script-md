---
PublicURL: https://docs.pitchprint.com/article/26-how-to-install-pitchprint-on-opencart
ArticleID: 58fd9b9e2c7d3a057f887b7f
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 4863
Created at: 2017-04-24T06:30:54Z
Created By: 188184
Updated At: 2022-05-10T11:10:50Z
Updated By: 339322
Last Published: 2022-05-10T11:10:50Z
Slug: how-to-install-pitchprint-on-opencart
---

 OpenCart is an opensource cart framework that is easy to use and manage. Follow these steps to do a fresh installation of OpenCart and PitchPrint, if you already have an OpenCart store, you can just jump over to step 3 to continue.Installations:

Install on OpenCart 3.x
Install on OpenCart 2.x ( Legacy ) Install on OpenCart 3.x

Download the latest OpenCart code from the download page:  http://opencart.com/index.php?route=download/download
Install the OpenCart package using the OpenCart installation procedure. You can always find the installation instruction in the downloaded package.
Download the PitchPrint V10 ocmod module here: https://github.com/pitchprint/opencart/releases
On your OpenCart Admin page navigate to Extensions –> Installer and upload the pitchprint.ocmod.zip file. 
 

Now navigate to Extensions –> Modifications and hit the refresh modifications button.
 

The PitchPrint module should now appear under Extensions –> Modules
Continue the setup of PitchPrint: Setting up PitchPrint on OpenCartInstall on OpenCart 2.x ( Legacy )

To make PitchPrint work with OpenCart 2.x, we need a module called vQmod. You can download it here: https://github.com/vqmod/vqmod/releases/download/v2.5.1-opencart.zip/vqmod-2.5.1-opencart.zip
    Kindly note, it is imperative you install this version for OpenCart and not the standalone edition

Once you have downloaded vQmod, follow the instructions on the following page to install vQmod: https://github.com/vqmod/vqmod/wiki/Installing-vQmod-on-OpenCart
Download the PitchPrint OpenCart module here: https://github.com/pitchprint/opencart/releases You should download the version for your OpenCart installation.
    There are 
three versions, 2.3, 2.2.x and 1.5.x Ensure you download the one that corresponds to your OpenCart version as each will work for the other.

Unpack the zip into a folder and upload the contents of the “upload” folder into your existing Opencart installation root. Overwrite any existing file.
Using an FTP application like FileZilla, login to your server and change the folder permission on the folder ‘uploads/files’ to 777. After installation, please take some time to read and implement our security measures here.
In your OpenCart Admin, navigate to Extensions – > Modules. Setting up PitchPrint on Opencart

On the PitchPrint module click to install it and once installed, click to edit.
Now to obtain PitchPrint keys create an account on the PitchPrint portal here: https://admin.pitchprint.com/register or if you already have an account, you can just login: https://admin.pitchprint.com/login.
Add your domain on the PitchPrint portal here: https://admin.pitchprint.com/domains. Don’t worry you can still use it for localhost testing if you are not ready to go live yet. Provide your intended domain url, not a localhost. This will generate for you an API and Secret Key pair, you will need these in step 11.
Provide your API Key and Secret Key you generated from the portal in step 3 above.
 
 

Navigate to your OpenCart Admin panel and under Catalog->Products, edit any of the products in the collection or create a new one and go to the Options tab; there, type in Web2Print in the box by the left, the Web2Print option shows up, click to insert a new Web2Print option. Set Required to Yes and assign a design template to the product.
 
Check the recently edited product page on the store front; You should see the customize now button. If not, please reload the admin product page and check to ensure that a design is assigned. If a design has is shown to be assigned yet the Customize Now button is not showing, please read more on our troubleshooting page or send us a ticket. This may be due to your theme or some other server issues, but shouldn’t be so much problem.
  If you do not see the web2print option in OpenCart, kindly follow the instructions explained here:  
http://docs.pitchprint.com/article/68-web2print-options-missing-in-opencart-admin
