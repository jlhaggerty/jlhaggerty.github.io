---
id: 444
title: 'Getting Around SMTP Blocks'
date: '2023-05-15T10:14:21-05:00'
author: Justin
layout: revision
guid: 'https://justin.thehaggertys.net/177-revision-v1/'
permalink: /177-revision-v1/
---

I am spending the week in Beckley, WV visiting Treah’s parents. They have [Suddenlink](http://www.suddenlink.com/) for there cable tv and internet provider.

I fired up my laptop this evening, got on there wireless, and went to reply to a couple emails. All of them failed to send. I tried [telnet’ing to port 25](http://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol#Sample_communications) on my smtp server, it never connected. I though this was odd. I ssh’d over to my web host and tried the same thing. It connected right away.

I’m not hell bent on using my own smtp server, I just want to use thunderbird to send my email so I can avoid using a slow/clunky webmail app. So I thought I would try to use Suddenlink’s smtp server (smtp.suddenlink.net). Wouldn’t you know they make you [authenticate to use there smtp server](https://account.suddenlink.net/selfcare/html/outlook-settings.html). Since I’m not one of there customers I don’t have an account to authenticate with. They’re sure making this hard.

I turned to trusty google and found out they are indeed blocking port 25 to all hosts except there own, to help prevent spam and viruses. You can read there “[Unsolicited Email Spam FAQs](http://www.suddenlink.com/support/information/Info-UnsolicitedEmailSpamFAQs/)” for yourself if you want more information on this. I’m not sure this is the best approach, but that’s a different story.

To get around this policy I decided to try and connect via SSL encryption rather than TLS encryption. This changes the port you connect to from port 25 to port 465.

After making the change my mail sent out right away. So if you’re having problems sending mail through your own SMTP server give this a try. You may also have success just changing the port your SMTP server listens on.