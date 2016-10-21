/*******************

Group Events -json basic api version 3
GET /:urlname/events
Host: api.meetup.com
url name: Chester-Speaking-Club
page :
nly: time

https://secure.meetup.com/meetup_api/console/?path=/:urlname/events

Hence - Request URL (select chester-spaeaking -club link and filter for 1 page, time)

https://api.meetup.com/Chester-Speaking-Club/events?&sign=true&photo-host=public&page=1&only=time


Signed URL - (an API Key signature https://www.meetup.com/meetup_api/auth/#keysign)
Similar to OAuth signing, this method of authentication certifies that a request was approved by a particular user. Unlike OAuth-signed requests, key-signed requests may be reused and recycled as long as their corresponding API key is valid. 

If a signed URL is released to the public, any application can use it to interact with Meetup as if it had that API key; the difference is that it can not change definitive parameters or use the signature against other API methods.

https://api.meetup.com/Chester-Speaking-Club/events?photo-host=public&page=1&sig_id=155522042&only=time&sig=9176d30934d8d1de7af5c64931c6786adbb1f0d5

To check date works and puts into button ok

Long date

'December 25, 1995 23:15:30'

Short date

'May 06, 2017 10:14:12'

***************************/

(function(){    // put JS in an IIFE to keep date variables localy scoped
    
    var meetupApi =$("#meetupApi").attr("data-meetupapi");
    console.log("\neetupApi = " + meetupApi);
    
    var theMonth = document.getElementById("theMonth");
    var theDate = document.getElementById("theDate");
    var theDateIndices = document.getElementById("theDateIndices");
    var timeOfMeetup = 0;   // 1st Jan 1970 just as a blank
    
    /***********  Get time from secure meetup API   *****/
    $.ajax({
        url: meetupApi,
        method:'GET',
        dataType: 'jsonp',
        /*dataType: 'jsonp': If this line is removed this ajax always fails 'XMLHttpRequest cannot load https://api.meetup.com/Chester-Speaking-Club..... Origin http://localhost:4000 is not allowed by Access-Control-Allow-Origin' error.
        So use the JSONP (JSON Padding) interface. It allows you to make external domain requests without proxy servers or fancy header stuff. http://usejquery.com/blog/jquery-cross-domain-ajax-guide */
        success: function(meetupData){
            console.log("** -> SUCCESS in ajax meetup_api.js   meetupData = " + meetupData);
            console.log(JSON.stringify(meetupData));
            console.log("--> " + Object.keys(meetupData));
            
            var mArray = [];
            $.each(meetupData, function(i, meetTime){
                mArray.push(meetTime);
            }
                  );
            
            timeOfMeetup = mArray[1][0].time;  
            console.log("timeOfMeetup = " + timeOfMeetup);
            
            var meetupDate = new Date(timeOfMeetup);  // convert timeOfMeetup to real date
            
            var dayofmonth = meetupDate.getDate();
            var month = meetupDate.getMonth();
            console.log("meetupDate = " + meetupDate);
            console.log("day of month = " + dayofmonth);
            console.log("month -> = " + month);
            
            
            theDate.innerHTML = dayofmonth;
            
            var date_indices=""; 
            
            if(dayofmonth<=3){
                switch (dayofmonth) {
                        
                    case 1:
                        date_indices = "st";
                        break;
                        
                    case 2:
                        date_indices = "nd";
                        break;
                        
                    case 3:
                        date_indices = "rd";
                        break;        
                }
            }
            else{ date_indices = "th";}
            
            theDateIndices.innerHTML = date_indices;
            
            
            var monthString="";
            
            switch (month) {
                    
                case 0:
                    monthString = "January";
                    break;
                    
                case 1:
                    monthString = "Feburary";
                    break;
                    
                case 2:
                    monthString = "March";
                    break;
                    
                case 3:
                    monthString = "April";
                    break;
                    
                case 4:
                    monthString = "May";
                    break;
                    
                case 5:
                    monthString = "June";
                    break;
                    
                case 6:
                    monthString = "July";
                    break;
                    
                case 7:
                    monthString = "August";
                    break;
                    
                case 8:
                    monthString = "September";
                    break;
                    
                case 9:
                    monthString = "October";
                    break;
                    
                case 10:
                    monthString = "November";
                    break;
                    
                case 11:
                    monthString = "December";
                    break;        
            }
            
            theMonth.innerHTML = monthString;
            
        },
        
        error: function(){
            console.log("** -> ERROR in ajax meetup_api.js\n");
        }
    });

}());
