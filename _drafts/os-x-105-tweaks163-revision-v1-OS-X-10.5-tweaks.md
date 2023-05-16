---
id: 449
title: 'OS X 10.5 tweaks'
date: '2023-05-15T10:14:21-05:00'
author: Justin
layout: revision
guid: 'https://justin.thehaggertys.net/163-revision-v1/'
permalink: /163-revision-v1/
---

The much anticipated and over due OS X 10.5 Leopard came out on Friday. I’ve been running it for a couple of days now and have found a couple of tweaks that I thought I would share.

**Login Screen**  
You may have noticed that your login screen has the default star wall paper that comes with 10.5. I didn’t like this generic look, and I wanted to customize it. No problem. Fire up the terminal and do the following (all on one line):  
`<br></br>$ sudo cp /path/to/new/picture /System/Library/CoreServices/DefaultDesktop.jpg<br></br>`  
Log out, and you will notice that your login background picture is now changed. In addition, all new users created will have this picture set as there default wallpaper. Here is what my login screen now looks like:  
[![login.jpg](https://justin.thehaggertys.net/wp-content/uploads/2007/10/login.jpg)](https://justin.thehaggertys.net/wp-content/uploads/2007/10/login.jpg "login.jpg")  
Thanks to [Jason](http://blogs.sungeek.net/unixwiz/) for the tip on how to get a screen shot of the login screen ([VNC](http://en.wikipedia.org/wiki/Vnc) is your friend).

**Dock**  
One of the first thing people will surely notice is the new dock in OS X. By default the dock has a bright gray background. Here is a picture of the original doc:  
[![orgdock.jpg](https://justin.thehaggertys.net/wp-content/uploads/2007/10/orgdock.jpg)](https://justin.thehaggertys.net/wp-content/uploads/2007/10/orgdock.jpg "orgdock.jpg")  
You can change this too. The files that control this are in /System/Library/CoreServices/Dock.app/Contents/Resources. The files you are looking for are:  
scurve-l.png  
scurve-m.png  
scurve-sm.png  
scurve-xl.png  
You can either update these files to have a new color, or just remove them for a mirror look. I decided to go with removing the files (after backing them up of course). Either way, your changes won’t show up until you fire up the terminal again and run:  
`<br></br>$ sudo killall Dock<br></br>`  
Here is a picture of my new mirror dock:  
[![mirrordock.jpg](https://justin.thehaggertys.net/wp-content/uploads/2007/10/mirrordock.jpg)](https://justin.thehaggertys.net/wp-content/uploads/2007/10/mirrordock.jpg)