import './App.css';
import { Routes, Route,Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
// import Main from './components/Main';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Menu from './pages/Menu';
// import Reservations from './Reservations';
import Reservations from './pages/Reservations';
// import OrderOnline from './pages/OrderOnline';
import BookingPage from './components/BookingPage';
import Login from './pages/Login';


import logo from "./assets/images/Logo.svg";

function App() {
  return (
    <div className="App">

        <nav className='nav navbar'>
            <div className="container">
                <div className="nav-container">
                    <Link to="/" className="nav-item">
                        <img src={logo} alt="Logo Little Lemon"/>
                    </Link>

                    <ul>
                        <Link to="/" className="nav-item">Home Page</Link>
                        <Link to="/about-me" className="nav-item">About Me</Link>
                        <Link to="/menu" className='nav-item'>Menu</Link>
                        <Link to="/reservations" className='nav-item'>Resarvations</Link>
                        <Link to="/bookingPage" className='nav-item'>Booking</Link>
                        <Link to="/login" className='nav-item'>login</Link>
                    </ul>
                </div>
            </div>

          <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/about-me" element={<AboutMe />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path='/reservations' element={<Reservations />}></Route>
              <Route path='/BookingPage' element={<BookingPage />}></Route>
              <Route path='/login' element={<Login />}></Route>
          </Routes>
        </nav>

        {/* <Header /> */}

        {/* <Homepage /> */}

        <Footer />
    </div>
  );
}

export default App;
