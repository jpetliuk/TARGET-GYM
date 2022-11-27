import "./Sedes.css";
import { Link } from "react-router-dom";
import instagram from "../../assets/img/icons/instagram.png";
import facebook from "../../assets/img/icons/facebook.png";
import whatsapp from "../../assets/img/icons/whatsapp.png";
import maps from "../../assets/img/icons/maps-and-flags.png";
import { Data } from "../../Data";

const Sedes = () => {
  // const navigate = useNavigate();

  return (
    <div id="sedesContainer">
      <h2 className="sedesTitle" data-aos="fade-up">
        NUESTRAS SEDES
      </h2>
      <p className="sedesSubtitle" data-aos="fade-up">
        Explorá y encontrá la sede que mas cómoda te quede y comenzá a entrenar
        con nosotros ahora.
      </p>
      <div className="sedesBlocksContainer">
        {Data.map((item) => (
          <div className="sedeBlock" data-aos="fade-up" key={item.id}>
            <div
              className="sedeStylesheet"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              // onClick={() => navigate(`/sedes/${item.id}`)}
            >
              <p className="sedeConocer">conocer</p>
              <div className="sedeStylesheetContent">
                <h2 style={{ textTransform: "uppercase" }}>{item.title}</h2>
                <p>{item.location}</p>
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
                <h2 style={{ textTransform: "uppercase" }}>{item.title}</h2>
                <p>{item.location}</p>
                <Link key={item.id} to={`/sedes/${item.id}`}>
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
        ))}
      </div>
    </div>
  );
};

export default Sedes;
