//menu list
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//price
let year = document.querySelector('.pricing .price-toggler .year');
let month = document.querySelector('.pricing .price-toggler .month');
let yearAmount = document.querySelectorAll('.pricing .price .year');
let monthAmount = document.querySelectorAll('.pricing .price .month');

year.onclick = () =>{
    year.classList.add('active');
    month.classList.remove('active');
    yearAmount.forEach(years => {
        years.style.display = 'block';
    });
    monthAmount.forEach(months => {
        months.style.display = 'none';
    });
};

month.onclick = () =>{
    year.classList.remove('active');
    month.classList.add('active');
    yearAmount.forEach(years => {
        years.style.display = 'none';
    });
    monthAmount.forEach(months => {
        months.style.display = 'block';
    });
};