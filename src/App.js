import Home from './components/Home';
import Region from './components/Region';
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


function App() {

  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/region" element={<Region />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
