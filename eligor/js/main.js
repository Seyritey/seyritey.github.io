var switch_type1 = document.querySelector('.type1'),
    switch_type2 = document.querySelector('.type2'),
    switch_type3 = document.querySelector('.type3'),
    mb1 = document.querySelector('.mb1'),
    mb2 = document.querySelector('.mb2'),
    mb3 = document.querySelector('.mb3');

switch_type1.addEventListener('click', function () {
    if ((switch_type1.classList.contains('active-type') !== true) && (mb1.classList.contains('active-mb') !== true)) {
        document.querySelector('.active-type').classList.remove('active-type');
        switch_type1.classList.add('active-type');
        document.querySelector('.active-mb').classList.remove('active-mb');
        mb1.classList.add('active-mb');
    } else {
        return false;
    }
});

switch_type2.addEventListener('click', function () {
    if ((switch_type2.classList.contains('active-type') !== true) && (mb2.classList.contains('active-mb') !== true)) {
        document.querySelector('.active-type').classList.remove('active-type');
        switch_type2.classList.add('active-type');
        document.querySelector('.active-mb').classList.remove('active-mb');
        mb2.classList.add('active-mb');
    } else {
        return false;
    }
});

switch_type3.addEventListener('click', function () {
    if ((switch_type3.classList.contains('active-type') !== true) && (mb3.classList.contains('active-mb') !== true)) {
        document.querySelector('.active-type').classList.remove('active-type');
        switch_type3.classList.add('active-type');
        document.querySelector('.active-mb').classList.remove('active-mb');
        mb3.classList.add('active-mb');
    } else {
        return false;
    }
});