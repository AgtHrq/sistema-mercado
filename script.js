var element = document.querySelector("input.btn");


element.addEventListener("click", function(e) {
  document.querySelector(".email").value = "";
  document.querySelector(".password").value = "";
})