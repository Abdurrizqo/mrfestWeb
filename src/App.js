import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Events from "./component/Events/Events";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ItemList from "./component/ItemList/ItemList";
import DetailItem from "./component/DetailItem/DetailItem";
import About from "./component/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/shopping-list" element={<ItemList />} />
        <Route path="/detail-item/:idItem" element={<DetailItem />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
