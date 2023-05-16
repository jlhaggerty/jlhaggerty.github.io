---
id: 445
title: 'Safari Web Inspector'
date: '2023-05-15T10:14:21-05:00'
author: Justin
layout: revision
guid: 'https://justin.thehaggertys.net/175-revision-v1/'
permalink: /175-revision-v1/
---

Here’s another tip for Safari. With Safari 3 Apple has added a new way to view source on a website. It will should you the code for a site in a collapsible tree. This is great for debugging code. In addition to HTML it will also show you style sheets, images, javascripts, and “Other”. There is also a console section that will show any errors that come up when you load a website.

One of the coolest things is the network area. It will show you how long it takes to load each individual element on your page, it puts this out in a time line that shows what is getting loaded when.

For some reason the Web Inspector isn’t enabled by default, so you’ll have to do a little work to get it. Here’s how:

1. Quit Safari
2. Fire up the Terminal
3. Type:  
     `$ defaults write com.apple.Safari WebKitDeveloperExtras -bool true`
4. Restart Safari
5. Right click some where on the page, and click on “Inspect Element”

I know Apple tries to hide this kind of stuff because most everyday users will never need to use this feature, but I think they should have put this in the preferences. There is an advanced section in there, with some less than advanced features. I’m not afraid of the big bad terminal.app, but many are.

If apple truly want to compete in the browser war this would be some good ammo. That being said, I still use Firefox 99.9% of the time.