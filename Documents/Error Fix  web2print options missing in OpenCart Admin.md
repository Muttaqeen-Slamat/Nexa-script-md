---
PublicURL: https://docs.pitchprint.com/article/68-web2print-options-missing-in-opencart-admin
ArticleID: 599d41522c7d3a73488c3a48
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1352
Created at: 2017-08-23T08:48:18Z
Created By: 188184
Updated At: 2017-08-23T09:16:57Z
Updated By: 188184
Last Published: 2017-08-23T09:16:57Z
Slug: web2print-options-missing-in-opencart-admin
---

If you happen to type in web2print in the OpenCart option and it only shows required, this is most probably a vqmod issue stated here: 
https://github.com/vqmod/vqmod/issues/71
This issue prevents vqmod from creating template files so if you check the directory /vqmod/vqcache/, you most probably will only find files with .php and no .tplFix

FTP into your installation and open the file vqmod/xml/vqmod_opencart.xml
Replace the whole file node with the following code:
    <file name="system/startup.php,system/engine/*.php,system/library/*.php,admin/controller/extension/*.php,system/library/template/*.php">
        <operation error="skip" info="For non OCMod includes/requires">
            <search position="replace" regex="true"><![CDATA[~(require|include)(_once)?\((?!modification\()([^)]+)~]]> </search>
            <add><![CDATA[$1$2(\\VQMod::modCheck($3)]]> </add>
        </operation>
        <operation error="skip" info="For OCMod includes/requires - OPERATION MUST BE AFTER NON OCMOD INCLUDES/REQUIRES OPERATION">
            <search position="replace" regex="true"><![CDATA[~(require|include)(_once)?\(modification\(([^)]+)~]]> </search>
            <add><![CDATA[$1$2(\\VQMod::modCheck(modification($3), $3]]> </add>
        </operation>
    </file>
Navigate to /vqmod/vqcache and delete all the files in that folder. Don't worry they are simply cached files
Refresh your admin product page and try again. The web2print option should now appear and if it doesn't, please send us a mail.