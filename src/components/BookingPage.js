import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = () => {
    return (
        <div className='bookingpage'>
            <div className='container'>
                <div className='booking-container'>
                    <div className='boxtitle'>
                        <h1>Reserve a Table</h1>
                        <p>Complete the form below to make your reservation.</p>
                    </div>
                    <BookingForm />
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
