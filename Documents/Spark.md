---
PublicURL: https://docs.pitchprint.com/article/138-spark
ArticleID: 60fa735b64a230081ba18290
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1430
Created at: 2021-07-23T07:44:27Z
Created By: 188184
Updated At: 2021-07-23T09:25:40Z
Updated By: 188184
Last Published: 2021-07-23T09:25:40Z
Slug: spark
---

Spark is a simple but powerful API that allows you to programmatically create multiple projects without launching the PitchPrint design editor.
Consider scenarios where busy clients like Estate Agents who periodically need business cards, Party Planners who need to get those banners with no fuss or Direct Mail markers who need to automate their processes.
In just 3 steps, you can have the Print-ready PDF delivered automatically to your printer.
API Endpoint & Parameters
[POST]
https://api.pitchprint.com/spark
Header Parameters (Authentication)


 Authorization
 Your domain's secret key

Body Parameters


 designId
String: Design ID of the PitchPrint's Design template

you want to generate the projects from


records
Array: An array object containing records of the projects you want to create


previewOnly

Boolean: If set to true, the system will only

generate a preview of the projects and not the

PDFs and you won't be charged


Sample Code
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.pitchprint.com/spark',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{ "designId": "0efcad4622733fc8e9ce0f41ad0ccfd6", "previewOnly": false, "records": [{ "name": "Jane Wilcox" }, { "name": "John Doe" }] }',
  CURLOPT_HTTPHEADER => array(
    'Authorization: (wqUpLHRUtK(C!rUuszfT9n&ivXug5',
    'Content-Type: application/javascript'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

?>
 Response
{
    "jobId": "spark_bf42052bd3dc077ea3d552e7beb4e760",
    "success": true,
    "projects": [
        {
            "numPages": 1,
            "previews": [
                "https://s3-eu-west-1.amazonaws.com/pitchprint.io/previews/f11d1d2977a2b7ab5b5725ca09253632_1.jpg"
            ],
            "pdfDownload": "https://pdf.pitchprint.com/f11d1d2977a2b7ab5b5725ca09253632",
            "autoSaved": false,
            "meta": {},
            "userId": "guest",
            "saveForLater": false,
            "isvx": true,
            "id": "f11d1d2977a2b7ab5b5725ca09253632"
        },
        {
            "numPages": 1,
            "previews": [
                "https://s3-eu-west-1.amazonaws.com/pitchprint.io/previews/1c080bfe1beaf028788259a75f494a04_1.jpg"
            ],
            "pdfDownload": "https://pdf.pitchprint.com/1c080bfe1beaf028788259a75f494a04",
            "autoSaved": false,
            "meta": {},
            "userId": "guest",
            "saveForLater": false,
            "isvx": true,
            "id": "1c080bfe1beaf028788259a75f494a04"
        }
    ],
    "receipt": "https://pay.stripe.com/receipts/acct_1Bcto4JWXrE8rGVG/ch_1JGK9gJWXrE8rGVG8I7e1izd/rcpt_Ju8QUp5FDOW2YHyAxoxFjZyGgpm2NOx"
}
The above sample code generates a unique Certificate for each record replacing the name with the value set in the corresponding record. You can set any value you want to change including loading images.Enabling the previewOnly option, the system generates the projects without saving them but sends you the previews of the projects and does not charge you for them. The preview limits the returned item to the first 5 records, if your records are more than 5.CostAccess to this system costs $0.5 per project generated through this API and you will find the receipt URL in the response.Previews are not billed. So you can test and get a hang of it by setting previewOnly before generating actual PDFsAuthenticationWe have switched to using the Secret key as your Authorization code. This is easier and faster to implement on your end.AdminYou will find a list of all your Spark jobs in the PitchPrint admin panel and you can download your previously generated projects from there as well.https://admin.pitchprint.com/spark