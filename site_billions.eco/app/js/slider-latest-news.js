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