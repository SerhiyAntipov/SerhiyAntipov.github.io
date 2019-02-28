let sidebar_ul = document.querySelector('#sidebar_ul');
let social = document.getElementById('social');

sidebar_ul.onmousemove = function(event){
    social.style.width = sidebar.offsetWidth + 'px';
}

sidebar_ul.onmouseout = function(event){
    social.style.width = 115 + 'px';
}  