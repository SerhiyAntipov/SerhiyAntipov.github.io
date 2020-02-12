//
//++++++++++++++ MAIN MENU HEIGHT++++++++++++++++++++++++++++++++++++++++++++++
(function(){
    let navSocial = document.querySelector('.nav-social');
    window.addEventListener('scroll', function positionPoint() {
        if (document.documentElement.scrollTop > navSocial.clientHeight) {
            navSocial.style.padding = '10px 5px 10px 10px';
        } else {    
            navSocial.style.padding = '25px 5px 25px 10px';
        }
    });
})();
