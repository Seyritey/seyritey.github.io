"use strict";

var quantity = document.querySelector('.num-field'),
    plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    tractor_type = document.getElementById('tractor-type'),
    trailer_type = document.getElementById('trailer-type'),
    tractor_img = document.querySelector('.tractor-img'),
    trailer_img = document.querySelector('.trailer-img');


tractor_type.addEventListener('change', function () {
    tractor_img.setAttribute('src', 'models/personalized/t' + this.value + '.gif');

});

trailer_type.addEventListener('change', function () {
    trailer_img.setAttribute('src', 'models/personalized/l' + this.value + '.gif');

});




minus.addEventListener('click', function () {


    if (+(this.nextElementSibling.value) === 1) {
        return false;
    } else {
        var temp_attr = +(this.nextElementSibling.value) - 1;
        this.nextElementSibling.setAttribute('value', temp_attr);
        this.nextElementSibling.value = temp_attr;
    }



});

plus.addEventListener('click', function () {

    var temp_attr = +(this.previousElementSibling.value) + 1;
    this.previousElementSibling.setAttribute('value', temp_attr);
    this.previousElementSibling.value = temp_attr;


});