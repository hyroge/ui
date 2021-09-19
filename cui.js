
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

/* 实现snackbar */

function cuisnackbarshow() {
  var x = document.getElementById("cuisnackbar")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


window.onload = () => {
  const menu = document.querySelector('.menu')
  const menuHeight = menu.offsetHeight - parseInt(getComputedStyle(menu)['paddingTop']) - parseInt(getComputedStyle(menu)['paddingBottom'])
  menu.style.height = '0'

  openMenu = e => {
      e.preventDefault()

      menu.style.left = `${e.clientX}px`
      menu.style.top = `${e.clientY + 5}px`
      menu.style.height = `${menuHeight}px`
      menu.classList.add('is-active')

      return false
  }

  colseMenu = () => {
      menu.style.height = '0'
      menu.classList.remove('is-active')
  }

  window.onclick = () => colseMenu()
}