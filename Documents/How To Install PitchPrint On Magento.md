---
PublicURL: https://docs.pitchprint.com/article/113-magento-installation
ArticleID: 5cda7ea404286306738f1007
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 2782
Created at: 2019-05-14T08:39:00Z
Created By: 274440
Updated At: 2024-10-08T09:51:03Z
Updated By: 339322
Last Published: 2024-10-08T09:51:03Z
Slug: magento-installation
---
This plugin is compatible only with Magento versions 2.2 and 2.3. Please note that we will not be providing any updates until further notice. Users are responsible for managing the maintenance of the plugin.Here are instructions to help you install PitchPrint on Magento:We recommend you to duplicate your live store on a staging/test site and then perform this installation on the test site first to ensure you won't have any issue before installing on your live store.Backup magento files and the store databaseDownload the source code files from here: https://github.com/pitchprint/magento/releasesExtract extension package and upload the folder named PitchPrintInc into your_magento_root_dir/app/code/ directory.In shell run: php bin/magento setup:upgradeThen run: php bin/magento cache:cleanFollowed by: php bin/magento setup:static-content:deployThen navigate to your Store's Backend / Admin, on the left-hand sidebar you will see the PitchPrint module.Next, let’s generate the PitchPrint keys. Navigate in a new window tab to https://admin.pitchprint.io/register and create an account or login here if you already have an accountThen navigate to the domains page and add a new domain. Don’t worry you can still use it for localhost testing if you are not ready to go live yet. Provide your intended domain url, not a localhost. You should now have a pair of API and Secret Key.Back to your Magento Admin, you will copy and paste the API and Secret keys generated above into the PitchPrint configuration boxes and save.Now navigate to Catalog – > Products page and click “edit” on the right under action against any product in your admin. On the product details page, you will find PitchPrint in the menus at the bottom. Click it to assign one of your designs to the product. To create more designs, you need to go to the PitchPrint Designs page. Save.Navigate to your store front and check the product has the Customize button. If it does not, please read more on our trouble shooting page or send us an email for support.When an order is placed, you should find the design download links against each product in the order.