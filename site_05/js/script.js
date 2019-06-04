window.onload = function() {
//Form------------ 
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


//Slider------------    
    Slider();

    function Slider() {
        var sliderPhoto = document.querySelectorAll('.slider-photo');
        var sliderBack = document.querySelector('.back');
        var sliderForward = document.querySelector('.forward');

        sliderBack.addEventListener('click', function() {
            for (var i = 0; i < sliderPhoto.length; i++) {
                if (sliderPhoto[i].classList.value == 'slider-photo slider-active') {
                    if (i + 1 < sliderPhoto.length) {
                        sliderPhoto[i].classList.toggle('slider-active');
                        sliderPhoto[i + 1].classList.toggle('slider-active');
                    } else {
                        sliderPhoto[sliderPhoto.length - 1].classList.toggle('slider-active');
                        sliderPhoto[0].classList.toggle('slider-active');
                    }
                    return;
                }
            }
        });

        sliderForward.addEventListener('click', function() {
            for (var i = 0; i < sliderPhoto.length; i++) {
                if (sliderPhoto[i].classList.value == 'slider-photo slider-active') {
                    if (i - 1 >= 0) {
                        sliderPhoto[i].classList.toggle('slider-active');
                        sliderPhoto[i - 1].classList.toggle('slider-active');
                    } else {
                        sliderPhoto[0].classList.toggle('slider-active');
                        sliderPhoto[sliderPhoto.length - 1].classList.toggle('slider-active');
                    }
                    return;
                }
            }
        });
    }
//------------------
    
    
};