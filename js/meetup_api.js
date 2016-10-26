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

Use Epoch & Unix Timestamp Conversion Tools   http://www.epochconverter.com


----------------------- 
3 char date   May
'May 06, 2017 10:14:12'
1494065652000
(max-width: 991px) and (min-width: 768px) and (orientation: landscape)
meetup_text     padding-top: 3rem;
                padding-left: 30px;
                padding-right: 30px;




-----------------------
4 char date   June  July
'June 25, 1995 23:15:30'
804122130000
@media (min-width: 1200px)
meetup_text     padding-left: 20px;
                padding-right: 20px;
                
@media (max-width: 991px) and (min-width: 768px) and (orientation: landscape)
meetup_text     padding-left: 20px;
                padding-right: 20px;




-----------------------
5 char date  March  April
'March 25, 1995 23:15:30'
796173330000

@media (max-width: 767px) and (orientation: landscape)
meetup_text     padding-left: 3px;
                padding-right: 3px;

@media (min-width: 1200px)
meetup_text     padding-left: 15px;
                padding-right: 15px;

@media (max-width: 991px) and (min-width: 768px) and (orientation: landscape)
meetup_text     padding-left: 15px;
                padding-right: 15px;
                
@media (max-width: 1199px) and (min-width: 992px) and (orientation: landscape)
meetup_text     padding-left: 15px;
                padding-right: 15px;
                
          
          
----------------------
6 char date  August
'August 25, 1995 23:15:30'
circle button: 
(max-width: 767px) and (orientation: landscape)
meetup_text    padding-left: 0px;

(max-width: 767px) and (orientation: portrait)
meetup_text     padding-left: 5px;

(max-width: 991px) and (min-width: 768px) and (orientation: landscape): meetup_text   padding-left: 5px;
809392530000




----------------------
7 char   Jan   Oct
'Mon, 24 Oct 2016 13:19:43 GMT'
1477315183000
@media (max-width: 767px) and (orientation: portrait)
meetup_text    padding-top: 0;
               padding-left: 0;
               padding-right: 0;
                
#theMonth {
    font-size: 1.8rem;
    padding-left: 0;
    padding-right: 0;
}


@media (max-width: 767px) and (orientation: landscape)
#theMonth {
    font-size: 1.4rem;
    padding-left: 0;
    padding-right: 0;
}



-----------------------
8 char date    Feb  Nov  Dec
circle button: needs smaller month text and shifting up and to the left
'December 25, 1995 23:15:30'
819933330000
@media (max-width: 767px) and (orientation: landscape)
meetup_text   padding-left: 15px;
              padding-right: 15px;
              
#theMonth {
    font-size: 1.2rem;
            padding-left: 0;
            padding-right: 0;
}

@media (max-width: 767px) and (orientation: portrait)
#theMonth {
    font-size: 1.4rem;
    padding-left: 0;
    padding-right: 0;
}


@media (max-width: 1199px) and (min-width: 992px) and (orientation: portrait)
meetup_text padding-top: 0rem;

#theMonth {
    
    padding-bottom: 35px;
    }


-------------------
9 char  Sep
'Mon, 24 Sep 2016 13:13:21 GMT'
1474722801000
@media (max-width: 767px) and (orientation: portrait)
meetup_text    padding-top: 0;
               padding-left: 0;
               padding-right: 0;
                
#theMonth {
    font-size: 1.4rem;
    padding-left: 0;
    padding-right: 0;
}


@media (max-width: 767px) and (orientation: landscape)
meetup_text    padding-top: 0;
               padding-left: 0;
               padding-right: 0;
#theMonth {
    font-size: 1.1rem;
    padding-left: 0;
    padding-right: 0;
}
***************************/

(function(){    // put JS in an IIFE to keep date variables localy scoped


    
    var meetupApi =$("#meetupApi").attr("data-meetupapi"); 
    console.log("\nmeetupApi = " + meetupApi);
    
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
            
            timeOfMeetup =  1494065652000;   /*May ** REMOVE THIS !!!!  ******/
            
            /* timeOfMeetup =  1474722801000;   /Sep ** REMOVE THIS !!!!  ******/
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
            
            var monthEnglish = [
                    {"monthName":"January"},
                    {"monthName":"February"},
                    {"monthName":"March"},
                    {"monthName":"April"},
                    {"monthName":"May"},
                    {"monthName":"June"},
                    {"monthName":"July"},
                    {"monthName":"August"},
                    {"monthName":"September"},
                    {"monthName":"October"},
                    {"monthName":"November"},
                    {"monthName":"December"}
                ];
            
            
            
            monthString = monthEnglish[month].monthName;
         
            console.log("monthString = " + monthString);
            
            theMonth.innerHTML = monthString;
            
        },
        
        error: function(){
            console.log("** -> ERROR in ajax meetup_api.js\n");
        }
    });

}());
