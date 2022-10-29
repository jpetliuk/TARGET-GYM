import "./Contacto.css";

const Contacto = () => {
  return (
    <div id="ContactoContainer">
      <div className="ContactoText">
        <h2>CONTACTO</h2>
        <a href="/">
          <p>numero de telefono</p>
        </a>
        <a href="/">
          <p>mail</p>
        </a>
        <p>Escribinos o completá el siguiente formulario:</p>
      </div>
      <form className="ContactoForm">
        <div>
          <input
            className="ContactoFormEmailName"
            type="text"
            name="name"
            placeholder="Tu nombre *"
          />
          <input
            className="ContactoFormEmailName"
            type="text"
            name="name"
            placeholder="Tu mail *"
          />
          <input
            className="ContactoFormMessage"
            type="text"
            name="name"
            placeholder="Escribí tu mensaje..."
          />
        </div>
        <input className="ContactoFormSubmit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contacto;
