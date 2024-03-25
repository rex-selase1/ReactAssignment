import Home from "./pages/Home";
import Office from "./pages/Office";
import Hotel from "./pages/Hotel";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/office" element={<Office></Office>}></Route>
        <Route path="/hotel" element={<Hotel></Hotel>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
