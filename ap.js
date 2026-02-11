
let bar=document.querySelector('.fa-bars');
let menu=document.querySelector('.menu');

bar.addEventListener('click',()=>{
    menu.classList.toggle('show_menu'); 

});
document.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        menu.classList.remove('show_menu');
    }
   
});

// ================================================================================

