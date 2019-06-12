var initialPoint;
var finalPoint;
var sliderImg = document.querySelectorAll('.slider-img');
var arrsliderImg = Array.from(sliderImg);

document.querySelector('.slider').addEventListener('touchstart', function(event) {
    if (event.defaultPrevented != false) {
        event.preventdefault()
    }
    event.stopPropagation();
    initialPoint = event.changedTouches[0];
}, false);

document.querySelector('.slider').addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 50 || yAbs > 50) {
        if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX) {
                arrsliderImg.push(arrsliderImg.shift());
                /*СВАЙП ВЛІВО*/
            } else {
                arrsliderImg.unshift(arrsliderImg.pop());
                /*СВАЙП ВПРАВО*/
            }
            for (let i = 0; i < arrsliderImg.length; i++) {
                arrsliderImg[i].setAttribute('position', i);
            }
        }
    }
}, false);


//
//var imgSlider = document.querySelectorAll('.slider-img');
//var imgCenterSlider = imgSlider[Math.floor(imgSlider.length/2)];
//console.log(imgCenterSlider)
//
///*Ловим касание*/
//imgCenterSlider.addEventListener('touchstart', function(event) {
//if (event.targetTouches.length == 1) {
//var touch=event.targetTouches[0];
//touchOffsetX = touch.pageX - touch.target.offsetLeft;
//touchOffsetY = touch.pageY - touch.target.offsetTop;
//}
//}, false);
///*Передвигаем объект*/
//imgCenterSlider.addEventListener('touchmove', function(event) {
//if (event.targetTouches.length == 1) {
//var touch = event.targetTouches[0];
//imgCenterSlider.style.left = touch.pageX-touchOffsetX + 'px';
//imgCenterSlider.style.top = touch.pageY-touchOffsetY + 'px';
//}
//}, false);
//