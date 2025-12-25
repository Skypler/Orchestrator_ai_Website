import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar at the top of the page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
