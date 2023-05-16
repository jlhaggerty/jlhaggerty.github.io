---
id: 462
title: 'Ubuntu Firefox Fix'
date: '2023-05-15T10:14:21-05:00'
author: Justin
layout: revision
guid: 'https://justin.thehaggertys.net/114-revision-v1/'
permalink: /114-revision-v1/
---

I decided to give [Ubuntu 7.04](http://www.ubuntu.com/products/WhatIsUbuntu/desktopedition) a try. One of the the biggest annoyances I’ve had since the switch is that when you hit backspace while in [Firefox](http://www.mozilla.com), it does the same as hitting the page up key. I have grown accustomed to backspace taking me back to the previous page, like it does on every other OS. I didn’t realize how much I used that until it was gone.

So I figured out how to fix it:  
``

1. Type about:config in the address bar.
2. Search for "browser.backspace\_action".
3. Change the default value from field to 0.
4. Start using the backspace key to go back to the previous page.

Now if I could only get my wireless card working consistently I’d be pretty happy.