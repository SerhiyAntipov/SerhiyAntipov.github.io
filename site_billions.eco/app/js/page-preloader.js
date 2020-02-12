//
//++++++++++++++ PAGE PRELOADER ++++++++++++++++++++++++++++++++++++++++++++++
$(window).on('load', function () {
    let $preloader = $('.page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(1500).fadeOut('slow');
    $preloader.delay(1500).fadeOut('slow');
});