
//Getting elements from the HTML code

const form = document.getElementById("login-form");// this holds the login values
const button = document.getElementById("submit"); // this is the login button
const popUp = document.getElementById("popup");  //this is the popup confirmation that tells the user wether their login credentials are correct 

button.addEventListener("click", (e) => {
    e.preventDefault();
    const username = form.username.value; // user's entered username
    const password = form.password.value; // user's entered password

    if (username == "pass" && password == "word") { //checking if the password and username are pass and word before loginning in 
        /*alert("Welcome!"); */ //ommited

        //changing popUp's css to be green since the login's correct
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
		setTimeout(function(){window.location.href = "Laundry_WebSite.html"; }, 2000); 



	

    } else { //login's wrong

        //incorrect credentials popup is now visible 
    	popUp.style.opacity = 1;

        //wait 5 seconds then hides incorrect crediants message
    	setTimeout(function(){ popUp.style.opacity = 0 }, 5000);
  
                
    }
})



