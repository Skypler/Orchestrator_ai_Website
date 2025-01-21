import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Home from "./pages/Home";
import Feature from "./pages/Features";
import Pricing from "./pages/Pricing";
import JoinList from "./pages/JoinList";

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar at the top of the page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/joinlist" element={<JoinList />} />
      </Routes>
    </Router>
  );
}

export default App;
