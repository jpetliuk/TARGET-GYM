import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../Data";
import SedeInformation from "./SedeInformation";

const Sede = () => {
  const { id } = useParams();
  const [sede, setSede] = useState();

  useEffect(() => {
    function findSede(sede) {
      return sede.id === id;
    }
    setSede(Data.find(findSede));
  }, [id]);

  return (
    <div id="sedeContainer">{sede && <SedeInformation sede={sede} />}</div>
  );
};

export default Sede;
