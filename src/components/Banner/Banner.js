import "./Banner.style.css";

const Banner = () => {
  return (
    <div id="bannerContainer">
      <div className="bannerTitle">
        <p>NO TE QUEDES SIN ENTRENAR</p>
        <h1>
          VENÍ A ENTRENAR CON NOSOTROS <br />
          ¿QUÉ ESTAS ESPERANDO?
        </h1>
        <a href="#sedesContainer">
          <button>EXPLORA NUESTRAS SEDES</button>
        </a>
      </div>
      <div className="bannerMision"></div>
    </div>
  );
};

export default Banner;
