const form = document.getElementById("login-form");
const button = document.getElementById("submit");
const popUp = document.getElementById("popup");


var current_user; 

button.addEventListener("click", (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    if (username == "pass" && password == "word") {
        /*alert("Welcome!"); */

 		popUp.style.backgroundColor = "#A7FF7F";
        popUp.style.color = "#35A600";
        popUp.style.border = "1px solid #35A600";
        popUp.style.opacity = 1;
        popUp.innerHTML = "Nice";

        current_user = username;

		setTimeout(function(){window.location.href = "Laundry_WebSite.html"; }, 2000); 



	

    } else {

    	popUp.style.opacity = 1;
    	setTimeout(function(){ popUp.style.opacity = 0 }, 5000);
  
                
    }
})




