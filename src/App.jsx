import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Rooms from "./pages/Rooms";
import SunsetRooms from "./pages/SunsetRooms";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path ="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/sunset-rooms" element={<SunsetRooms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
