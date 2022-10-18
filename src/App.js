import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sede from "./pages/Sede/Sede";
import Footer from "./components/Footer/Footer";

function App() {
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
