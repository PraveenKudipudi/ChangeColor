console.log('inside scripts');
const Cbdy = document.querySelector("body");
const Cbtn = document.querySelector (".colorBtn");
const colors = ["yellow","blue","green",'#fefefe',
'#aefefe','#1efefe','#4efefe','#fe7efe',
'#fe2e2e','#0e0e0e'];


Cbtn.addEventListener('click',changecolor);

function changecolor()
{
let random = Math.floor( Math.random()* colors.length)
Cbdy.style.backgroundColor = colors[random];

console.log("Random value is "+random);
}

