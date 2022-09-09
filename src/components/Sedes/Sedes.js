import "./Sedes.style.css";
import instagram from "../../assets/img/icons/instagram.png";
import facebook from "../../assets/img/icons/facebook.png";
import whatsapp from "../../assets/img/icons/whatsapp.png";

const Sedes = () => {
  return (
    <div id="sedesContainer">
      <h2 className="sedesTitle">NUESTRAS SEDES</h2>
      <p className="sedesSubtitle">
        Explorá y encontrá la sede que mas cómoda te quede y comenzá a entrenar
        con nosotros ahora.
      </p>
      <div className="sedesBlocksContainer">
        <div className="sedeBlock">
          <div id="sedeFlorida" className="sedeStylesheet"></div>
          <div className="sedesHover">
            <h2>FLORIDA</h2>
            <p>Av. Gral. José de san martín 2462</p>
            <button>CONOCER</button>
            <div className="sedesMediaLinks">
              <a href="/">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="sedeBlock">
          <div id="sedeMaipu" className="sedeStylesheet"></div>
          <div className="sedesHover">
            <h2>FLORIDA</h2>
            <p>Av. Gral. José de san martín 2462</p>
            <button>CONOCER</button>
            <div className="sedesMediaLinks">
              <a href="/">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="sedeBlock">
          <div id="sedeNunez" className="sedeStylesheet"></div>
          <div className="sedesHover">
            <h2>FLORIDA</h2>
            <p>Av. Gral. José de san martín 2462</p>
            <button>CONOCER</button>
            <div className="sedesMediaLinks">
              <a href="/">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="sedeBlock">
          <div id="sedeSanFernando" className="sedeStylesheet"></div>
          <div className="sedesHover">
            <h2>FLORIDA</h2>
            <p>Av. Gral. José de san martín 2462</p>
            <button>CONOCER</button>
            <div className="sedesMediaLinks">
              <a href="/">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="sedeBlock">
          <div id="sedeTigre" className="sedeStylesheet"></div>
          <div className="sedesHover">
            <h2>FLORIDA</h2>
            <p>Av. Gral. José de san martín 2462</p>
            <button>CONOCER</button>
            <div className="sedesMediaLinks">
              <a href="/">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className="sedeBlock">
          <div id="sedeSanBernardo" className="sedeStylesheet"></div>
          <div className="sedesHover">
            <h2>FLORIDA</h2>
            <p>Av. Gral. José de san martín 2462</p>
            <button>CONOCER</button>
            <div className="sedesMediaLinks">
              <a href="/">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sedes;
