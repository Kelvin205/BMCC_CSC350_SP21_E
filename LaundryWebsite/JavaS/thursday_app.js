const thu_12am_3am = document.getElementById("thu12am");
const thu_3am_6am = document.getElementById("thu3am");
const thu_6am_9am = document.getElementById("thu6am");
const thu_9am_12pm = document.getElementById("thu9am");
const thu_12pm_3pm = document.getElementById("thu12pm");
const thu_3pm_6pm = document.getElementById("thu3pm");
const thu_6pm_9pm = document.getElementById("thu6pm");
const thu_9pm_12am = document.getElementById("thu9pm");

thl_12am = false;
thl_3am = false;
thl_6am = false;
thl_9am = false;
thl_12pm = false;
thl_3pm = false;
thl_6pm = false;
thl_9pm = false;

logged = false;

var day = "Thursday";

//sessions
var user = sessionStorage.getItem("user"); 
var alreadylogged = sessionStorage.getItem("log"); 
var logday = sessionStorage.getItem("Appointment_Day"); 
var signupdate = sessionStorage.getItem("Signup_Date");


window.addEventListener('load', 
  function() { 
    if (signupdate != null){
    	if (signupdate == "thl_12am"){
    		thu_12am_3am.innerHTML = user;
	  		logged = true;
	  		thl_12am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "thl_3am"){
    		thu_3am_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		thl_3am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	 else if (signupdate == "thl_6am"){
    		thu_6am_9am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		thl_6am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "thl_9am"){
    		thu_9am_12pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		thl_9am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}


    	else if (signupdate == "thl_12pm"){
    		thu_12pm_3pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		thl_12pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "thl_3pm"){
    		thu_3pm_6pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		thl_3pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "thl_6pm"){
    		thu_6pm_9pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		thl_6pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "thl_9pm"){
    		thu_9pm_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		thl_9pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    }
  }, false);

thu_12am_3am.addEventListener("click", (e) => {
    e.preventDefault(); 


    if (  alreadylogged === null || logday == "Thursday" || logday === null || alreadylogged == false){
	    if (logged == false){

	    	alert("Appointment Successful");
	    	thu_12am_3am.innerHTML = user; 
	  		logged = true;
	  		thl_12am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "thl_12am")

	    } else if (logged == true && thl_12am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	thu_12am_3am.innerHTML = "Available!"; 
			    	logged = false;
			    	thl_12am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }




	    } else if (logged == true && thl_12am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

thu_3am_6am.addEventListener("click", (e) => {
    e.preventDefault(); 

 if (  alreadylogged === null || logday == "Thursday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	thu_3am_6am.innerHTML = user; 
	  		logged = true;
	  		thl_3am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "thl_3am")

	    } else if (logged == true && thl_3am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	thu_3am_6am.innerHTML = "Available!"; 
			    	logged = false;
			    	thl_3am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && thl_3am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


thu_6am_9am.addEventListener("click", (e) => {
    e.preventDefault(); 


 if (  alreadylogged === null || logday == "Thursday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	thu_6am_9am.innerHTML = user; 
	  		logged = true;
	  		thl_6am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "thl_6am")

	    } else if (logged == true && thl_6am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	thu_6am_9am.innerHTML = "Available!"; 
			    	logged = false;
			    	thl_6am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && thl_6am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

thu_9am_12pm.addEventListener("click", (e) => {
    e.preventDefault(); 
 
 if (  alreadylogged === null || logday == "Thursday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	thu_9am_12pm.innerHTML = user; 
	  		logged = true;
	  		thl_9am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "thl_9am")

	    } else if (logged == true && thl_9am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	thu_9am_12pm.innerHTML = "Available!"; 
			    	logged = false;
			    	thl_9am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && thl_9am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


thu_12pm_3pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "Thursday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	thu_12pm_3pm.innerHTML = user; 
	  		logged = true;
	  		thl_12pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "thl_12pm")

	    } else if (logged == true && thl_12pm == true ){
 	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	thu_12pm_3pm.innerHTML = "Available!"; 
			    	logged = false;
			    	thl_12pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && thl_12pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})




thu_3pm_6pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "Thursday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	thu_3pm_6pm.innerHTML = user; 
	  		logged = true;
	  		thl_3pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "thl_3pm")

	    } else if (logged == true && thl_3pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	thu_3pm_6pm.innerHTML = "Available!"; 
			    	logged = false;
			    	thl_3pm = false;
				
			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && thl_3pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

thu_6pm_9pm.addEventListener("click", (e) => {
    e.preventDefault(); 

     if (  alreadylogged === null || logday == "Thursday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	thu_6pm_9pm.innerHTML = user; 
	  		logged = true;
	  		thl_6pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "thl_6pm")

	    } else if (logged == true && thl_6pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	thu_6pm_9pm.innerHTML = "Available!"; 
			    	logged = false;
			    	thl_6pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && thl_6pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

thu_9pm_12am.addEventListener("click", (e) => {
    e.preventDefault(); 

       if (  alreadylogged === null || logday == "Thursday" || logday === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	thu_9pm_12am.innerHTML = user; 
	  		logged = true;
	  		thl_9pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "thl_9pm")

	    } else if (logged == true && thl_9pm == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	thu_9pm_12am.innerHTML = "Available!"; 
			    	logged = false;
			    	thl_9pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && thl_9pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

