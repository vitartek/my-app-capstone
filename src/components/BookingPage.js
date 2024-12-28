import React from 'react';
import BookingForm from './BookingForm';
// import Main from './Main';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
      <div className='booking'>
        <div className='container'>
            <div className='boxtitle'>
                <h2 className='h2'>Order a Table</h2>
            </div>
            <BookingForm 
              availableTimes={availableTimes} 
              dispatch={dispatch} 
              submitForm={submitForm} // Pasa submitForm aquí también
            />
        </div>
      </div>
    );
  };

  
export default BookingPage;
