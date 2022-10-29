import "./SedeMaps.css";

const SedeMaps = ({ gmaps_src }) => {
  return (
    <iframe
      id="gmap_canvas"
      src={gmaps_src}
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    ></iframe>
  );
};

export default SedeMaps;
