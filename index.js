//default classroom gps
var classroomLat=13.860568039827395
var classroomLong=100.69581858067349

//Function to clock in
function clockingIn(){
    //gets user's current location 
    navigator.geolocation.getCurrentPosition(success, console.error);
    function success(data){
        //for calculating distance between two using map api
        var classroomGps= new google.maps.LatLng(classroomLat,classroomLong);
        var userGps=new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
        var distanceInMeter= google.maps.geometry.spherical.computeDistanceBetween(classroomGps,userGps);

        //debugging
        console.log(`Classroom : ${classroomLat},${classroomLong}`);
        console.log(`User: ${data.coords.latitude},${data.coords.longitude}`)
        console.log(`distanceInMeter = ${distanceInMeter}`);
     //checks whether user is within 50m radius of classroom   
     if(distanceInMeter<50.00){
        var now =new Date();
        var hrs=now.getHours();
        var min=now.getMinutes();
        var sec=now.getSeconds();
        var p= "AM";
        if(hrs==0){
            hrs=12;
        }
        if(hrs>12){
            hrs=hrs-12;
            p="PM"
        }
        //this part of code is to make 2 digit number
        Number.prototype.pad=function(digits){
            for(var n=this.toString();n.length<digits;n=0+n);
            return n;
        }
        //Displaying results
        document.getElementById("clockIn").innerHTML=hrs.pad(2)+":"+min.pad(2)+":"+sec.pad(2)+" "+p ;
        document.getElementById("btnIn").style.display="none";
        document.getElementById("btnOut").style.display="block";
        document.getElementById("msg").innerHTML="You are In";
    }
    //if user is not within 50 m radius
    else{
        document.getElementById("msg").innerHTML="Please get in within 50m radius";
    }
  
}}

//function to clock out
function clockingOut(){
    //gets user's current location 
    navigator.geolocation.getCurrentPosition(success, console.error);
    function success(data){
        //for calculating distance between two using map api
        var classroomGps= new google.maps.LatLng(classroomLat,classroomLong);
        var userGps=new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
        var distanceInMeter= google.maps.geometry.spherical.computeDistanceBetween(classroomGps,userGps);

        //debugging
        console.log(`Classroom : ${classroomLat},${classroomLong}`);
        console.log(`User: ${data.coords.latitude},${data.coords.longitude}`)
        console.log(`distanceInMeter = ${distanceInMeter}`);

    //checks whether user is within 50m radius of classroom
    if(distanceInMeter<50.00){
        var now =new Date();
        var hrs=now.getHours();
        var min=now.getMinutes();
        var sec=now.getSeconds();
        var p= "AM";
        if(hrs==0){
            hrs=12;
        }
        if(hrs>12){
            hrs=hrs-12;
            p="PM"
        }
        //this part of code is to make 2 digit number
        Number.prototype.pad=function(digits){
            for(var n=this.toString();n.length<digits;n=0+n);
            return n;
        }

        //Displaying results
        document.getElementById("clockOut").innerHTML=hrs.pad(2)+":"+min.pad(2)+":"+sec.pad(2)+" "+p ;
        document.getElementById("btnIn").style.display="block";
        document.getElementById("btnOut").style.display="none";
        document.getElementById("msg").innerHTML="You are Out";
    }
    //if user is not within 50 m radius
    else{
        document.getElementById("msg").innerHTML="Please get in within 50m radius";
    }

}}

