import React from 'react';
import BookingForm from './BookingForm';
// import Main from './Main';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
      <div>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
          submitForm={submitForm} // Pasa submitForm aquí también
        />
      </div>
    );
  };

  
export default BookingPage;
