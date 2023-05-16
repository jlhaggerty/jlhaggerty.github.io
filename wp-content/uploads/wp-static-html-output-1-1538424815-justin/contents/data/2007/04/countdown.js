var today=new Date()

//Enter the occasion's MONTH (1-12) and DAY (1-31):
var theoccasion=new Date(today.getFullYear(), 09, 01)

//Customize text to show before and on occasion. Follow grammer below:
var beforeOccasionText="left until WVU Football 2007"
var onOccasiontext="Today is opening day, get to Mountaineer Field!"

var monthtext=new Array("Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec")
theoccasion.setMonth(theoccasion.getMonth()-1) //change to 0-11 month format
//var showdate="("+monthtext[theoccasion.getMonth()]+" "+theoccasion.getDate()+")" //show date of occasion

var one_day=1000*60*60*24
var calculatediff=""

calculatediff=Math.ceil((theoccasion.getTime()-today.getTime())/(one_day))
if (calculatediff<0){ //if bday already passed
var nextyeartoday=new Date()
nextyeartoday.setFullYear(today.getFullYear()+1)
calculatediff=Math.ceil((nextyeartoday.getTime()-today.getTime())/(one_day)+calculatediff)
}

//Display message accordingly
var pluraldayornot=(calculatediff==1)? "day" : "days"
if (calculatediff>0)
	document.write("<b>Only "+calculatediff+" "+pluraldayornot+" "+beforeOccasionText+"!</b>")
else if (calculatediff==0)
	document.write("<b>"+onOccasiontext+"!</b>")
