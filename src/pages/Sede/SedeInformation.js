import { Link } from "react-router-dom";
import "./SedeInformation.css";
import ModalTransition from "../../components/ModalTransition/ModalTransition";
import clock from "../../assets/img/icons/clock-1.png";
import SedeMaps from "./SedeMaps";

const SedeInformation = ({ sede }) => {
  return (
    <>
      <ModalTransition />
      <div className="sedeInformationContainer">
        <div
          className="sedeInformationBanner"
          style={{ backgroundImage: `url(${sede.image})` }}
        >
          <h1 className="sedeTitle">sede {sede.title}</h1>
          <h4 className="sedeSubtitle">{sede.location}</h4>
          <Link to={"/"}>
            <button>VOLVER</button>
          </Link>
        </div>
        <div className="sedeInformacion">
          <div className="sedeHorarios">
            <div>
              <img src={clock} alt="clock" className="sedeHorarios-clock" />
              <h2>LUNES A VIERNES</h2>
              <h3>07:00 a 22:00 hrs.</h3>
            </div>
            <div>
              <img src={clock} alt="clock" className="sedeHorarios-clock" />
              <h2>SABADOS</h2>
              <h3>08:00 a 20:00 hrs.</h3>
            </div>
            <div>
              <img src={clock} alt="clock" className="sedeHorarios-clock" />
              <h2>FERIADOS</h2>
              <h3>10:00 a 18:00 hrs.</h3>
            </div>
          </div>
          <div className="sedeMedia">
            <h2 className="sedeMediaTel">
              Telefono:<span> 011 1234-5678</span>
            </h2>
          </div>
          <SedeMaps gmaps_src={sede.src} />
        </div>
      </div>
    </>
  );
};

export default SedeInformation;
