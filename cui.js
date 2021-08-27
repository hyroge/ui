/* 实现手机端tab展开 */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropmenu')) {

    var dropdowns = document.getElementsByClassName("dropmenu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/* 实现展开菜单 */
function cuidroplist() {
  document.getElementById("cuidroplist").classList.toggle("listshow");
}
<<<<<<< Updated upstream
=======


/* 实现snackbar */
function cuisnackbarshow() {
  var x = document.getElementById("cuisnackbar")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
>>>>>>> Stashed changes
