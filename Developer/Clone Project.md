---
PublicURL: https://docs.pitchprint.com/article/126-clone-project
ArticleID: 5de61e912c7d3a7e9ae4a730
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 712
Created at: 2019-12-03T08:36:33Z
Created By: 274440
Updated At: 2019-12-03T08:46:37Z
Updated By: 274440
Last Published: 2019-12-03T08:46:36Z
---

Use this endpoint to clone a project associated with your particular domain.
 This requires a valid projectId as well as the signature parameters to authenticate the call.
[POST]
https://api.pitchprint.io/runtime/clone-project
 BODY PARAMS


 apiKey
 Your domain's api key


 timestamp
 Timestamp generated at runtime


 signature
 Signature = MD5(apikey + secretKey + timestamp)


 projectId
 ID of a single project

SAMPLE CODE
<?php

define('PITCH_APIKEY', 'your-api-key');
define('PITCH_SECRETKEY', 'your-secret-key');

function generateSignature () {
    $timestamp = time();
    $signature = md5(PITCH_APIKEY . PITCH_SECRETKEY . $timestamp);
    return array ('timestamp'=>$timestamp, 'apiKey'=>PITCH_APIKEY, 'signature'=>$signature);
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.pitchprint.io/runtime/clone-project");
curl_setopt($ch, CURLOPT_POST, true);

$opts = generateSignature();
$opts['projectId'] = 'your-project-id';

curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($opts));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$output = curl_exec($ch);
$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
$curlerr = curl_error($ch);
curl_close($ch);

header('Content-Type: application/json');

echo $output;

?>
 RESPONSE
{
"error": false,
"status": 1,
"newId": "e7d1ab10b9eb9b142cd4c702f0e1c69f"
}
