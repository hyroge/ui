
/* 实现展开菜单 */
function cuidroplist() {
  document.getElementById("cuidroplist").classList.toggle("listshow");
}
function cuidroplist2() {
  document.getElementById("cuidroplisttab").classList.toggle("listshow");
}

/* 实现snackbar */
function cuisnackbarshow() {
  var x = document.getElementById("cuisnackbar");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}


let shareData = {
  title: 'Huton design',
  text: 'have a nice weekend',
  url: 'https://connect.ourstudio.top/',
}

const btn = document.querySelector('#sharingcui');
const resultPara = document.querySelector('.result');

btn.addEventListener('click', () => {navigator.share(shareData)});

document.querySelectorAll(".cui-input-range").forEach(elem => {
  elem.oninput = () => {
      if (elem.max == '') elem.max = '100';
      if (elem.min == '') elem.min = '0';
      elem.style.background = `linear-gradient(to right ,#5395FD ${(elem.value / (elem.max - elem.min))*100}%, #A6D3FD 0%, #A6D3FD ${(1 - (elem.value / (elem.max - elem.min)))*100}%) no-repeat`
  }
  elem.oninput();
})