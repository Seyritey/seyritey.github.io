"use strict";

var auth_btn = document.querySelector('.auth-btn');

auth_btn.addEventListener('click', function () {
        auth_btn.classList.remove('shake-me');
        setTimeout(function () {
            auth_btn.classList.add('shake-me');
        }, 10);


});
document.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
            auth_btn.classList.remove('shake-me');
            setTimeout(function () {
                auth_btn.classList.add('shake-me');
            }, 10);

    }
});