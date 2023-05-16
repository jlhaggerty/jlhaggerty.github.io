---
id: 172
title: 'Safari Debug Menu'
date: '2007-11-17T00:52:39-05:00'
author: Justin
layout: post
guid: 'https://justin.thehaggertys.net/?p=172'
permalink: /safari-debug-menu/
categories:
    - 'Inner Geek'
    - Sports
    - WVU
---

I rarely use Safari to browse the web. I’m a Firefox fan. There is just something to be said for software that will run on any machine I sit down at, OS X, Ubuntu, Solaris, Windows, etc.

That being said I recently [came across a website](http://all-access.cstv.com/cstv/player/player.html?code=wvir&sport=m-baskbl&category=live&media=50287) that required Safari for OS X users. This was annoying, but I fired up Safari and browsed back to the page. Then I got an error message telling me I needed to be on at least Safari 2 to view the page. This was obviously a case of the web master not staying up to date, as I was running Safari 3. I was pretty disappointed about this as the page is doing live video streaming of 3 upcoming WVU basketball games that are on the road and will not be on TV.

Fast forward to this evening. My co-worker told me I could download an application that would enable a debug menu in Safari that would let me change my user agent string. I thought this was a cool idea, but didn’t really want to install an app if I didn’t have to. So I started doing some research on how I could accomplish the same thing. My guess was that it was just a system preference that I would need to set in the terminal. The app was probably doing this in the background, transparent to the user.

I was right. I turns out this hack was discovered back in 2003.

Here is what you need to do to get your debug menu in Safari.

1. If Safari is running close it. Make sure you quit the application, not just close the window.
2. Open the terminal.
3. type:  
    `<br></br>$ defaults write com.apple.Safari IncludeDebugMenu 1<br></br>`
4. Open Safari again
5. Enjoy your new menu

If you want to take the menu out, do the same steps, except change step 3 from a 1 to a 0.

Sure enough after enabling this menu, I was able to change my user agent string. The website thought I was on Safari 2, and the content loaded as it should. Looks like I’ll be able to watch the Mountaineers after all.