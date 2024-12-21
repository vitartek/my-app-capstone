import logo from "../assets/images/Logo.svg";





export default function Nav() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-container">
                    <a href="#" className="nav-logo">
                        <img src={logo} alt="Logo Little Lemon"/>
                    </a>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#orderOnline">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};