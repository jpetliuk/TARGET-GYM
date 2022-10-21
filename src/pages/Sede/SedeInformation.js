import { Link } from "react-router-dom";
import "./SedeInformation.css";
import ModalTransition from "../../components/ModalTransition/ModalTransition";

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
        <div className="sedeHorarios">
          <div>
            <h2>LUNES A VIERNES</h2>
            <h3>07:00 a 22:00 hrs.</h3>
          </div>
          <div>
            <h2>SABADOS</h2>
            <h3>08:00 a 20:00 hrs.</h3>
          </div>
          <div>
            <h2>FERIADOS</h2>
            <h3>10:00 a 18:00 hrs.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SedeInformation;
