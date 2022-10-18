import "../App.css";
import Banner from "../components/Banner/Banner";
import Mision from "../components/Mision/Mision";
import Sedes from "../components/Sedes/Sedes";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Mision />
        <Sedes />
      </header>
    </div>
  );
};

export default Home;
