---
id: 378
title: 'OSX 10.5 Printing to Windows Printer'
date: '2009-05-20T15:39:18-05:00'
author: Justin
layout: revision
guid: 'https://justin.thehaggertys.net/167-autosave/'
permalink: /167-autosave/
---

I still have 1 windows computer left on my home network. It is in our living room and has the printer plugged into it. I had Treah’s macbook setup to print to it in 10.4. It was a pain to setup and required setting up several virtual queues on the windows machine (see this [how to](http://iharder.sourceforge.net/current/macosx/winmacprinter/) for more info). Needless to say I was not happy to see that following the 10.5 upgrade the printer was missing from her computer. Setting this up in 10.5 was much easier and was able to talk directly to the printer, I was able to delete all of the virtual queues. Although easier, it still wasn’t as straight forward as I would like for it to be. Here’s what I had to do.

I went to set up the printer and noticed a new windows option in the printer preferences. I thought this looked promising, however the add printer button was disabled:  
[![picture-1.png](https://justin.thehaggertys.net/wp-content/uploads/2007/11/picture-1.png)](https://justin.thehaggertys.net/wp-content/uploads/2007/11/picture-1.png)

I started to click around trying to figure out how to get this option enabled. I never found it. I did find something even better. If you right click on the toolbar you’ll see a customize option, this will pop up a screen allowing you to add and remove icons from the toolbar. One of the icons available to add was labeled “Advanced”. Drag and drop this icon to your toolbar and click done.  
[![picture-3.png](https://justin.thehaggertys.net/wp-content/uploads/2007/11/picture-3.png)](https://justin.thehaggertys.net/wp-content/uploads/2007/11/picture-3.png "picture-3.png")

Now that you have the Advanced icon, click on it. After letting your Mac think for a couple seconds, you will be presented with the following form:  
[![picture-5.png](https://justin.thehaggertys.net/wp-content/uploads/2007/11/picture-5.png)](https://justin.thehaggertys.net/wp-content/uploads/2007/11/picture-5.png "picture-5.png")

Change the type to windows, fill in the url as “smb://user:pass@remote\_computer/printer\_share\_name”. You can fill in the Name and Location fields to be whatever you want. The only thing left is to pick you driver and hit add.

If all goes well you can now print to your windows shared printer.