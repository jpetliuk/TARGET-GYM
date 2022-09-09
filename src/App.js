import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Mision from "./components/Mision/Mision";
import Sedes from "./components/Sedes/Sedes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavBar /> */}
        <Banner />
        <Mision />
        <Sedes />
        <Footer />
      </header>
    </div>
  );
}

export default App;
