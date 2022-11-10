import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sede from "./pages/Sede/Sede";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 750 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="sedes/:id" element={<Sede />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
