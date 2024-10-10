---
PublicURL: https://docs.pitchprint.com/article/143-how-to-install-pitchprint-on-odoo
ArticleID: 63886fcc8e765b6a386465b9
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1269
Created at: 2022-12-01T09:11:40Z
Created By: 502964
Updated At: 2022-12-06T16:06:28Z
Updated By: 502964
Last Published: 2022-12-06T16:06:28Z
Slug: how-to-install-pitchprint-on-odoo
---

Odoo is a suite of open source business apps that cover all your company needs i.e. eCommerce, Point of Sale, Project Management, Accounting, Inventory etc. The Odoo platform offers a lot of Integrated apps, fairly simple to use, and loved by millions of happy users who can also opt to create their web sites from scratch if they so choose. Follow these easy steps to install the PitchPrint module on a Odoo site:
INSTALLATION STEPS
1. Download the module from the app store for your respective Odoo version. Place into your module folder and extract.
2. From home screen, go to [Apps]. Choose [Update Apps List] from menu, then search for "PitchPrint" or alternatively, use this ---> 
PitchPrint Odoo Module for a direct link.
3. Click "Purchase on app store" button to redirect you to the PitchPrint App Module page.4. Click button next to app to install.5. You should then see the following on the home screen after installation.

POST-INSTALLATION STEPS AND CONFIGURATION
1. From home screen, click [PitchPrint] icon.
2. Go to the top Configuration menu. Enter your API Key and Secret Key into the relevant boxes.
3. Press [Save] button in top left
4. Click [Fetch Designs] button to download PitchPrint designs (Note: this happens automatically once a day).

5. Go to the top menu, Web2Print Products > PitchPrint Designs. You should see all your designs displayed.

PRODUCTS SETUP
1. First ensure you have setup your PitchPrint products in their admin portal (https://admin.pitchprint.com/designs)
2. Go to PitchPrint app from home screen, then go to 
Web2Print Products > Products menu
3. Click [Create] button, then go to PitchPrint tab. Choose Design ID from the list

4. Enter all necessary product data such as name, cost, e-commerce category etc and click [Save]
5. Click the "Go to Website" icon (in red) and then in the top right click "Unpublished" to make product available on e-commerce shop
Note: We suggest you select a "Ribbon" for your product such as "Custom Design" at this stage, or add a special category called Custom Products.
USAGE GUIDE – END USER (CLIENTS) FROM PUBLIC WEBSITE
You should visit your Odoo public website on a different browser or another computer to test this functionality properly.
1. Go to Shop page

2. Choose a custom product

3. Select attributes such as colour and then click [Customise] button. You can use [Reset Designs] button if you wish to clear all your changes. You can customise your design here.

4. When finished designing your product, click the red [Preview] button in the top right and if you're happy, [Submit]
5. Click button for [Add to cart]

6. Cart shows the summary of custom designs with a button to [Review Design] if you need to make any changes. If all ok, click [Process Checkout] to confirm and pay.

WHAT YOU WILL SEE IN ODOO (THE SALE ORDER VIEW)
1. The sale order before confirmation. 
Note: You can use the [Design Preview] button to load the PitchPrint design in the admin portal even before confirming the order. This ensures there is no need to incur any API usage allowance for downloading the print-ready PDF files yet until confirmation. It also allows you to make amendments to the design if necessary, or the for customer to make alterations.

2. After confirmation, an email is sent to the customer with design file downloaded and stored against it. It also will have a PNG image attached as a preview of the design.

PRODUCT VARIANTS (OPTIONAL)
Product Variants can be used to specify configurations of product such as colour, size, material etc.
Using Odoo this can be mapped to PitchPrint product designs using the variants feature.
1. Create a product template in Odoo
2. Specify the attributes such as colours
3. Go to the Product Variants menu and select an appropriate variant
4. In the PitchPrint tab, select the corresponding PP design listed in the PitchPrint Variant Design ID
5. Repeat for all variants of this product.