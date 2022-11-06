const display = document.querySelector('.display');
const button = document.querySelector('.choose');


function random() { // min and max included 
        let result = Math.floor(Math.random() * (30 - 1 + 1) + 1);
        display.innerHTML = result;
      }
      
    
      
      