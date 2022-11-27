import "./SedeMaps.css";

const SedeMaps = ({ gmaps_src }) => {
  return (
    <iframe
      id="gmap_canvas"
      src={gmaps_src}
      frameBorder="0"
      scrolling="no"
      title="location"
    ></iframe>
  );
};

export default SedeMaps;
