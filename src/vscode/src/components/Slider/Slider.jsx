import React from "react";
import { Link } from "react-router-dom";
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import "./Slider.css"


const sliderCon = [
  { text: "Stellar Steps Heels", img: "/img/card1.png" },
  { text: "Emerald Blazer", img: "/img/card2.png" },
  { text: "Allure Mask Hat", img: "/img/card3.png" },
  { text: "Crimson Gloss Heels", img: "/img/card4.png" }
];

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-prev" onClick={onClick}>
      &#10094;
    </button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-next" onClick={onClick}>
      &#10095;
    </button>
  );
}


function Slider() {
  const settings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />
  };

    return (
        <section className="collection-section">
            <h1>CHECK OUT OUR NEW COLLECTION "PURE"</h1>
            <p>
            The "Pure" collection embodies the essence of minimalism and refined simplicity. 
            Clean lines, natural textures, and muted tones create elegant silhouettes that highlight 
            the true beauty of every detail. This is clothing that speaks of purity in style and impeccable taste.
            </p>

            <SliderLib {...settings} className="carousel">
                {sliderCon.map((s, i) => (
                    <div key={i} className="product-card">
                        <img src={s.img} alt={s.text} />
                        <h3>{s.text}</h3>
                    </div>
                ))}
            </SliderLib>

            <Link to="/collection" className="view-all">view all</Link>
        </section>
  );
}

export default Slider;