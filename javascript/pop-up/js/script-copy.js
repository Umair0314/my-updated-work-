let cookieModel = document.querySelector(".cookie-concent-model")
let cancelCookieBtn =  document.querySelector(".btn.cancel")
let acceptCookieBtn =  document.querySelector(".btn.accept")

cancelCookieBtn.addEventListener("click", function(){
    cookieModel.classList.remove("active")
    cookieModel.style.display = "none"
})
acceptCookieBtn.addEventListener("click", function(){
    cookieModel.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
    cookieModel.style.display = "none"
})
let cookieAccepted = localStorage.getItem("cookieAccepted")
{!cookieAccepted ?
    setInterval(function() {
        cookieModel.style.display= "block"  
    }, 5000) 
    :
    setInterval(function(){
        cookieModel.classList.add("active")
    }, 30000)

}

