const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

let color = document.querySelector('.color')
let btn = document.getElementById('btn')

btn.addEventListener('click', function () {
  const randomNumber = getRandom()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandom() {
  return Math.floor(Math.random() * colors.length)
}
