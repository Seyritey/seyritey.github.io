"use strict";

var remove_btn = document.querySelectorAll('.remove-btn'),
    quantity = document.querySelectorAll('.quantity'),
    plus = document.querySelectorAll('.plus'),
    minus = document.querySelectorAll('.minus'),
    youself,
    remove_youself;

for (var i = 0; i < remove_btn.length; i++) {
    remove_btn[i].parentNode.addEventListener('click', function () {
        this.parentNode.classList.add('slow-hide');

        youself = this;
        remove_youself = setTimeout(function () {
            youself.parentNode.parentNode.removeChild(youself.parentNode);
        }, 300);
    });
};



for (var i = 0; i < minus.length; i++) {
    quantity[i].addEventListener('input', function () {
        var temp_attr2 = +(this.parentNode.parentNode.previousElementSibling.children[0].textContent) * +(this.value);
        this.parentNode.parentNode.nextElementSibling.children[0].textContent = temp_attr2.toFixed(2);
    });
};



for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function () {


        if (+(this.nextElementSibling.value) === 1) {
            return false;
        } else {
            var temp_attr = +(this.nextElementSibling.value) - 1;
            this.nextElementSibling.setAttribute('value', temp_attr);
            this.nextElementSibling.value = temp_attr;

            var temp_attr2 = +(this.parentNode.parentNode.previousElementSibling.children[0].textContent) * +(this.nextElementSibling.value);
            this.parentNode.parentNode.nextElementSibling.children[0].textContent = temp_attr2.toFixed(2);
        }



    });
};

for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function () {

        var temp_attr = +(this.previousElementSibling.value) + 1;
        this.previousElementSibling.setAttribute('value', temp_attr);
        this.previousElementSibling.value = temp_attr;

        var temp_attr2 = +(this.parentNode.parentNode.previousElementSibling.children[0].textContent) * +(this.previousElementSibling.value);
        this.parentNode.parentNode.nextElementSibling.children[0].textContent = temp_attr2.toFixed(2);

    });
};