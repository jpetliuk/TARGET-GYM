import { Link } from "react-router-dom";
import "./SedeInformation.css";

const SedeInformation = ({ sede }) => {
  return (
    <div>
      <Link to={"/"}>
        <button>hola</button>
      </Link>
      <img src={sede.image} />
      <h2>
        Horarios: Lunes a Viernes 07:00 a 22:00 hrs Sábados 08:00 a 20:00 hrs
        Feriados 10:00 a 18:00 hrs
      </h2>
      <h1 className="sedeTitle">sede {sede.title}</h1>
      <h4>{sede.location}</h4>
    </div>
  );
};

export default SedeInformation;
