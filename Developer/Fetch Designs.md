---
PublicURL: https://docs.pitchprint.com/article/94-fetch-designs
ArticleID: 5ae5a1c92c7d3a3f981f0d48
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 2044
Created at: 2018-04-29T10:43:21Z
Created By: 188184
Updated At: 2020-05-26T20:34:51Z
Updated By: 188184
Last Published: 2019-02-10T21:54:53Z
---

 Use this endpoint to fetch all the designs under a category.
[POST]
https://api.pitchprint.io/runtime/fetch-designs

 BODY PARAMS


 apiKey
 Your domain's api key


 timestamp
 Timestamp generated at runtime


 signature
 Signature = MD5(apikey + secretKey + timestamp)


 categoryId
 ID of a design category


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
curl_setopt($ch, CURLOPT_URL, "https://api.pitchprint.io/runtime/fetch-designs");
curl_setopt($ch, CURLOPT_POST, true);

$opts = generateSignature();
$opts['categoryId'] = 'your-category-id-here';

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
data: {
categoryId: "cat-id",
items: [
{
designId: "******K83RU7R",
version: 9,
unit: "cm",
lastModified:1485934721,
title: "design title",
previews: [
"https://pitchprint.io/previews/design_id_1.jpg",
"https://pitchprint.io/previews/design_id_2.jpg"
]
... more design data
},
{
...another design
}
]
}
}
