const sun_12am_3am = document.getElementById("sun12am");
const sun_3am_6am = document.getElementById("sun3am");
const sun_6am_9am = document.getElementById("sun6am");
const sun_9am_12pm = document.getElementById("sun9am");
const sun_12pm_3pm = document.getElementById("sun12pm");
const sun_3pm_6pm = document.getElementById("sun3pm");
const sun_6pm_9pm = document.getElementById("sun6pm");
const sun_9pm_12am = document.getElementById("sun9pm");

sl_12am = false;
sl_3am = false;
sl_6am = false;
sl_9am = false;
sl_12pm = false;
sl_3pm = false;
sl_6pm = false;
sl_9pm = false;

logged = false;

var day = "Sunday";

//sessions
var user = sessionStorage.getItem("user"); 
var alreadylogged = sessionStorage.getItem("log"); 
var logday = sessionStorage.getItem("Appointment_Day"); 
 
sun_12am_3am.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (alreadylogged === null){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sun_12am_3am.innerHTML = user; 
	  		logged = true;
	  		sl_12am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);

	    } else if (logged == true && sl_12am == true ){
	    	alert("Appointment Cancelled")
	    	sun_12am_3am.innerHTML = "Available!"; 
	    	logged = false;
	    	sl_12am = false;

	    	sessionStorage.removeItem("log", logged);
	    	sessionStorage.removeItem("Appointment_Day", day);

	    } else if (logged == true && sl_12am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

sun_3am_6am.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (alreadylogged === null){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sun_3am_6am.innerHTML = user; 
	  		logged = true;
	  		sl_3am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);

	    } else if (logged == true && sl_3am == true ){
	    	alert("Appointment Cancelled")
	    	sun_3am_6am.innerHTML = "Available!"; 
	    	logged = false;
	    	sl_3am = false;

	    	sessionStorage.removeItem("log", logged);
	    	sessionStorage.removeItem("Appointment_Day", day);

	    } else if (logged == true && sl_3am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

sun_6am_9am.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (alreadylogged === null){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sun_6am_9am.innerHTML = user; 
	  		logged = true;
	  		sl_6am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);

	    } else if (logged == true && sl_6am == true ){
	    	alert("Appointment Cancelled")
	    	sun_6am_9am.innerHTML = "Available!"; 
	    	logged = false;
	    	sl_6am = false;

	    	sessionStorage.removeItem("log", logged);
	    	sessionStorage.removeItem("Appointment_Day", day);

	    } else if (logged == true && sl_6am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

sun_9am_12pm.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (alreadylogged === null){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sun_9am_12pm.innerHTML = user; 
	  		logged = true;
	  		sl_6am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);

	    } else if (logged == true && sl_9am == true ){
	    	alert("Appointment Cancelled")
	    	sun_9am_12pm.innerHTML = "Available!"; 
	    	logged = false;
	    	sl_9am = false;

	    	sessionStorage.removeItem("log", logged);
	    	sessionStorage.removeItem("Appointment_Day", day);

	    } else if (logged == true && sl_9am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

sun_12pm_3pm.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (alreadylogged === null){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sun_12pm_3pm.innerHTML = user; 
	  		logged = true;
	  		sl_12pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);

	    } else if (logged == true && sl_12pm == true ){
	    	alert("Appointment Cancelled")
	    	sun_12pm_3pm.innerHTML = "Available!"; 
	    	logged = false;
	    	sl_12pm = false;

	    	sessionStorage.removeItem("log", logged);
	    	sessionStorage.removeItem("Appointment_Day", day);

	    } else if (logged == true && sl_12pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})



sun_3pm_6pm.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (alreadylogged === null){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sun_3pm_6pm.innerHTML = user; 
	  		logged = true;
	  		sl_3pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);

	    } else if (logged == true && sl_3pm == true ){
	    	alert("Appointment Cancelled")
	    	sun_3pm_6pm.innerHTML = "Available!"; 
	    	logged = false;
	    	sl_3pm = false;

	    	sessionStorage.removeItem("log", logged);
	    	sessionStorage.removeItem("Appointment_Day", day);

	    } else if (logged == true && sl_3pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

sun_6pm_9pm.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (alreadylogged === null){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sun_6pm_9pm.innerHTML = user; 
	  		logged = true;
	  		sl_6pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);

	    } else if (logged == true && sl_6pm == true ){
	    	alert("Appointment Cancelled")
	    	sun_6pm_9pm.innerHTML = "Available!"; 
	    	logged = false;
	    	sl_6pm = false;

	    	sessionStorage.removeItem("log", logged);
	    	sessionStorage.removeItem("Appointment_Day", day);

	    } else if (logged == true && sl_6pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

sun_9pm_12am.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (alreadylogged === null){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	sun_9pm_12am.innerHTML = user; 
	  		logged = true;
	  		sl_9pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);

	    } else if (logged == true && sl_9pm == true ){
	    	alert("Appointment Cancelled")
	    	sun_9pm_12am.innerHTML = "Available!"; 
	    	logged = false;
	    	sl_9pm = false;

	    	sessionStorage.removeItem("log", logged);
	    	sessionStorage.removeItem("Appointment_Day", day);

	    } else if (logged == true && sl_pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

