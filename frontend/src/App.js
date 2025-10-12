const logo = document.querySelector('.logo'); /* Використовуємо метод querySelector для вибору першого елемента у документі, який має клас logo.*/

// Піднімання логотипу при наведенні
logo.addEventListener('mouseover', () => { /* коли курсор миші переміщується над логотипом, виконується функція, визначена в тілі дужок.*/
    logo.style.transform = 'translateY(-5px)'; /*піднімає логотип на 5 пікселів вгору по осі Y. */
});

// Повернення до початкової позиції при виході
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'translateY(0)';
});

const sliderCon = [
  { text: "Stellar Steps Heels", img: "/img/card1.png" },
  { text: "Emerald Blazer", img: "/img/card2.png" },
  { text: "Allure Mask Hat", img: "/img/card3.png" },
  { text: "Crimson Gloss Heels", img: "/img/card4.png" }
];


const slider = document.querySelector('.carousel');

slider.innerHTML = sliderCon.map(s => `
                <div class="product-card">
                    <img src= "${s.img}">
                    <h3>${s.text}</h3>
                </div>
  `).join('');

$(slider).slick({
  infinity: true,
  arrow: true,
  autoplay: true,
  autoplaySpeed: 2500,
  slide: "div",
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.slick-prev').html('&#10094;');
$('.slick-next').html('&#10095;');