import "./App.css";
import Banner from "./components/Banner/Banner";
import Mision from "./components/Mision/Mision";
import Sedes from "./components/Sedes/Sedes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Mision />
        <Sedes />
        <Footer />
      </header>
    </div>
  );
}

export default App;
