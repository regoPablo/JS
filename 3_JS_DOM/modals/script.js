'use strict';

//Como son 3 modales tenemos que usamos querySelectorAll de forma que almacenamos los 3 en una nodeList
let modalBtns = document.querySelectorAll('.show-modal');

//Asignamos un evento a cada boton recorriendo la nodeList
[...modalBtns].forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

//Listener para cerrar modal
document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

//Funcion que se encarga de abrir el modal
function openModal() {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
}

//Funcion que se encarga de cerrar el modal
function closeModal(ele) {
  console.log(ele);
  if (ele.pointerType === 'mouse' || ele.keyCode === 27) {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
  }
}
