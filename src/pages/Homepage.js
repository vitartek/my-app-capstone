import Main from "../components/Main"

import Card from '../components/Card'
import heroimg from '../assets/images/restauranfood.jpg';

export default function Homepage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-container">
                        <article>
                            <h1 className="hero-title">Little Lemon</h1>
                            <h2  className="hero-subtitle">Chicago</h2>
                            <p  className="hero-p">
                                We are a family owned <br />
                                Mediterranean restaurant, <br />
                                focused on traditional <br />
                                recipes served with a modern <br />
                                twist. <br />
                            </p>
                            <a href="#BookingSection" aria-label="on Click" className="btn btn-secondary rounded-sm">Reserve a Table</a>
                        </article>
                        <div className='hero-img'>
                            <img src={heroimg}></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='featured'>
                <div className="container">
                    <div className="featured-container">
                        <div className='boxtitle'>
                            <h2 className='h2'>This weeks specials!</h2>
                            <a href="#" aria-label="on Click" className="btn btn-secondary rounded-sm">Online Menu</a>
                        </div>
                            <Card />
                    </div>
                </div>
            </section>

            <Main />
        </>
    )
}