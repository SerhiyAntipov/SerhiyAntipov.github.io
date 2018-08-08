/*
$('#sidebar')

    .mouseover(function() {
        $(this).width(200);
    })
    .mouseout(function() {
        $(this).width(130);
});

*/


/*
$(document).ready(function() {

    $("#sidebar").hover(
    //on mouseover
        function() {
        $(this).animate({
        width: '200'// '+=250' //adds 250px
        }, 'fast' //sets animation speed to slow
        );
        },
        //on mouseout
        function() {
        $(this).animate({
        width: '130'//'-=250px' //substracts 250px
        }, 'fast'
        );
        }
    );

});

*/

var b_1 = document.getElementById("main_content");
var h_1 = b_1.clientHeight || b_1.offsetHeight;
console.log (h_1)


var b = document.getElementById("sidebar");
var h = b.clientWidth || b.offsetWidth;
console.log (h)
