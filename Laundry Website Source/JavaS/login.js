function validate() {
  var user = document.forms["form"]["username"].value;
  var pass = document.forms["form"]["password"].value;
  
  const popUp = document.getElementById("popup");
  
  if (user == "" || pass == "")
  {
	popUp.style.opacity = 1;
	
    //wait 5 seconds then hides incorrect crediants message
    setTimeout(function(){ popUp.style.opacity = 0 }, 5000);
    return false;
  }
  else
  {
	    popUp.style.backgroundColor = "#A7FF7F";
        popUp.style.color = "#35A600";
        popUp.style.border = "1px solid #35A600";
        popUp.style.opacity = 1;

        //changing popup's content to say Nice
        popUp.innerHTML = "Nice";

        var user = username;

        //storing the username to sessions for future use
        sessionStorage.setItem("user", user);
       
        //waits 2 seconds before changing the page so that the user can red the success message
		setTimeout(function(){window.location.href = "Laundry_WebSite.php"; }, 2000); 
  }
}