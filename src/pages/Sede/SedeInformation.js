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
          style={{
            backgroundImage: `url(${sede.image})`,
          }}
        >
          <h1 className="sedeTitle">sede {sede.title}</h1>
          <h4 className="sedeSubtitle">{sede.location}</h4>
          <Link to={"/"} className="sedeReturn">
            <button>VOLVER</button>
          </Link>
        </div>
        <div className="sedeInformacion">
          <h2>NUESTROS HORARIOS</h2>
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
          <SedeMaps gmaps_src={sede.src} />

          <div className="sedeContact">
            <h2 className="sedeContactTitle">CONTACTATE CON NOSOTROS</h2>
            <p className="sedeContactSubtitle">
              Envianos un mensaje o un mail.
            </p>
            <h2 className="sedeContactTel">
              Telefono:<span> {sede.phone}</span>
            </h2>
            <h2 className="sedeContactTel">
              Mail:<span> mail@gmail.com</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SedeInformation;
