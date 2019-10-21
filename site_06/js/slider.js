(function () {
    let sliderImg = document.querySelectorAll('.slider-img');
    let sliderArrowLeft = document.querySelector('.left')
    let sliderArrowRight = document.querySelector('.right')

    //Conversion to array, use of all array functions------
    let arrsliderImg = Array.from(sliderImg);

    sliderArrowLeft.addEventListener("click", function (event) {
        slideLeft();
    });

    sliderArrowRight.addEventListener("click", function (event) {
        slideRight()
    });

    function slideLeft() {
        arrsliderImg.push(arrsliderImg.shift());
        for (let i = 0; i < arrsliderImg.length; i++) {
            arrsliderImg[i].setAttribute('data-position', i);
        }
    };

    function slideRight() {
        arrsliderImg.unshift(arrsliderImg.pop());
        for (let i = 0; i < arrsliderImg.length; i++) {
            arrsliderImg[i].setAttribute('data-position', i);
        }
    };

    //Autoslide-----------------------------
    setInterval(slideLeft, 5000);

})();