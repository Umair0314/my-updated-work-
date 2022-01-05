let cookieModel = document.querySelector(".cookie-concent-model")
let cancelCookieBtn =  document.querySelector(".btn.cancel")
let acceptCookieBtn =  document.querySelector(".btn.accept")
let expires = (new Date(Date.now()+ 3*1000)).toUTCString();
document.cookie = "cookieName=myCookie; expires=" + expires + 3 + " ;secure";

cancelCookieBtn.addEventListener("click", function(){
    cookieModel.classList.remove("active")
    cookieModel.style.display = "none"
})
acceptCookieBtn.addEventListener("click", function(){
    cookieModel.classList.remove("active")
    cookieModel.style.display = "none"
    localStorage.setItem("cookieAccepted", "yes")
})
let cookieAccepted = localStorage.getItem("cookieAccepted")
{!cookieAccepted ?
    setInterval(function() {
        cookieModel.style.display= "block"  
    }, 5000 ) 
    :
    setInterval(function () {
            cookieModel.classList.add("active")
            cookieModel.style.display = "block"
        }, 10000)

}

