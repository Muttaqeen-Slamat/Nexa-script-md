---
PublicURL: https://docs.pitchprint.com/article/135-add-previews-project-file-links-to-shopify-email-notifications
ArticleID: 6072c9b44466ce6ddc5f3591
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 114
Created at: 2021-04-11T10:04:36Z
Created By: 274440
Updated At: 2024-07-24T10:29:04Z
Updated By: 339322
Last Published: 2024-07-24T10:29:04Z
Slug: add-previews-project-file-links-to-shopify-email-notifications
---
Below you will find code that you can add to your Shopify email notification templates, which will include PitchPrint project previews / file links in the emails sent from your Shopify store.The email templates can be located on your store by following the below steps:Go to: Shopify Admin --> Settings --> NotificationsOnce there you may choose the email template you wish to have the previews / links to be included on.Thereafter search for the following code in your chosen template: {% for line in subtotal_line_items %}
  <tr class="order-list__item">
    <td class="order-list__item__cell">
      <table>
        <td>
          {% if line.image %}
            <img src="{{ line | img_url: 'compact_cropped' }}" align="left" width="60" height="60" class="order-list__product-image"/>
          {% endif %}<br>
Immediately below that you can add the following code for a preview image to be added:  {% for property in line.properties %}
    {% if property.first contains "_pitchprint" %}
      <img src="https://pitchprint.io/previews/{{ property.last }}_1.jpg" align="left" width="150" height="auto" class="order-list__product-image"/>
    {% endif %}
  {% endfor %}
To add a PDF link of the project, search for the following in the template:<span class="order-list__item-title">{{ line_title }} × {{ line_display }}</span><br/><br>
Immediately below that you can add the following code for the PDF link:{% for property in line.properties %}
 {% if property.first contains "_pprint-pdf-download" %}
    <a href="{{ property.last }}">Download PDF file</a>
 {% endif %}
{% endfor %}<br>
That's it! Contact support if you need any further assistance with the above.