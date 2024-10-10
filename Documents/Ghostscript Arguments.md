---
PublicURL: https://docs.pitchprint.com/article/108-ghostscript-arguments
ArticleID: 5b9f77260428631d7a8b3695
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1928
Created at: 2018-09-17T09:43:02Z
Created By: 274440
Updated At: 2018-09-18T05:28:18Z
Updated By: 188184
Last Published: 2018-09-18T05:28:18Z
Slug: ghostscript-arguments
---

Ghostscript is a powerful PostScript and PDF processing engine. With Ghostscript, it is possible to further edit and convert your PDF specifications to your desires.
We have integrated a Ghostscript command pipeline, that can convert your PDF file based on your provided arguments, before being downloaded or sent to Webhook integrations. You can provide your custom Ghostscript commands 
in our settings page
 For example, let's say you would like the PDF to be converted from it's default PDF version 1.7 to PDF/X-3 version 1.3, you would provide the following argument: 
-dPDFX

Another example, if you would like to convert the PDF version to 1.4 and convert all colors including images in the PDF to CYMK, you would provide the following arguments: 

-dCompatibilityLevel=1.4 
-sProcessColorModel=DeviceCMYK 
-sColorConversionStrategy=CMYK 
-sColorConversionStrategyForImages=CMYK

Please note that each argument is separated by a single space

 For more available arguments you can study 
Ghostscript Use .

 Also note that we provide other default arguments such as (so you should not): 

-sDEVICE=pdfwrite -sOutputFile=out-x3.pdf PDFX_def.ps input.ps