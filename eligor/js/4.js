"use strict";

var num_field = document.querySelector('.num-field'),
    plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    model_history = document.querySelector('.history'),
    package_details = document.querySelector('.package-details'),
    t1 = document.querySelector('.t1'),
    t2 = document.querySelector('.t2'),
    t3 = document.querySelector('.t3'),
    delivery = document.querySelector('.delivery');
    

minus.addEventListener('click', function () {
    if (+(num_field.value) === 1 ) {
        return false;
    } else {
        var temp_attr = +(num_field.value) - 1;
        num_field.setAttribute('value', temp_attr);
        num_field.value = temp_attr;
    }
});

plus.addEventListener('click', function () {
    var temp_attr = +(num_field.value) + 1;
    num_field.setAttribute('value', temp_attr);
    num_field.value = temp_attr;
});

t1.addEventListener('click', function () {
    if ((t1.classList.contains('active-tab-link') !== true) && (model_history.classList.contains('active-tab') !== true)) {
        document.querySelector('.active-tab-link').classList.remove('active-tab-link');
        t1.classList.add('active-tab-link');
        document.querySelector('.active-tab').classList.remove('active-tab');
        model_history.classList.add('active-tab');
    } else {
        return false;
    }
});

t2.addEventListener('click', function () {
    if ((t2.classList.contains('active-tab-link') !== true) && (package_details.classList.contains('active-tab') !== true)) {
        document.querySelector('.active-tab-link').classList.remove('active-tab-link');
        t2.classList.add('active-tab-link');
        document.querySelector('.active-tab').classList.remove('active-tab');
        package_details.classList.add('active-tab');
    } else {
        return false;
    }
});

t3.addEventListener('click', function () {
    if ((t3.classList.contains('active-tab-link') !== true) && (delivery.classList.contains('active-tab') !== true)) {
        document.querySelector('.active-tab-link').classList.remove('active-tab-link');
        t3.classList.add('active-tab-link');
        document.querySelector('.active-tab').classList.remove('active-tab');
        delivery.classList.add('active-tab');
    } else {
        return false;
    }
});