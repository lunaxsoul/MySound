const burgerMenu = document.querySelector('.burger_menu');
const mainNav = document.querySelector('.menu1');
burgerMenu.addEventListener('click',() => {
    burgerMenu.classList.toggle('active');
    mainNav.classList.toggle('active');
});


// $('.reviews').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     prevArrow: '<img src="https://cdn-icons-png.flaticon.com/512/60/60775.png">',
//     nextArrow: '<img src="https://cdn-icons-png.freepik.com/512/60/60758.png">',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true,
//           centerMode: true,
//           centerPadding: '50px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: true,
//           centerMode: true,
//           centerPadding: '50px',
//           slidesToShow: 3
//         }
//       }
//     ]
//   });
