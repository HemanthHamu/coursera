const sidebar = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const chicken = document.querySelector('.chicken');
sidebar.addEventListener('click',()=>{
    if(menu.style.visibility==='hidden'){
        menu.style.visibility = 'visible';
        chicken.style.margin = '40px auto'
    }
    else{
        menu.style.visibility = 'hidden';
        chicken.style.margin = '-100px auto'
    }
})
