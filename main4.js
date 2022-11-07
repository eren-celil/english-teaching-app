addEventListener('DOMContentLoaded', (event) => {
        let first = document.getElementById('first');
        let second = document.getElementById('second');
        let third = document.getElementById('third');
        let fourth = document.getElementById('fourth');
        let fifth = document.getElementById('fifth');
       
        let button = document.getElementById('button');
        let end = document.querySelector('.end');



        button.addEventListener('click', function(){
                if(first.value == 'did' && second.value == 'went' && third.value == 'came' && fourth.value == 'was' && fifth.value == "didn't"){
                        end.classList.remove('hidden')
                }else {
                        alert('There are wrong answers here 😔')
                }
        })

        
});
