import "./Footer.style.css";
import instagram from "../../assets/img/icons/footer-instagram.png";
import facebook from "../../assets/img/icons/footer-facebook.png";

const Footer = () => {
  return (
    <div id="footerContainer">
      <div className="footerText">
        <p>NUESTRAS REDES</p>
        <hr />
      </div>
      <div className="footerMediaLinks">
        <div className="footerMediaLinkContainer">
          <div className="footerMediaLinksBackgroundEffect"></div>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="footerMediaLinkContainer">
          <div className="footerMediaLinksBackgroundEffect"></div>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
      <div className="footerCopyright">
        <span> © 2022 TARGET GYM. ALL RIGHTS RESERVED.</span>
        <span>DESIGN & FRONT-END DEVELOPMENT BY JPTLK.</span>
      </div>
    </div>
  );
};

export default Footer;
