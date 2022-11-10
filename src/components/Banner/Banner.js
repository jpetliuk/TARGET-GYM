import { useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="bannerContainer">
      <div className="bannerTitle">
        <p data-aos="fade-in">NO TE QUEDES SIN ENTRENAR</p>
        <h1 data-aos="fade-in">
          VENÍ A ENTRENAR CON NOSOTROS <br />
          ¿QUÉ ESTAS ESPERANDO?
        </h1>
        <a href="#sedesContainer">
          <button data-aos="fade-in">EXPLORA NUESTRAS SEDES</button>
        </a>
      </div>
      <div className="bannerMision"></div>
    </div>
  );
};

export default Banner;
