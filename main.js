let input = document.querySelector('.input');
let button = document.querySelector('.button');
let popup = document.querySelector('.popup');
let intro = document.querySelector('.intro');
let page2 = document.querySelector('.page2')


const array = ["That's awesome! Anything else?", "That's craaaazy. What else you have got?", "That seems okay. Do you have any other experiences?", "That's impressive! What else!", "This class is amazing!, but is that all?", "I knew that Hazim Kulak is the best! Keep going!", "WoW! You guys are great! Anything else?"]




function change(){
        if(input.value == "what is next?" ){
                page2.classList.remove('hidden');
        }else if(input){
                let randomNumber = Math.floor(Math.random() * (array.length));
                intro.innerHTML = array[randomNumber]
        }
}
       
