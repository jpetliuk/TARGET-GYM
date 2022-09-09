import "./NavBar.style.css";
import Log from "../../assets/img/ias.png";

const NavBar = () => {
  return (
    <div id="navBarContainer">
      <img src={Log} alt="log" className="navBarLogo" />
    </div>
  );
};

export default NavBar;
