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