let btn1 = document.querySelector('.button1');
let btn2 = document.querySelector('.button2');
let btnField = document.querySelector('.buttonField');
let body = document.querySelector('body');
let txt = document.querySelector('.text');


btn1.onclick = function (){
  btnField.style.display = "flex"
  btnField.style.justifyContent = "center";
  btnField.style.alignItems = "center";
  body.style.color = "white";
  txt.innerHTML = "Thank You!";
}
btn2.onclick = function (){
  btnField.style.display = "flex"
  btnField.style.justifyContent = "center";
  btnField.style.alignItems = "center";
  body.style.color = "white";
  txt.innerHTML = "Please?!";
  btn1.innerHTML = 'yes!'
  btn2.textContent = 'yes'
}

let clickCount = 0;

btn2.addEventListener('click', () => {
  clickCount++;
  if(clickCount === 2){
    txt.innerHTML = "i knew you loved me";
    btnField.style.display = "none"
    clickCount = 0;
  }
})
