---
PublicURL: https://docs.pitchprint.com/article/100-automation-sending-your-pdf-file-to-printer
ArticleID: 5b73c1cb0428631d7a89fc50
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 3328
Created at: 2018-08-15T06:01:47Z
Created By: 188184
Updated At: 2023-05-29T07:33:07Z
Updated By: 339322
Last Published: 2021-06-15T08:04:04Z
Slug: automation-sending-your-pdf-file-to-printer
---

 
 In this guide, we will go through the process of automating delivery of PitchPrint's output files by sending them as an email attachment to your printer along with the order details. This can also be used to save the file into a Dropbox, OneDrive or Google Drive folder.
 To achieve this, we will be using the Webhooks feature of PitchPrint so If you are not familiar with this, we kindly advise you  go through that tutorial here.
 So here are the steps we will follow:

Register or login to Zapier and click the Make a Zap button on the top right hand corner. A Zap is simply a workflow link you create between apps on Zapier. You can read more here 
 
That should take you to the Zap creation dashboard.  
 
In the search box, type in "webhook" and select the Webhooks by Zapier app.
Select Catch Hook in the next form that appears and click the Save + Continue button:  
 
For the Child key, type in products and continue: 
 
In the next screen, Zapier will give you a unique URL. This is the URL that PitchPrint will invoke once an action occurs in your PitchPrint account. So, copy this URL into your clipboard by clicking the Copy button. 
 
Now, we need to put this URL in PitchPrint and then trigger an event so that PitchPrint sends a sample data to Zapier. To do this, navigate to your PitchPrint's Webhooks admin page.
Click the Add a webhook Endpoint button on the top right hand corner. 
 
This should give you a dialog box. In the dialog, paste the URL you copied from Zapier and for events, select the option "An Order is Completed" and Submit the button. This simply creates a Webhook trigger that gets called whenever an order status changes to completed. 
 
Now we need to trigger that event to send sample data to Zapier. To do this, you need to create an order and complete that order or open an existing order in your store, change its status to other than completed, save and then change it back to completed and save. Any time an order's status changes to "completed", that event gets sent to PitchPrint and in turn to Zapier through the URL you have provided. Also note, the order should be one with a PitchPrint customization. 
 
Once that step is completed, let's go back to our Zapier and click the button "Ok, I did this". Zapier will check its log based on that URL if any event was sent. Then we should see sample data as shown below: 
 
As you can see, it captures the orderId, the shipping address, product and link to the pdf file, named "file". In the next step, we are going to use this data to send an email. So click the Continue button.
In the prior steps, we have simply created an event trigger in Zapier. It means we are able to get data into Zapier from PitchPrint. Next, we need to choose what to do with that data. We can send it as email, save it to Dropbox etc.. there are many things we can do with this data. We can even post process the PDF file using other apps. So since we decided to send an email with it, next thing is to Choose an Action App. In the search box, type in email and select Email by Zapier. 
 
With the Send Outbound Email option selected, let's click the Save + Continue button.
In the next step, we need to prepare how our email will be processed. For the To field, enter in an email address, this is the destination email address, assuming your printer has one, you can try or send to yourself and see. 
 
Type in a subject and email body. And for the attachment, we want to attach the PDF file, please note you can also choose to attach a JPEG or PNG file, so you need to click the plus icon on the right edge of the Attachment field and select the file option from thereSo that will be our attachment to the email, the PDF File. Click the continue button and you will see details of the email that is about to be sent.
Click the Send test Email by Zapier and wait a few minutes to receive the email. You should receive a successful screen as shown 
 
Click the Finish button and finally Turn ON your Zap. 
 
Your Zap should now run automated. Whenever a status completed even it triggered from an order in your store, an email with the PDF attached will be created and sent to the email address you have provided in your Zap.
 For the body of the email, you can optionally select from any of the fields in the data returned by the event. So for instance, the subject could be the order ID, the body could be the Shipping Address etc..
 The idea is that, we first create a trigger source, which is getting PitchPrint to send the event to Zapier. And from there, you can send the data to any other destination. Or you can even add multiple steps.