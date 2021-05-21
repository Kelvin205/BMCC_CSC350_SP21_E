/*getting the variables used in the html to hold the avaialble appointment word

All comments apply to each (day-of-the-week)_app javascript

_____________________________________________________________________*/

const tue_12am_3am = document.getElementById("tue12am");
const tue_3am_6am = document.getElementById("tue3am");
const tue_6am_9am = document.getElementById("tue6am");
const tue_9am_12pm = document.getElementById("tue9am");
const tue_12pm_3pm = document.getElementById("tue12pm");
const tue_3pm_6pm = document.getElementById("tue3pm");
const tue_6pm_9pm = document.getElementById("tue6pm");
const tue_9pm_12am = document.getElementById("tue9pm");

//values used to check if an appointment is already made at a current time
//_____________________________________________________________________

tl_12am = false;
tl_3am = false;
tl_6am = false;
tl_9am = false;
tl_12pm = false;
tl_3pm = false;
tl_6pm = false;
tl_9pm = false;

//checks if user has already made an appointment
logged = false;

//saves the day the appointment
var day = "Tuesday";

//sessions
var user = sessionStorage.getItem("user"); // gets the user's username from session if it exists, should have been created by the login page
var alreadylogged = sessionStorage.getItem("log");  // gets the logged value declared above to check if the user has already made an appointment from session if it exists
var logday = sessionStorage.getItem("Appointment_Day");  // gets the date the user made the appointment if it exists from sessions
var signupdate = sessionStorage.getItem("Signup_Date"); //gets the timestamp the user made the appointment from sessions if it exists



//Adding appointments that have already been made using session storage
//----------------------------------------------------------------------------
window.addEventListener('load', 		
  function() {   //Fires when the the page is loaded.
  	//
    if (signupdate != null){ //checking if there's a signup date that already exists in sessions to update the page with the required information


    	/*----------------------------------------------------------------------------------------------------
			~Commments on the 12am - 3am appointment apply to all following time stamps in this function~

    	------------------------------------------------------------------------------------------------------*/


    	//12am - 3am appointment
    	if (signupdate == "tl_12am"){	//checking if that session date is the 12am - 3am time slot
    		tue_12am_3am.innerHTML = user; // changing the the timestamp from available to the user making the appointment
	  		logged = true; // setting log to true because a user has been logged
	  		tl_12am = true;  // setting the tl_12 to true because there's an appointment on this date


	  		sessionStorage.removeItem("log", logged); //removing the existing "true" logged value as sessions cant't be updated
	  		sessionStorage.setItem("log", logged) //replacing the removed logged vlue with a new value of "false"
    	}



    	//3am - 6am appointment
    	else if (signupdate == "tl_3am"){
    		tue_3am_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_3am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	//6am - 9am appointment
    	 else if (signupdate == "tl_6am"){
    		tue_6am_9am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_6am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	//9am - 12pm appointment
    	else if (signupdate == "tl_9am"){
    		tue_9am_12pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_9am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	//9am - 12pm appointment
    	else if (signupdate == "tl_12pm"){
    		tue_12pm_3pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_12pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	//12pm - 3pam appointment
    	else if (signupdate == "tl_3pm"){
    		tue_3pm_6pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_3pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	//3pm - 6pm appointment
    	else if (signupdate == "tl_6pm"){
    		tue_6pm_9pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_6pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	//12am - 9pm appointment
    	else if (signupdate == "tl_9pm"){
    		tue_9pm_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		tl_9pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    }
  }, false);



	/*----------------------------------------------------------------------------------------------------
			~~Commments on the 12am - 3am appointment button  to all following timestamp buttonsn~~
   	  ----------------------------------------------------------------------------------------------------*/



//Button pressed functions for all time stamps

tue_12am_3am.addEventListener("click", (e) => {  //button event, fires the time stamp button is selected
    e.preventDefault(); 


    if (  alreadylogged === null || tl_12am == true || logged == false){ //checks if the user has already made an appointment, or if the the appointment was made on the current day or if either or null, meaning no appoints have been made
		if (logged == false){		//checks if the user has no appointments on this page that were just made
	    	alert("Appointment Successful"); //alerting the user the they're succussfully made an appointment
	    	tue_12am_3am.innerHTML = user;   // setting the Avaliable to the current user
	  		logged = true; // setting logged to true since an appointment has beeen made
	  		tl_12am = true; // setting calue to true to confirm that this time has been used

	  		sessionStorage.setItem("log", logged); // saving logged value to true since an appointment has been made
	    	sessionStorage.setItem("Appointment_Day", day); // saving current day of the appointment to session in the case it doesn't exist or has been removed
	    	sessionStorage.setItem("Signup_Date", "tl_12am"); // saving the name of the time slot so that it can be updated after the user changed pages

	    } else if (logged == true && tl_12am == true ){  //checks if the user already has an appointment on the date they're selecting 

	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) { //sends a confirmation notice to cancel the appointment before cancelling
                   	tue_12am_3am.innerHTML = "Available!"; //changing the value within to Available
			    	logged = false; //user no longer has an appointment
			    	tl_12am = false; //slot no longer taken
					  

			    	//removing values from session as they can not be updated and are no longer valid
			    	sessionStorage.removeItem("log", logged); //user's appointment status
			    	sessionStorage.removeItem("Appointment_Day", day); // day the user made the appointment
			    	sessionStorage.removeItem("Signup_Date"); //time the user made the appointment

			    	sessionStorage.setItem("log", logged); // replacing the users appointment status so they can make another appointment 
			    	alert("Appointment successfully cancel"); //aerts users to cancellation
                } else {
                    alert("No changes were made to your appointment."); //if the user cancels appointment cancellation nothing will happen and they will be alerted to the lack of changes
                }

    }
} else if (logged == true && logday == "Tuesday"){ //checks if the user has already made an appointment and it's on this day
	   	 alert("Please cancel current appointment on this day before attempting to make another.");
	
} else { //User has an appointment that's not on the current day. alerts user of the already amde appointment 
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


//Comments above apply to events below.

tue_3am_6am.addEventListener("click", (e) => {
    e.preventDefault(); 

  if (  alreadylogged === null || tl_3am == true || logged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_3am_6am.innerHTML = user; 
	  		logged = true;
	  		tl_3am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_3am")

	    } else if (logged == true && tl_3am == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_3am_6am.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_3am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
            } else {
                alert("No changes were made to your appointment.")
			}
	}	

} else if (logged == true && logday == "Tuesday"){ //checks if the user has already made an appointment and it's on this day
	   	 alert("Please cancel current appointment on this day before attempting to make another.");
	
} else { //User has an appointment that's not on the current day. alerts user of the already amde appointment 
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})



tue_6am_9am.addEventListener("click", (e) => {
    e.preventDefault(); 


  if (  alreadylogged === null || tl_6am == true || logged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_6am_9am.innerHTML = user; 
	  		logged = true;
	  		tl_6am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_6am")

	    } else if (logged == true && tl_6am == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_6am_9am.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_6am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
            } else {
                alert("No changes were made to your appointment.")
			}
	}	

} else if (logged == true && logday == "Tuesday"){ //checks if the user has already made an appointment and it's on this day
	   	 alert("Please cancel current appointment on this day before attempting to make another.");
	
} else { //User has an appointment that's not on the current day. alerts user of the already amde appointment 
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


tue_9am_12pm.addEventListener("click", (e) => {
    e.preventDefault(); 
 
  if (  alreadylogged === null || tl_9am == true || logged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_9am_12pm.innerHTML = user; 
	  		logged = true;
	  		tl_9am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_9am")

	    } else if (logged == true && tl_9am == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_9am_12pm.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_9am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
            } else {
                alert("No changes were made to your appointment.")
			}
	}	

} else if (logged == true && logday == "Tuesday"){ //checks if the user has already made an appointment and it's on this day
	   	 alert("Please cancel current appointment on this day before attempting to make another.");
	
} else { //User has an appointment that's not on the current day. alerts user of the already amde appointment 
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


tue_12pm_3pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || tl_12pm == true || logged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_12pm_3pm.innerHTML = user; 
	  		logged = true;
	  		tl_12pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_12pm")

	    } else if (logged == true && tl_12pm == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_12pm_3pm.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_12pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
            } else {
                alert("No changes were made to your appointment.")
			}
	}	

} else if (logged == true && logday == "Tuesday"){ //checks if the user has already made an appointment and it's on this day
	   	 alert("Please cancel current appointment on this day before attempting to make another.");
	
} else { //User has an appointment that's not on the current day. alerts user of the already amde appointment 
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})



tue_3pm_6pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || tl_3pm == true || logged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_3pm_6pm.innerHTML = user; 
	  		logged = true;
	  		tl_3pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_3pm")

	    } else if (logged == true && tl_3pm == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_3pm_6pm.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_3pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
            } else {
                alert("No changes were made to your appointment.")
			}
	}	

} else if (logged == true && logday == "Tuesday"){ //checks if the user has already made an appointment and it's on this day
	   	 alert("Please cancel current appointment on this day before attempting to make another.");
	
} else { //User has an appointment that's not on the current day. alerts user of the already amde appointment 
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})



tue_6pm_9pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || tl_6pm == true || logged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_6pm_9pm.innerHTML = user; 
	  		logged = true;
	  		tl_6pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_6pm")

	    } else if (logged == true && tl_6pm == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_6pm_9pm.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_6pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
            } else {
                alert("No changes were made to your appointment.")
			}
	}	

} else if (logged == true && logday == "Tuesday"){ //checks if the user has already made an appointment and it's on this day
	   	 alert("Please cancel current appointment on this day before attempting to make another.");
	
} else { //User has an appointment that's not on the current day. alerts user of the already amde appointment 
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})



tue_9pm_12am.addEventListener("click", (e) => {
    e.preventDefault(); 

    if (  alreadylogged === null || tl_9pm == true || logged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	tue_9pm_12am.innerHTML = user; 
	  		logged = true;
	  		tl_9pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "tl_9pm")

	    } else if (logged == true && tl_9pm == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	tue_9pm_12am.innerHTML = "Available!"; 
			    	logged = false;
			    	tl_9pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
            } else {
                alert("No changes were made to your appointment.")
			}
	}	

} else if (logged == true && logday == "Tuesday"){ //checks if the user has already made an appointment and it's on this day
	   	 alert("Please cancel current appointment on this day before attempting to make another.");
	
} else { //User has an appointment that's not on the current day. alerts user of the already amde appointment 
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

