const headerStatic = document.querySelector('.container-header__static');

window.onscroll = function(){
    scrollDown();
}

function scrollDown(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop > 50){
        // headerStatic.classList.replace("container-header__static" ,"container-header__fixed");
        headerStatic.classList.add('container-header__fixed');


    }
    else{
        // headerStatic.classList.replace("container-header__fixed" ,"container-header__static");
        headerStatic.classList.remove('container-header__fixed');
        
    }
}

// ? body document.body => for browser Safari
// ? body document.documentElement => for browser Chrome, FireFox, IE
