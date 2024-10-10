---
PublicURL: https://docs.pitchprint.com/article/92-fetch-design-categories
ArticleID: 5ae59a1f2c7d3a3f981f0d3a
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 951
Created at: 2018-04-29T10:10:39Z
Created By: 188184
Updated At: 2018-04-29T12:21:59Z
Updated By: 188184
Last Published: 2018-04-29T12:21:59Z
---

 Use this endpoint to fetch all the design categories associated with your particular domain.
 The only parameters required are the signature parameters to authenticate the call.
[POST]
https://api.pitchprint.io/runtime/fetch-design-categories
 BODY PARAMS


 apiKey
 Your domain's api key


 timestamp
 Timestamp generated at runtime


 signature
 Signature = MD5(apikey + secretKey + timestamp)

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
curl_setopt($ch, CURLOPT_URL, "https://api.pitchprint.io/runtime/fetch-design-categories");
curl_setopt($ch, CURLOPT_POST, true);

$opts = generateSignature();
$opts['designId'] = 'your-design-id-here';

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
[
    "id": "5afb3c7960aa7ff839dhs3767553a3fa2",
    "title": "Business Cards",
    "created": 1522140375,
    "modules": ""
]
}
