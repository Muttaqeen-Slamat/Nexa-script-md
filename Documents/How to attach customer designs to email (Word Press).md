---
PublicURL: https://docs.pitchprint.com/article/77-how-to-attach-customer-designs-to-email-wp
ArticleID: 5ad067af04286307509260a5
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1827
Created at: 2018-04-13T08:17:51Z
Created By: 274440
Updated At: 2023-07-20T14:02:52Z
Updated By: 274440
Last Published: 2021-01-22T12:53:20Z
Slug: how-to-attach-customer-designs-to-email-wp
---

 The following is an article on having your customer's designs attached to an email.
 Note: This code has been written only for Woocommerce Cart plugin with WordPress.

 Kindly follow these instructions:

Move your email template to your theme folder so you may edit it.

Backend -> Woocommerce -> Settings -> Emails -> Select Template -> Copy file to theme.
Remember theme template location to use in the following step.
Place the below code at the bottom of your desired email template file (location of file remembered in above step).
/* PitchPrint Attachments Start*/
/*
 * Delete files greater than 5 minutes old
 */
function custom_delete_old_pp_designs($dir)
{
$lifeTime = time() - 300;

foreach (glob("$dir/*.pdf") as $file) {
    if (filemtime($file)  < $lifeTime) unlink($file);
}
}
/*
 * Saves PitchPrint items design to your server
 */
function custom_get_pp_pdf($ppPdfBase, $pId, $dest)
{
$file = $dest."/MyDesign_".time().'.pdf';
$getFile = "$ppPdfBase=$pId";

$success = copy($getFile, $file);

if ($success) return $file;
return false;
}
/*
 * Returns PP Attachments for email
 * And empties folder from old pp designs
 */
function custom_append_pp_designs($obj)
{
$ppFetchPDFBaseUrl  = 'http://pdf.pitchprint.io?id';
$pluginUpldDir = get_home_path().'wp-content/plugins/pitchprint/uploader/files';
$data = [];

// Remove old designs from upload dir
custom_delete_old_pp_designs($pluginUpldDir);

// Fetch all PitchPrint designs in this order
foreach ($obj->get_items() as $item_id => $item) {

$meta = wc_get_order_item_meta($item_id, '_w2p_set_option');

if ($meta) {
            $ppData =  (strpos($meta,'%7') !== FALSE) ? json_decode(urldecode($meta)) : json_decode($meta);

            if ( isset($ppData->files) ) {

             foreach ($ppData->files as $file) {

                    $regex = "/http.*?uploader\/files/";

    $result = preg_replace($regex, $pluginUpldDir, $file);

                    $data[] = $result;

                }

            } else {
$pId = $ppData->projectId;
$data[] = custom_get_pp_pdf($ppFetchPDFBaseUrl, $pId, $pluginUpldDir);
            }
}

}

// Return attachments
return $data;
}

function attach_pitchprint_designs_pdf_to_email ( $attachments , $id, $object, $new ) {
return custom_append_pp_designs($object);
}
add_action( 'check_pitchprint_item_need_attach', 'custom_attach_pitchprint_designs');
/*
 * Check whether we need to append the attachments.
 */
function custom_attach_pitchprint_designs($obj)
{
foreach ($obj->get_items() as $item_id => $item) {

$meta = wc_get_order_item_meta($item_id, '_w2p_set_option');

if ($meta) {

add_filter( 'woocommerce_email_attachments', 'attach_pitchprint_designs_pdf_to_email',10, 4);

return true;
}
}
}
do_action('check_pitchprint_item_need_attach', $order);
/* PitchPrint Attachments End*/

Ensure wp-content/plugins/pitchprint/uploader/files 777 permissions.
 Run a test by emailing yourself on an order, with a PitchPrint design item and the selected status you chose for your template/s.