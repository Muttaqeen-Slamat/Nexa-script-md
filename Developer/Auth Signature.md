---
PublicURL: https://docs.pitchprint.com/article/86-auth-signature
ArticleID: 5ae4657e2c7d3a3f981f0b3f
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 910
Created at: 2018-04-28T12:13:50Z
Created By: 188184
Updated At: 2018-04-29T12:32:34Z
Updated By: 188184
Last Published: 2018-04-29T12:32:34Z
---

  Kindly note, all calls to the Runtime API requires a valid signature.

Generate a signature

 For your app connect to our Runtime endpoint and fetch data, you need to authenticate your app using the Secret Key that was generated for you when the domain was created alongside the API Key and a timestamp.
  You can get your api and secret keys or generate one in our admin 
Domains Page
 All the three parameters are sent along to the server for authentication with the exception of the secret key. What happens is that our server tries to replicate the signature using the secret key in file along with the details sent, to verify if the request is actually coming from you or not. The timestamp allows for one hour window after which the key becomes invalid.

   To generate a signature, you simply append the API Key + Secret Key + Timestamp and calculate the MD5 hash of the string. That is your signature.
   The timestamp is a UNIX time stamp, the number of seconds since the EPOCH

 Each time you want to make a request, you are required to generate a new signature. 

 Please ensure to protect the script that generates the signature to ensure that only scripts with right privileges can make that call.

<?php
define('PITCH_APIKEY', 'your-api-key');
define('PITCH_SECRETKEY', 'your-secret-key');

function generateSignature () {
$timestamp = time();
$signature = md5(PITCH_APIKEY . PITCH_SECRETKEY . $timestamp);
return array ('timestamp'=>$timestamp, 'apiKey'=>PITCH_APIKEY, 'signature'=>$signature);
}
?>

var md5 = require('MD5');//Note, you need the MDS module

function generateSignature () {
var _timestamp = Math.floor(Date.now() / 1000),
_apiKey = 'your-api-key',
_secretKey = 'your-secret-key',
_signature;

_signature = md5(_apiKey + _secretKey + _signature);
return { timestamp: _timestamp, apiKey: _apiKey, signature: _signature };
}
  The end-point for all runtime calls in version 9 is 
https://api.pitchprint.io/runtime/

Kindly note, in this version, you need to pass in the parameters as JSON string, not query string pairs. So please observe in the samples, we used:
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($opts));

