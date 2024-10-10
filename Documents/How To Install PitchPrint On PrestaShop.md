---
PublicURL: https://docs.pitchprint.com/article/36-how-to-install-pitchprint-on-prestashop
ArticleID: 58fe2a1b2c7d3a057f887ffe
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 3320
Created at: 2017-04-24T16:38:51Z
Created By: 188184
Updated At: 2022-05-10T11:12:58Z
Updated By: 339322
Last Published: 2022-05-10T11:12:58Z
Slug: how-to-install-pitchprint-on-prestashop
---

 PrestaShop is another opensource cart framework built on PHP. Follow these steps to install the PitchPrint module on a PrestaShop site.

Download PrestaShop here: https://www.prestashop.com/en/developers-versions#previous-version
  

 

  

 

  

 

  

 

  

  

  

 

  

  

 

  

 

Install and configure PrestaShop on your server following the instructions within the downloaded package.
Next, download PitchPrint PrestaShop module here: https://github.com/pitchprint/prestashop/releases 
Unzip the downloaded package and upload it to the modules directory in your newly installed PrestaShop site, make sure the directory pitchprint is inside modules directory and not just the content you upload.
Set the permission on folder “site/modules/pitchprint/uploads/files” to 777. After installation, please take some time to read and implement our security measures here.
Now navigate to your PrestaShop admin and on the right menu, click Modules. Then search for PitchPrint in the listed modules or use the search box and type in pitchprint
Click the Install button to install the module and after that, click to Configure the newly installed PitchPrint module.
Next, let’s generate the PitchPrint keys. Navigate in a new window tab to https://admin.pitchprint.com/register and create an account or login here if you already have an account
Then navigate to the domains page and add a new domain. Don’t worry you can still use it for localhost testing if you are not ready to go live yet. Provide your intended domain url, not a localhost. You should now have a pair of API and Secret Key.
Back to your PrestaShop Admin, you will copy and paste the API and Secret keys generated above into the PitchPrint configuration boxes. Leave blank the JavaScript and CSS customization boxes for now and save.
Now navigate to Catalog – > Products page and click “edit” on the right menu against any product in your admin. On the product details page, you will find PitchPrint on the left menu at the bottom. Click it to assign one of your designs to the product. To create more designs, you need to go to the PitchPrint Designs page. Save.
 
 

Navigate to your store front and check the product has the Customize button. If it does not, please read more on our troubleshooting page or send us a ticket.
When an order is placed, you should find the design download links against each product in the order.