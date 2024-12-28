import React from 'react';
import img1 from '../assets/images/greek salad.jpg';
import img2 from '../assets/images/greek salad.jpg';
import img3 from '../assets/images/greek salad.jpg';
import basket from '../assets/images/Basket.svg';
const cardsData = [
    {
        id: 1,
        img: img1,
        title: 'Greek Salad',
        price: '$12,99',
        description: 'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        buttonText: 'Order a delivery',
        buttonIcon: basket,
    },
    {
        id: 2,
        img: img2,
        title: 'Bruschetta',
        price: '$8,99',
        description: 'Grilled bread rubbed with garlic and topped with tomatoes, olive oil, and salt. A classic Italian appetizer.',
        buttonText: 'Order a delivery',
        buttonIcon: basket,
    },
    {
        id: 3,
        img: img3,
        title: 'Lemon Dessert',
        price: '$5,99',
        description: 'A refreshing lemon dessert made with fresh lemon juice and zest, topped with a dollop of whipped cream.',
        buttonText: 'Order a delivery',
        buttonIcon: basket,
    },

];

export default function CardsList() {
    return (
        <div className='cards-container grid'>
            {cardsData.map(card => (
                <div key={card.id} className='card'>
                    <img src={card.img} alt={`${card.title}`}/>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between'>
                            <h3 className='card-title'>{card.title}</h3>
                            <h3 className='card-price'>{card.price}</h3>
                        </div>
                        <p className='card-text'>{card.description}</p>
                    </div>
                    <div className='card-footer'>
                        <a href='/' className='card-btn btn' aria-label="On Click">{card.buttonText}
                            <img src={card.buttonIcon} alt='logo icon'/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}