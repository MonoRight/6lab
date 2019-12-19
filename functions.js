var radius = document.querySelector('.radius');
var buttom = document.querySelector('.buttom1');
var resul = document.querySelector('.result');

buttom.onclick = function(){
  resul.textContent = "Площа круга: " + (Math.PI * +radius.value * +radius.value);
}

var katet1 = document.querySelector('.katet1'),
katet2 = document.querySelector('.katet2'),
buttom1 = document.querySelector('.but1'),
result = document.querySelector('.result2');

buttom1.onclick = function(){
  result.textContent = "Гіпотенуза = " + (Math.sqrt(katet1.value*katet1.value + katet2.value*katet2.value));
}

