
const random = Math.trunc(Math.random() * 20 + 1);




const message = document.querySelector(".message")
const againEl = document.querySelector('.again');
const checkinput = document.querySelector('.check');
const guessEl = document.querySelector(".guess");
const numberEl = document.querySelector('.number');
const labelhighscore = document.querySelector('.highscore');
const labelscore = document.querySelector('.score');

//    getnumber from localStorage 
const getnumber=JSON.parse(localStorage.getItem('number'));
    labelhighscore.textContent=getnumber;


checkinput.addEventListener('click', () => {
    if (random == guessEl.value) {
        document.body.style.backgroundColor = "green";
        message.textContent = "Congrats";
        numberEl.textContent=random;
        labelhighscore.textContent=labelscore.textContent;
        const guessnumber =labelhighscore.textContent;
        localStorage.setItem('number',JSON.stringify(guessnumber));
        
    }
    else if (guessEl.value < random) {
        message.textContent = "your number is low";
        labelscore.textContent--;
    }
    else if (guessEl.value > random) {
        message.textContent = "your number is high";
        labelscore.textContent--;
    }
    
});


againEl.addEventListener("click",()=>{
    location.reload();
})
