---
PublicURL: https://docs.pitchprint.com/article/95-fetch-project
ArticleID: 5ae5a63a0428631126f17d39
Category ID: 5ae45f3a2c7d3a3f981f0b35
Status: published
ViewCount: 1491
Created at: 2018-04-29T11:02:18Z
Created By: 188184
Updated At: 2018-04-29T12:22:18Z
Updated By: 188184
Last Published: 2018-04-29T12:22:18Z
---

 Use this endpoint to fetch the source data for a project associated with your particular domain.
 This requires a valid projectId as well as the signature parameters to authenticate the call.
[POST]
https://api.pitchprint.io/runtime/fetch-project
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
curl_setopt($ch, CURLOPT_URL, "https://api.pitchprint.io/runtime/fetch-project");
curl_setopt($ch, CURLOPT_POST, true);

$opts = generateSignature();
$opts['projectId'] = 'your-project-id-here';

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
    "_id": "835a460c916dec74f02adef0e4a9dce9",
    "version": "8.0.0",
    "_author": "guest",
    "showPresetForm": false,
    "hideBackgroundPanel": false,
    "hideTextPanel": false,
    "hideImagePanel": false,
    "product": {
        "id": "28",
        "name": "HTC Touch HD"
    },
    "disableImageClick": false,
    "designId": "74b9c1f4cfbbec8f59245304d7f7332c",
    "projectId": "835a460c916dec74f02adef0e4a9dce9",
    "productId": "28",
    "layout": "default",
    "title": "Red T-Shirt",
    "scaling": 0.28826764436296975,
    "unit": "cm",
    "welcomeMsg": "Welcome to your creative side.",
    "pages": [{
        "pageData": {
            "scaling": 1,
            "title": "Front",
            "render": true,
            "renderCanvasOffset": true,
            "fWidth": 67.249,
            "fHeight": 77,
            "bleed": null,
            "hfoldlines": [

            ],
            "vfoldlines": [

            ],
            "mlines": [

            ],
            "clines": [

            ],
            "templateSource": "//s3.amazonaws.com/pitchprint.cdn/sc4iafdqds5uvb958b9yva849/userfiles/uploadedimages/admin/g511m1di5lqq8xph5z3jw555660694445.png",
            "templateTint": "",
            "foregroundIsMask": false,
            "foregroundDimension": {
                "top": 0,
                "left": 0,
                "right": 0,
                "bottom": 0,
                "width": -1,
                "height": -1
            },
            "canvasDimension": {
                "top": 10,
                "left": 16,
                "right": 16.249,
                "bottom": 12,
                "width": 35,
                "height": 55
            },
            "fillData": {
                "type": "color",
                "colorData": {
                    "type": "solid",
                    "colors": [{
                        "rgb": {
                            "r": 255,
                            "g": 0,
                            "b": 0
                        },
                        "cmyk": {

                        },
                        "spot": "",
                        "hex": {
                            "hex": {
                                "hex": 16711680
                            }
                        }
                    }],
                    "positions": [
                        1
                    ],
                    "alphas": [
                        1
                    ],
                    "rotation": 0
                },
                "imageData": {
                    "url": "//s3.amazonaws.com/pitchprint.cdn/sc4iafdqds5uvb958b9yva849/resources/backgroundimages/asdlbbugpcyyi3zbpgfyxvuw598458796296/UL564169777688885417.jpg",
                    "thumbnail": "",
                    "fillmode": "",
                    "filedestination": "userfiles",
                    "bytes": "",
                    "width": 708,
                    "height": 768
                },
                "strokeData": {
                    "type": "solid",
                    "width": 0,
                    "alpha": 1,
                    "fill": {
                        "type": "solid",
                        "colors": [{
                            "hex": {
                                "hex": 0
                            }
                        }],
                        "positions": [
                            1
                        ],
                        "alphas": [
                            1
                        ],
                        "rotation": 0
                    }
                },
                "alpha": "0.00"
            },
            "index": 0
        },
        "groups": [

        ],
        "items": [{
            "type": "i-text",
            "originX": "center",
            "originY": "top",
            "left": 143.29,
            "top": 101.31,
            "width": 260.2,
            "height": 235.04,
            "fill": "#ffffff",
            "stroke": null,
            "strokeWidth": 0,
            "strokeDashArray": null,
            "strokeLineCap": "butt",
            "strokeLineJoin": "miter",
            "strokeMiterLimit": 10,
            "scaleX": 0.6,
            "scaleY": 0.6,
            "angle": 0,
            "flipX": false,
            "flipY": false,
            "opacity": 1,
            "shadow": null,
            "visible": true,
            "clipTo": null,
            "backgroundColor": "",
            "fillRule": "nonzero",
            "globalCompositeOperation": "source-over",
            "transformMatrix": null,
            "fillData": {
                "type": "color",
                "colorData": {
                    "type": "solid",
                    "colors": [{
                        "rgb": {
                            "r": 255,
                            "g": 255,
                            "b": 255
                        },
                        "cmyk": {

                        },
                        "spot": "",
                        "hex": {
                            "hex": {
                                "hex": 16777215
                            }
                        }
                    }],
                    "positions": [
                        1
                    ],
                    "alphas": [
                        1
                    ],
                    "rotation": 0
                },
                "imageData": {
                    "url": "",
                    "thumbnail": "",
                    "fillmode": "",
                    "filedestination": "userfiles",
                    "bytes": "",
                    "width": -1,
                    "height": -1
                },
                "strokeData": {
                    "type": "solid",
                    "width": 0,
                    "alpha": 1,
                    "fill": {
                        "type": "solid",
                        "colors": [{
                            "hex": {
                                "hex": 0
                            }
                        }],
                        "positions": [
                            1
                        ],
                        "alphas": [
                            1
                        ],
                        "rotation": 0
                    }
                },
                "alpha": 1
            },
            "reference": "44c0f669e1ddab8d508d27f31a3e8489",
            "tLocked": false,
            "eLocked": false,
            "includeInForm": false,
            "text": "Click Here\nTo Edit\nYour Awesome\nText",
            "fontSize": 40,
            "fontWeight": "bold",
            "fontFamily": "Candara",
            "fontStyle": "",
            "lineHeight": 1.3,
            "textDecoration": "",
            "textAlign": "center",
            "textBackgroundColor": "",
            "styles": {

            },
            "aWidth": 19.105395820912825,
            "aHeight": 17.258313343932162,
            "aXpos": 17.535623149620207,
            "aYpos": 12.39817140964494,
            "svg": "\t<g transform=\"translate(143.29 171.82) scale(0.6 0.6)\">\n\t\t<text font-family=\"Candara\" font-size=\"40\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;\" ><tspan x=\"-85.89\" y=\"-82.32\" fill=\"#ffffff\">Click Here</tspan><tspan x=\"-59.81\" y=\"-23.56\" fill=\"#ffffff\">To Edit</tspan><tspan x=\"-130.1\" y=\"35.2\" fill=\"#ffffff\">Your Awesome</tspan><tspan x=\"-38.32\" y=\"93.96\" fill=\"#ffffff\">Text</tspan></text>\n\t</g>\n"
        }]
    }, {
        "pageData": {
            "scaling": 1,
            "title": "Back",
            "render": true,
            "renderCanvasOffset": true,
            "fWidth": 67.249,
            "fHeight": 77,
            "bleed": null,
            "hfoldlines": [

            ],
            "vfoldlines": [

            ],
            "mlines": [

            ],
            "clines": [

            ],
            "templateSource": "//s3.amazonaws.com/pitchprint.cdn/sc4iafdqds5uvb958b9yva849/userfiles/uploadedimages/admin/rrzarhfizhy2lcy58d5ma55933077546.png",
            "templateTint": "",
            "foregroundIsMask": false,
            "foregroundDimension": {
                "top": 0,
                "left": 0,
                "right": 0,
                "bottom": 0,
                "width": -1,
                "height": -1
            },
            "canvasDimension": {
                "top": 10,
                "left": 16,
                "right": 16.249,
                "bottom": 12,
                "width": 35,
                "height": 55
            },
            "fillData": {
                "type": "color",
                "colorData": {
                    "type": "solid",
                    "colors": [{
                        "rgb": {
                            "r": 255,
                            "g": 0,
                            "b": 0
                        },
                        "cmyk": {

                        },
                        "spot": "",
                        "hex": {
                            "hex": {
                                "hex": 16711680
                            }
                        }
                    }],
                    "positions": [
                        1
                    ],
                    "alphas": [
                        1
                    ],
                    "rotation": 0
                },
                "imageData": {
                    "url": "//s3.amazonaws.com/pitchprint.cdn/sc4iafdqds5uvb958b9yva849/resources/backgroundimages/asdlbbugpcyyi3zbpgfyxvuw598458796296/UL564169777688885417.jpg",
                    "thumbnail": "",
                    "fillmode": "",
                    "filedestination": "userfiles",
                    "bytes": "",
                    "width": 708,
                    "height": 768
                },
                "strokeData": {
                    "type": "solid",
                    "width": 0,
                    "alpha": 1,
                    "fill": {
                        "type": "solid",
                        "colors": [{
                            "hex": {
                                "hex": 0
                            }
                        }],
                        "positions": [
                            1
                        ],
                        "alphas": [
                            1
                        ],
                        "rotation": 0
                    }
                },
                "alpha": "0.00"
            },
            "index": 1
        },
        "groups": [

        ],
        "items": [

        ]
    }],
    "_owner": "9a3a11ea5f5fc12e7a41f3098a082cd9",
    "lastModified": "2015-08-24T16:37:19.876Z",
    "enabled": true
}
}
