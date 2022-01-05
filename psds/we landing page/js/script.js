window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").classList.add("sticky")
  } else {
    document.getElementById("navbar").classList.remove("sticky")
  }
}