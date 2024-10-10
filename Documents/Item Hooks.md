---
PublicURL: https://docs.pitchprint.com/article/53-item-hooks
ArticleID: 5900c55a0428634b4a32a41a
Category ID: 58fd98042c7d3a057f887b63
Status: published
ViewCount: 1663
Created at: 2017-04-26T16:05:46Z
Created By: 188184
Updated At: 2020-06-07T20:44:36Z
Updated By: 188184
Last Published: 2018-11-07T10:52:56Z
Slug: item-hooks
---

One of the sleek new features in version 8.3 is Hooks, a feature that allows you to bind an item’s position to a host item’s position, such that as the host’s boundary changes, the target’s position adjusts. This is useful in situations where you might want to array several text elements in a single row and as one item’s width changes, others shift proportionately, remaining in sync. Or you want certain text or shape elements to remain aligned to a host logo even when the logo is re-scaled.
To have an idea of this feature, click here and load the test design.
The hook allows an item to be bound to a host item’s boundary, such that when it is moved or scaled, the target element also adjust its position to maintain the specified gap.
In this sample, the Texts John Doe and Job title have been bound. So, try editing the name John Doe and see how the title adjusts. On the back side of the gap, the three text elements have been hooked using their top to bottom boundary. So try moving any of the first two (phone number or email) and observe how the other items adjust their top positions. This also applies to scaling.Creating your Hooks
First, load your existing design for editing or create a new one in the PitchPrint admin designs page.
I will be using a sample here to explain with visuals how it works. So I have created two text items on the canvas and placed them besides each other as shown:
So to create a Hook, you need a host and a target. The host controls the target. In essence, when the host’s dimension changes, the position of the target is affected. So here, the text item John Doe is the host, while the email address john@appleseed.com is the target.
This instance requires just one hook and it is placed on the Host. So we click on the item John Doe and on the left panel in the Admin tab, we have our Hooks list at the bottom. This section lists all the hooks attached to the currently selected item and their directions. Here, there is none attached at the moment:
Let’s go ahead and click the add button (+). All other elements on the canvas are dimmed except the host, waiting for us to select a target. So we go ahead and click the email item to set that as our target.
Once you mouse over a potential target item, the item becomes more visible. When clicked, it is set as the target and a hook appears in the list as shown with the default direction being “RIGHT”:
You can click the arrow on the left to toggle between different directions but we will leave it at right since that is our intention. Now mouse over the hook and observe the lines shown on the canvas:

The solid purple line is the bound that will be followed.
The dashed purple line will always follow the solid line in that plane. Here, the horizontal plane
The gap is the distance between both lines and that gap will be maintained at all times when the host’s bounds changes. You can adjust the gap by freely moving the target; the last known gap will be used.
Now when you edit John Doe, the email adjusts to maintain the gap between both; same thing when you scale or move John Doe. This applies to images and shapes as well.
So get your gloves on and try out some interesting hooks. Remember, you can set hooks for top, right, bottom and left of the host. Just follow the simple rule, the dashed line will move to maintain the gap between it and the solid line when the host bound changes.