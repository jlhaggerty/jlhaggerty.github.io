---
id: 162
title: 'Halo 3 and NAT'
date: '2007-10-17T22:11:07-05:00'
author: Justin
layout: post
guid: 'https://justin.thehaggertys.net/?p=162'
permalink: /halo-3-and-nat/
categories:
    - Gaming
    - 'Inner Geek'
---

Let me start off by saying that if you have a Xbox 360 with a subscription to Xbox Live, go buy Halo 3 if you haven’t already. If you like 1st person shooter games on a gaming console, this is definitely for you. On to my blog post…

Halo 3 came out late last month. It only took me about a week to beat the solo mission. That left online play to get my money’s worth. The online games are a lot of fun. I find it pretty interesting that I could be playing a game with some one from the other side of the planet. It even shows a world map showing where all of the people signed on are located. Along with the world map it shows the current number of people logged in and looking for games. The smallest I’ve seen this number was are 70,000, and most times it is well over 100,000. This being said, I was having problems finding games. It would take up to 5 minutes before it would find a game to join. I had a feeling something wasn’t right.

I noticed tonight an error message that said my NAT type was wrong. For those that don’t know what NAT is, all you really need to know is that the error message meant something was set wrong on my network. If you are running router on your home network, you’re most likely using NAT. You can get more info about nat at [Wikipedia](http://en.wikipedia.org/wiki/Network_address_translation).

The game pointed me to <http://www.bungie.net/router/>. I went there expecting to find ports that I needed to open on my firewall. I was wrong:

> Q: What is NAT and why do I care about it?
> 
> A: In extremely simple terms, NAT (Network Address Translation) helps determine how your router interacts with the rest of the internet. If your NAT settings are restrictive, you may have problems connecting to other players. To test your settings, go to the Xbox 360 Dashboard and test your connection. At the bottom of the test results, you will see your ‘NAT Type.’ You want it to say ‘Open’ – if it says ‘Moderate’ or ‘Strict’ you may experience some problems.
> 
> If you’re NAT settings display ‘Moderate’ or ‘Strict,’ you should consult your router’s documentation, either online or in the instruction manual.
> 
> …
> 
> Q: Are there any routers that are recommended for playing Halo 3 online?
> 
> A: If you live in North America or certain parts of Europe, look for routers that are specially marked as ‘Xbox LIVE compatible’ or ‘Windows Vista compatible.’ These routers have been tested specifically by the Xbox LIVE team to make sure they work…

Go figure, no real useful information. Tells me to look at my router’s documentation, but doesn’t tell me what to look for. It was just a website trying to sell me a new router that would do less than mine already does (and for probably more money too).

Out of curiosity, I did the test they suggested and sure enough my NAT type was “moderate.” The Xbox dashboard had a “More Info” button next to the NAT type. I was hoping it would tell me the ports I needed to open. Again, I was wrong. More of the same:

> This test indicates the type of Network Address Translation (NAT) that your router or gateway is using. Devices that perform strict or moderate NAT can limit the ability of gamers to find each other, participate in sessions, or hear each other on Xbox Live.
> 
> You will not receive a result for this test if you are unable to sign in to Xbox Live. If you do not receive a result, test your connection to Xbox Live. If your router or gateway is using a moderate or strict NAT, replace it with an Xbox Live Compatible device. For a listing of devices that have earned this certification, see [www.xbox.com](http://www.xbox.com).
> 
> If you’ve tried these suggestions and your console still does not pass this test, go to [www.xbox.com/setup](http://www.xbox.com/setup) or call Xbox Customer Support.

Again with trying to sell me a new router. This just wasn’t an option for me. Additionally, I had never heard of moderate or strict NAT. I’m not a networking expert, but I do like to think that I know a bit more about them than the average Joe. If not, I feel sorry for my employer.

After a couple more minutes of google searching I found this Microsoft Knowledge Base article:  
<http://support.microsoft.com/kb/908874>

It had everything I was looking for. TCP and UDP ports 3074 and UDP 88 needed to be opened. I already had TCP 3074 opened, but the others were new to me. After opening the ports I reran the test and my NAT type was now listed as “Open.” I fired up Halo 3, got online, and was in a game in less than a minute.

Moral of the story is. The Xbox is great but you have to watch what they try to tell/sell you. Apparently Bill Gates isn’t rich enough yet.