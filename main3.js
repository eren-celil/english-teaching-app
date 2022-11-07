
const array = ["ask", "start", "give","help","need","talk","take","finish","think","show", "want","say","open","close","make","find","do","leave","play","run" ]


const randomizer = document.querySelector('.randomizer')

function change(){
                
        let randomNumber = Math.floor(Math.random() * (array.length));
        randomizer.innerHTML = array[randomNumber];

        }

       
