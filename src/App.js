import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Crypto from "./pages/Crypto";
import Sport from "./pages/Sport";
import Game from "./pages/Game";
import About from "./pages/About";
import Cinema from "./pages/Cinema";
import Health from "./pages/Health";
import Travel from "./pages/Travel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/technology" exact element={<Technology />} />
        <Route path="/crypto" exact element={<Crypto />} />
        <Route path="/sport" exact element={<Sport />} />
        <Route path="/game" exact element={<Game />} />
        <Route path="/cinema" exact element={<Cinema />} />
        <Route path="/health" exact element={<Health />} />
        <Route path="/travel" exact element={<Travel />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
