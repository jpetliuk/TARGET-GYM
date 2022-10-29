import "./Sedes.css";
import { Link } from "react-router-dom";
import instagram from "../../assets/img/icons/instagram.png";
import facebook from "../../assets/img/icons/facebook.png";
import whatsapp from "../../assets/img/icons/whatsapp.png";
import maps from "../../assets/img/icons/maps-and-flags.png";

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
          <div id="sedeFlorida" className="sedeStylesheet">
            <div className="sedeStylesheetContent">
              <h2>FLORIDA</h2>
              <p>Av. Gral. José de san martín 2462</p>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
          <div className="sedesHover">
            <div className="sedesHoverContent">
              <h2>FLORIDA</h2>
              <p>Av. Gral. José de san martín 2462</p>
              <Link to={"/sedes/florida"}>
                <button>CONOCER</button>
              </Link>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
        <div className="sedeBlock">
          <div id="sedeMaipu" className="sedeStylesheet">
            <div className="sedeStylesheetContent">
              <h2>MAIPU</h2>
              <p>Av. Maipú 574</p>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
          <div className="sedesHover">
            <div className="sedesHoverContent">
              <h2>MAIPU</h2>
              <p>Av. Maipú 574</p>
              <Link to={"/sedes/maipu"}>
                <button>CONOCER</button>
              </Link>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
        <div className="sedeBlock">
          <div id="sedeNunez" className="sedeStylesheet">
            <div className="sedeStylesheetContent">
              <h2>NUÑEZ</h2>
              <p>Av. Cabildo 3030</p>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
          <div className="sedesHover">
            <div className="sedesHoverContent">
              <h2>NUÑEZ</h2>
              <p>Av. Cabildo 3030</p>
              <Link to={"/sedes/nuñez"}>
                <button>CONOCER</button>
              </Link>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
        <div className="sedeBlock">
          <div id="sedeSanFernando" className="sedeStylesheet">
            <div className="sedeStylesheetContent">
              <h2>SAN FERNANDO</h2>
              <p>Av. Constitución 1635</p>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
          <div className="sedesHover">
            <div className="sedesHoverContent">
              <h2>SAN FERNANDO</h2>
              <p>Av. Constitución 1635</p>
              <Link to={"/sedes/san-fernando"}>
                <button>CONOCER</button>
              </Link>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
        <div className="sedeBlock">
          <div id="sedeTigre" className="sedeStylesheet">
            <div className="sedeStylesheetContent">
              <h2>TIGRE</h2>
              <p>Av. Cazón 749</p>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
          <div className="sedesHover">
            <div className="sedesHoverContent">
              <h2>TIGRE</h2>
              <p>Av. Cazón 749</p>
              <Link to={"/sedes/tigre"}>
                <button>CONOCER</button>
              </Link>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
        <div className="sedeBlock">
          <div id="sedeSanBernardo" className="sedeStylesheet">
            <div className="sedeStylesheetContent">
              <h2>SAN BERNARDO</h2>
              <p>Av. San Bernardo 866</p>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
          <div className="sedesHover">
            <div className="sedesHoverContent">
              <h2>SAN BERNARDO</h2>
              <p>Av. San Bernardo 866</p>
              <Link to={"/sedes/san-bernardo"}>
                <button>CONOCER</button>
              </Link>
              <div className="sedesMediaLinks">
                <a href="/">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/">
                  <img src={maps} alt="maps" />
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
    </div>
  );
};

export default Sedes;
