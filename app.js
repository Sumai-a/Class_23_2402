let nav = document.querySelector('nav');



window.addEventListener('scroll', function(){

    let test = document.documentElement.scrollTop;

    if(test>50){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
});