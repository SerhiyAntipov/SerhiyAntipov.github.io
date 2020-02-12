(function () {
    let formTitleLogin = document.querySelector('.form-title_login');
    let formTitleRegistration = document.querySelector('.form-title_registration');

    if (formTitleLogin &&  formTitleRegistration) {
        if (formTitleLogin.innerText !== null && formTitleLogin.innerText !== undefined) {

            let active = formTitleLogin.innerText;
            let formLogin = document.querySelector('.form-login');
            let formRegistered = document.querySelector('.form-registered');


            formTitleRegistration.addEventListener('click', function (event) {
                if (event.target.tagName == 'P' && event.target.innerText != active) {
                    formTitleRegistration.style.backgroundColor = "#69b433";
                    formTitleLogin.style.backgroundColor = "#8c8c8c";
                    active = event.target.innerText;
                    formRegistered.style.display = "block";
                    formLogin.style.display = "none";
                }
            })

            formTitleLogin.addEventListener('click', function (event) {
                if (event.target.tagName == 'P' && event.target.innerText != active) {
                    formTitleRegistration.style.backgroundColor = "#8c8c8c";
                    formTitleLogin.style.backgroundColor = "#69b433";
                    active = event.target.innerText;
                    formLogin.style.display = "block";
                    formRegistered.style.display = "none";
                }
            })
        }
    }



})();
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

//
//++++++++++++++ PAGE PRELOADER ++++++++++++++++++++++++++++++++++++++++++++++
$(window).on('load', function () {
    let $preloader = $('.page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(1500).fadeOut('slow');
    $preloader.delay(1500).fadeOut('slow');
});
//
//++++++++++++++ POPUP MAP WINDOW ++++++++++++++++++++++++++++++++++++++++++++++
(function () {
    $(function () {
        $('.video__info').magnificPopup({
            items: {
                src: '#youtube-video',
                type: 'inline',
            }
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
    
})();

//
//++++++++++++++ POPUP FORM ++++++++++++++++++++++++++++++++++++++++++++++
(function () {
    $(function () {
        $('.form-registred').magnificPopup({
            items: {
                src: '#form-authorization-wrapper',
                type: 'inline',
            }
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
    
})();
//
//++++++++++++++ SLIDER  LATEST NEWS  ++++++++++++++++++++++++++++++++++++++++++++++
(function () {
    let latestNewsSliders = document.querySelector('.latest-news-slider');
    if (latestNewsSliders) {
        (function getAjaxJsonLatestNews() {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    latestNews = JSON.parse(xhr.response);
                    sliderLatestNews(latestNews);
                }
            }
            xhr.open('GET', 'data/latest-news.json', true);
            xhr.send();
        })();
    }
})();
// render slider Latest News
function sliderLatestNews(latestNews) {
    latestNewsSliders = document.querySelector('.latest-news-slider');
    let latestNewsSlide = '';
    latestNews.forEach(function (data, i) {
        latestNewsSlide +=
            `
      <div class="latest-news-slider__slide">
          <img src="${latestNews[i]['url']}" alt="img ${latestNews[i]['title']}">
          <div class="latest-news-slider__text-container">
              <h4 class="latest-news-slider__title">${latestNews[i]['title']}</h4>
              <p class="latest-news-slider__sub-title">${latestNews[i]['sub-title']}</p>
              <div class="latest-news-slider__link">
                  <span class="latest-news-slider__link-date">${latestNews[i]['date']}</span>
                  <a class="latest-news-slider__link-link" href="${latestNews[i]['link']}">Read more</a>
              </div>
          </div>
      </div>`
    });
    latestNewsSliders.innerHTML = latestNewsSlide
    startLatestNewsSlider();
}
// slider Latest News ("Slick slider")
function startLatestNewsSlider() {
    $('.latest-news-slider').slick({
        infinite: true,
        adaptiveHeight: true,
        edgeFriction: '0.5',
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    adaptiveHeight: true,
                    edgeFriction: '0.5',
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    adaptiveHeight: true,
                    edgeFriction: '0.5',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    infinite: true,
                    adaptiveHeight: true,
                    edgeFriction: '0.5',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });
};
 //
 //++++++++++++++ SMOOTH SCROLL +++++++++++++++++++++++++++++++++++++++++++++++++++
 (function () {
     let scroll = new SmoothScroll('a[href*="#"]', {
         ignore: '[data-scroll-ignore]',
         speed: 500,
         offset: 45
     });
 })();