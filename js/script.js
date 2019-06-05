function sociaResize() {
    let sidebar = document.querySelector('#sidebar_ul');
    let social = document.querySelector('#social');

    sidebar.onmousemove = function(event) {
        social.style.width = 204 + 'px';
    }

    sidebar.onmouseout = function(event) {
        social.style.width = 115 + 'px';
    }
};
sociaResize();