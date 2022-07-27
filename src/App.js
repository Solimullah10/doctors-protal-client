import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment'
import Reviews from './pages/Reviews/Reviews'
import ContactUs from './pages/ContactUs/ContactUs'
import Login from './pages/Login/Login'

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>


      </Routes>
    </div>
  );
}

export default App;
