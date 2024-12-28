import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import BookingPage from './components/BookingPage';
import Login from './pages/Login';
import ConfirmedBooking from './components/ConfirmedBooking'; // Importa ConfirmedBooking

import logo from "./assets/images/Logo.svg";

function App() {
  return (
    <div className="App">
      <nav className='nav navbar' aria-label='menu principal'>
        <div className="container">
          <div className="nav-container">
            <Link to="/" className="nav-item">
              <img src={logo} alt="Logo Little Lemon" />
            </Link>

            {/* <ul>
              <Link to="/" className="nav-item">Home Page</Link>
              <Link to="/about-me" className="nav-item">About Me</Link>
              <Link to="/menu" className='nav-item'>Menu</Link>
              <Link to="/reservations" className='nav-item'>Reservations</Link>
              <Link to="/bookingPage" className='nav-item'>Order Online</Link>
              <Link to="/login" className='nav-item'>Login</Link>
              <Link to="/confirmed-booking" className='nav-item'>Confirmed Booking</Link>
            </ul> */}
            <ul>
              <Link to="/" className="nav-item">Home Page</Link>
              <Link to="/" className="nav-item">About Me</Link>
              <Link to="/" className='nav-item'>Menu</Link>
              <Link to="/" className='nav-item'>Reservations</Link>
              {/* <Link to="/" className='nav-item'>Order Online</Link> */}
              <a href="#BookingSection" className='nav-item'>Order Online</a>
              <Link to="/" className='nav-item'>Login</Link>
              {/* <Link to="/" className='nav-item'>Confirmed Booking</Link> */}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path='/reservations' element={<Reservations />}></Route>
        <Route path='/bookingPage' element={<BookingPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/confirmed-booking' element={<ConfirmedBooking />} /> {/* Ruta para la página de confirmación */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
