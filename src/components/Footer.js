import footerImg from '../assets/images/Logo.svg'

export default function Footer() {
    return (
        <footer  tabIndex={0}>
            <div className="container">
                <div className="footer-container">
                    <div className="footer-col">
                        <img src={footerImg} alt="logo de little lemon"></img>
                    </div>
                    <div className="footer-col">
                        <nav>
                            <ul>
                                <div className='d-flex'>
                                    <div className="col">
                                        <h3>Navigation</h3>
                                        <li><a href="#navigation">navigation</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#menu">Menu</a></li>
                                        <li><a href="#reservations">Reservations</a></li>
                                        <li><a href="#orderOnline">Order Online</a></li>
                                        <li><a href="#login">Login</a></li>
                                    </div>
                                    <div className="col">
                                        <h3>Navigation</h3>
                                        <li><a href="#navigation">Adress</a></li>
                                        <li><a href="#about">Phone Number</a></li>
                                        <li><a href="#menu">Email</a></li>
                                    </div>
                                    <div className="col">
                                        <h3>Social Media Links</h3>
                                        <li><a href="#navigation">Facebook</a></li>
                                        <li><a href="#about">Twitter</a></li>
                                        <li><a href="#menu">Instagram</a></li>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}