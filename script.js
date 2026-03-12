document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

let message = document.getElementById("loginMessage");

if(user === "admin" && pass === "1234")
{
message.textContent = "Login Successful";
message.className = "success";

setTimeout(function(){
window.location.href="home.html";
},1500);

}
else
{
message.textContent = "Invalid Login Details";
message.className = "error";
}

});