window.onload = function() {

    var entrance = document.querySelector('.main-entrance');
    var mainForm = document.querySelector('.main-form');



    entrance.addEventListener('click', function() {
        mainForm.classList.toggle('hiden')
    });

    mainForm.addEventListener('click', function(event) {
        if (event.target.className == 'form-cross') {
            mainForm.classList.add('hiden');
        }
    });


};