const fri_12am_3am = document.getElementById("fri12am");
const fri_3am_6am = document.getElementById("fri3am");
const fri_6am_9am = document.getElementById("fri6am");
const fri_9am_12pm = document.getElementById("fri9am");
const fri_12pm_3pm = document.getElementById("fri12pm");
const fri_3pm_6pm = document.getElementById("fri3pm");
const fri_6pm_9pm = document.getElementById("fri6pm");
const fri_9pm_12am = document.getElementById("fri9pm");

fl_12am = false;
fl_3am = false;
fl_6am = false;
fl_9am = false;
fl_12pm = false;
fl_3pm = false;
fl_6pm = false;
fl_9pm = false;

logged = false;

var day = "Friday";

//sessions
var user = sessionStorage.getItem("user"); 
var alreadylogged = sessionStorage.getItem("log"); 
var logday = sessionStorage.getItem("Appointment_Day"); 
var signupdate = sessionStorage.getItem("Signup_Date");


window.addEventListener('load', 
  function() { 
    if (signupdate != null){
    	if (signupdate == "fl_12am"){
    		fri_12am_3am.innerHTML = user;
	  		logged = true;
	  		fl_12am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "fl_3am"){
    		fri_3am_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		fl_3am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	 else if (signupdate == "fl_6am"){
    		fri_6am_9am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		fl_6am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "fl_9am"){
    		fri_9am_12pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		fl_9am = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}


    	else if (signupdate == "fl_12pm"){
    		fri_12pm_3pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		fl_12pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "fl_3pm"){
    		fri_3pm_6pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		fl_3pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "fl_6pm"){
    		fri_6pm_9pm.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		fl_6pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    	else if (signupdate == "fl_9pm"){
    		fri_9pm_12am.innerHTML = user; 
    		logged_on_this_page = true;
	  		logged = true;
	  		fl_9pm = true; 


	  		sessionStorage.removeItem("log", logged);
	  		sessionStorage.setItem("log", logged)
    	}

    }
  }, false);

fri_12am_3am.addEventListener("click", (e) => {
    e.preventDefault(); 


    if (  alreadylogged === null || logday == "Friday" || lodgay === null || alreadylogged == false){
	    if (logged == false){

	    	alert("Appointment Successful");
	    	fri_12am_3am.innerHTML = user; 
	  		logged = true;
	  		fl_12am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "fl_12am")

	    } else if (logged == true && fl_12am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	fri_12am_3am.innerHTML = "Available!"; 
			    	logged = false;
			    	fl_12am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }




	    } else if (logged == true && fl_12am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }

})

fri_3am_6am.addEventListener("click", (e) => {
    e.preventDefault(); 

 if (  alreadylogged === null || logday == "Friday" || lodgay === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	fri_3am_6am.innerHTML = user; 
	  		logged = true;
	  		fl_3am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "fl_3am")

	    } else if (logged == true && fl_3am == true ){
	    	//alert("Appointment Cancelled")
	    	 if (confirm("Are you sure you want to cancel this appointment?")) {
                   	fri_3am_6am.innerHTML = "Available!"; 
			    	logged = false;
			    	fl_3am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && fl_3am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


fri_6am_9am.addEventListener("click", (e) => {
    e.preventDefault(); 


 if (  alreadylogged === null || logday == "Friday" || lodgay === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	fri_6am_9am.innerHTML = user; 
	  		logged = true;
	  		fl_6am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "fl_6am")

	    } else if (logged == true && fl_6am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	fri_6am_9am.innerHTML = "Available!"; 
			    	logged = false;
			    	fl_6am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && fl_6am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

fri_9am_12pm.addEventListener("click", (e) => {
    e.preventDefault(); 
 
 if (  alreadylogged === null || logday == "Friday" || lodgay === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	fri_9am_12pm.innerHTML = user; 
	  		logged = true;
	  		fl_9am = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "fl_9am")

	    } else if (logged == true && fl_9am == true ){
	    	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	fri_9am_12pm.innerHTML = "Available!"; 
			    	logged = false;
			    	fl_9am = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && fl_9am == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})


fri_12pm_3pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "Friday" || lodgay === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	fri_12pm_3pm.innerHTML = user; 
	  		logged = true;
	  		fl_12pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "fl_12pm")

	    } else if (logged == true && fl_12pm == true ){
 	//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	fri_12pm_3pm.innerHTML = "Available!"; 
			    	logged = false;
			    	fl_12pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && fl_12pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})




fri_3pm_6pm.addEventListener("click", (e) => {
    e.preventDefault(); 

   if (  alreadylogged === null || logday == "Friday" || lodgay === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	fri_3pm_6pm.innerHTML = user; 
	  		logged = true;
	  		fl_3pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "fl_3pm")

	    } else if (logged == true && fl_3pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	fri_3pm_6pm.innerHTML = "Available!"; 
			    	logged = false;
			    	fl_3pm = false;
				
			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }

	    } else if (logged == true && fl_3pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

fri_6pm_9pm.addEventListener("click", (e) => {
    e.preventDefault(); 

     if (  alreadylogged === null || logday == "Friday" || lodgay === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	fri_6pm_9pm.innerHTML = user; 
	  		logged = true;
	  		fl_6pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "fl_6pm")

	    } else if (logged == true && fl_6pm == true ){
		//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	fri_6pm_9pm.innerHTML = "Available!"; 
			    	logged = false;
			    	fl_6pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }


	    } else if (logged == true && fl_6pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

fri_9pm_12am.addEventListener("click", (e) => {
    e.preventDefault(); 

       if (  alreadylogged === null || logday == "Friday" || lodgay === null || alreadylogged == false){
	    if (logged == false){
	    	alert("Appointment Successful");
	    	fri_9pm_12am.innerHTML = user; 
	  		logged = true;
	  		fl_9pm = true; 

	  		sessionStorage.setItem("log", logged);
	    	sessionStorage.setItem("Appointment_Day", day);
	    	sessionStorage.setItem("Signup_Date", "fl_9pm")

	    } else if (logged == true && fl_9pm == true ){
			//alert("Appointment Cancelled")
	    	if (confirm("Are you sure you want to cancel this appointment?")) {
                  	fri_9pm_12am.innerHTML = "Available!"; 
			    	logged = false;
			    	fl_9pm = false;
					  

			    	sessionStorage.removeItem("log", logged);
			    	sessionStorage.removeItem("Appointment_Day", day);
			    	sessionStorage.removeItem("Signup_Date");

			    	sessionStorage.setItem("log", logged);
			    	alert("Appointment successfully cancel")
                } else {
                    alert("No changes were made to your appointment.")
                }



	    } else if (logged == true && fl_9pm == false){
	    	alert("Please cancel current appointment on this day before attempting to make another.");
	    }
    } else {
    	alert("Please cancel current appointment on " + logday + " before attempting to make another.");
    }
})

