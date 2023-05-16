---
id: 516
title: 'Load Monitoring'
date: '2023-05-15T10:14:22-05:00'
author: Justin
layout: revision
guid: 'https://justin.thehaggertys.net/19-revision-v1/'
permalink: /19-revision-v1/
---

As many of you know I’m a computer guy. If you’ve been following my blog it may come as a shock as I haven’t really posted anything super geeky. Well that’s about to change. Please note that word press has word wrapped the code blocks bellow. So if you’re going to use this script copy and paste them into a text editor, that way you get the line breaks where they should be.

My web host (the people who host thehaggertys.net) sucks at managing servers. It seems as though my sites and email are down at least once a day. I would never know it until some one would say that they couldn’t get email or get to the blogs or the gallery. I had enough and asked my host to fix it. They refused to do anything about it, or even move me to one of there other 20+ servers. This all prompted me to write some scripts to monitor the load of my server. I know this has probably been done a million times in the past, but I wrote this solution and I’m proud of it. So here it is if anyone wants to use it on there web server.

The first step was to create a HTML file that will hold the output from the scripts. I called mine index.html and threw it in it’s own directory. Here’s what it consists off:  
``

| **Time** | **One Minute Average** | **Five Minute Average** | **Fifteen Minute Average** |
|---|---|---|---|

The next step is to write a script to fill in the table with data. For this I wrote a small korn shell script that runs the “uptime” command, it parses out the time, what the load is, and it then fills in the table in the index.html file. I have a cron job running it every 15 minutes. The effectively gives me what the load averages are on the box every 15 minutes. I also told the script to print out “High Load” followed by the load averages if the average was higher than 15. I then set cron to email me any output to standard out when it runs. So now I am emailed (and it’s send to my blackberry!) when ever the load is greater than 15. This means that if the web server was running on a machine with 15 processors it would be using 100% of the processor power. Since my host is using a 2 processor box a load of 15 would mean it is trying to run at 750% processing power. I think I did my math right. Anyway, 15 is way to high for a 2 processor server.

My shell script is as follows:  
`<br></br>#! /bin/ksh`

if \[\[ `uptime |wc -w` -eq 12 \]\]  
then  
one=`uptime |awk ‘{print $10}’ |sed ’s/,//g’`  
five=`uptime |awk ‘{print $11}’ |sed ’s/,//g’`  
fifteen=`uptime |awk ‘{print $12}’`  
time=`uptime |awk ‘{print $1}’`  
elif \[\[ `uptime|wc -w` -eq 13 \]\]  
then  
one=`uptime |awk ‘{print $11}’ |sed ’s/,//g’`  
five=`uptime |awk ‘{print $12}’ |sed ’s/,//g’`  
fifteen=`uptime |awk ‘{print $13}’`  
time=`uptime |awk ‘{print $1}’`  
fi

echo “

| $time \\n

| $one \\n

| $five \\n

| $fifteen \\n

|
|---|---|---|---|
” &gt;&gt; /home/haggerty/public\_html/load/index.html

newone=`echo $one |awk -F. ‘{print $1}’`  
newfive=`echo $five |awk -F. ‘{print $1}’`  
newfifteen=`echo $fifteen |awk -F. ‘{print $1}’`

if \[\[ $newone -gt 15 || $newfive -gt 15 || $newfifteen -gt 15 \]\]  
then  
echo “High Load:\\n$one, $five, $fifteen”  
fi

Now since this script is running every 15 minutes for 24 hours, the page will have 96 entries per day. After a week you would have a table with 672 entries. After a month there would be 2688 to 2976 entries depending on the month. That’s a lot of data to be faced with.

So I decided that I would write another script that will archive the data at the end of the day. What this script does is copy the content of index.html to a file labeled with the date with an extension of .html. For example the data from Feb 09, 2006 would be called 20060209.html. I then add an entry to a table of contents page that adds a link to the newly created archive. After creating the new file it then clears index.html and recreates the above table.

The archive script is ran each night at 23:55:00 via cron. The script is as follows:

`<br></br>#!/bin/ksh`

year=`date +%Y`  
month=`date +%m`  
day=`date +%d`

echo “

<title>$month/$day/$year Load</title>\\n<center># $month/$day/$year Load

</center>\\n“ &gt; /home/haggerty/public\_html/load/archive/$year$month$day.html cat /home/haggerty/public\_html/load/index.html &gt;&gt; /home/haggerty/public\_html/load/archive/$year$month$day.html  
echo “

24. [$month/$day/$year](”./$year$month$day.html“)
” &gt;&gt; /home/haggerty/public\_html/load/archive/index.html  
echo “

<title>Today’s Load on</title>\\n | **Time** \\n

| **One Minute Average** \\n

| **Five Minute Average** \\n

| **Fifteen Minute Average** \\n

|
\\n“ &gt; /home/haggerty/public\_html/load/index.html


I think that’s it. I’ve only had it up and running for about a day and a half now. I’ve already seen loads ranging from 0 to 189. I definitely will not be staying with this company after my contract is up.

If you want to see the scripts in action you can see today’s loads at <http://www.thehaggertys.net/load>, archived loads are at <http://www.thehaggertys.net/load/archive>.