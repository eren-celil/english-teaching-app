let input = document.querySelector('.input');
let button = document.querySelector('.button');
let popup = document.querySelector('.popup');

button.addEventListener('click', ()=> {
        if(input.value == 'Coronavirus happened in 2020'){
                popup.classList.remove('hidden');
        }
})