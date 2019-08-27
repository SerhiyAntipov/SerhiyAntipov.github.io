window.onload = function() {
    var initialPoint;
    var finalPoint;
    var sliderImg = document.querySelectorAll('.slider-img');
    var sliderArrowLeft = document.querySelector('.left')
    var sliderArrowRight = document.querySelector('.right')

    //Conversion to array, use of all array functions------
    var arrsliderImg = Array.from(sliderImg);

    //Button control--------------------
    sliderArrowLeft.addEventListener("click", function(event) {
        slideLeft();
    });

    sliderArrowRight.addEventListener("click", function(event) {
        slideRight()
    });

    //    Slide function---------------------
    function slideLeft() {
        arrsliderImg.push(arrsliderImg.shift());
        for (var i = 0; i < arrsliderImg.length; i++) {
            arrsliderImg[i].setAttribute('data-position', i);
        }
    };

    function slideRight() {
        arrsliderImg.unshift(arrsliderImg.pop());
        for (var i = 0; i < arrsliderImg.length; i++) {
            arrsliderImg[i].setAttribute('data-position', i);
        }
    };

    //Autoslide-----------------------------
    
//    setInterval(slideLeft, 3000);

};