import React from "react";
import bannerImage from "../../assets/banner.png"
import "./Banner.css";

function Banner(){
    return(
        <section className="banner">
            <img src={bannerImage} alt="Banner Image" />
        </section>
    )
}

export default Banner;