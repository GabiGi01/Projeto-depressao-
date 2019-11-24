let btnMenu = document.getElementById("btn-menu")

let menu = document.getElementById("menu")

let span1 = document.getElementById("span1")
let span2 = document.getElementById("span2")
let span3 = document.getElementById("span3")

btnMenu.addEventListener('click', function (e) {
  span1.classList.toggle('span1')
  span2.classList.toggle('span2')
  span3.classList.toggle('span3')
  //menu.classList.toggle('display-none')
  menu.style.height === '100vh' ? menu.style.height = '0vh' : menu.style.height = '100vh'
})

menu.addEventListener('click', function (e) {
  span1.classList.remove('span1')
  span2.classList.remove('span2')
  span3.classList.remove('span3')
  //menu.classList.add('display-none')
  menu.style.height = '0vh'
})