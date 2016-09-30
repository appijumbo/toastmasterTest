/*

function fetchGroups(url, cb, data) {
    if(!data) data = [];
    
    $.ajax({
        
        dataType:'jsonp',
        method:'get',
        url:url,
        success:function(result) {
            console.log('back with ' + result.data.length +' results');
            console.dir(result);
            //add to data
            data.push.apply(data, result.data);
            if(result.meta.next_link) {
                var nextUrl = result.meta.next_link;
                fetchGroups(nextUrl, cb, data);
            } else {
                cb(data);   
            }
        }
    }); 
    
}

$(document).ready(function() {
    
    var $results = $("#results");

    $results.html("<p>Finding meetups with Ionic in the description.</p>");

    fetchGroups("https://api.meetup.com/find/groups?&photo-host=public&page=50&text=ionic&sig_id=2109318&radius=global&order=newest&sig=ad335a79ccce2b1bb65b27fe10ea6836305e5533&callback=?", function(res) {
        console.log("totally done");
        console.dir(res);   

        var s = "";
        for(var i=0;i<res.length; i++) {
            var group = res[i];
            s += "<h2>"+(i+1)+" <a href='"+group.link+"'>"+group.name+"</a></h2>";
            if(group.group_photo && group.group_photo.thumb_link) {
                s += "<img src=\"" + group.group_photo.thumb_link + "\" align=\"left\">";
            }
            s += "<p>Location: "+group.city + ", " + group.state + " " + group.country + "</p><br clear=\"left\">";
        }
        $results.html(s);
        
        
    });
        
});
*/

var year = new Date().getFullYear();
console.log("year = " + year);

var month = new Date().getMonth();
console.log("Month = " + month);

var date = new Date().getDate();
console.log("date = " + date );


var dayOfTheWeek=""; 
switch (new Date().getDay()) {
        
    case 0:
        dayOfTheWeek = "Sun";
    break;
        
    case 1:
        dayOfTheWeek = "Mon";
    break;
        
    case 2:
        dayOfTheWeek = "Tue";
    break;
        
    case 3:
        dayOfTheWeek = "Wednes";
    break;
        
    case 4:
        dayOfTheWeek = "Thurs";
    break;
        
    case 5:
        dayOfTheWeek = "Fri";
    break;
        
    case 6:
        dayOfTheWeek = "Satur";
    break;
        
}

console.log("day = " + dayOfTheWeek + "day");


var hours = new Date().getHours();
console.log("hours = " + hours );

var minutes = new Date().getMinutes();
console.log("minutes = " + minutes );



/******************************/
/* Quick and dirty method */
    var time = new Date().getTime();
    var theDate = new Date(time);
    console.log(theDate.toString());
/******************************/



/******************************/

/*      Meetup API time in milliseconds     */
/*      https://api.meetup.com/Chester-Speaking-Club/events/234296860?&sign=true&photo-host=public&only=time       */

/* Responds with 

        HTTP/1.1 200 success
        {
        "time": 1475605800000
        }

*/

/* Quick n dirty - don't use this for button */
    var theDate = new Date(1475605800000);
    console.log(theDate.toString());

var hours = new Date(1475605800000).getHours();
console.log("hours = " + hours );

var minutes = new Date(1475605800000).getMinutes();
console.log("minutes = " + minutes );

