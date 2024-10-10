---
PublicURL: https://docs.pitchprint.com/article/144-how-to-show-customer-design-previews-on-email-wordpress
ArticleID: 64b93e652af2e15078a7dfdb
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 269
Created at: 2023-07-20T14:02:13Z
Created By: 274440
Updated At: 2023-08-08T11:22:34Z
Updated By: 274440
Last Published: 2023-08-08T11:22:34Z
Slug: how-to-show-customer-design-previews-on-email-wordpress
---
The following is an article on having your customer's designs shown as previews on emails.
 Note: This code has been written only for Woocommerce Cart plugin with WordPress.
Kindly follow these instructions:Move your email template to your theme folder so you may edit it.Backend -> Woocommerce -> Settings -> Emails -> Select Template -> Copy file to theme.Remember theme template location to use in the following step.Place the below code before the woocommerce_email_order_details action call of your desired email template file (location of file remembered in above step)./* PitchPrint Preview Start*/

function pp_show_previews($item_id, $item) {

    $meta = wc_get_order_item_meta($item_id, '_w2p_set_option');

    if ($meta) {

        $ppData =  (strpos($meta,'%7') !== FALSE) ? json_decode(urldecode($meta)) : json_decode($meta);

        echo '<br/>
              <img src="https://pitchprint.io/previews/' . $ppData->projectId . '_1.jpg" width="150px" />
              <br/>';

    }

}

add_action( 'woocommerce_order_item_meta_start', 'pp_show_previews', 10, 2 );

/* PitchPrint Preview End*/

Run a test by emailing yourself on an order, with a PitchPrint design item and the selected status you chose for your template/s.That's it! Contact support if you need any further assistance with the above.