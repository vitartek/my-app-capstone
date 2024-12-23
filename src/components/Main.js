/* global fetchAPI */
import React, { useReducer} from 'react';
import BookingPage from './BookingPage';
import { useNavigate } from 'react-router-dom';  // Añadir esta línea
import { fetchAPI, submitAPI } from '../api/api';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
      case 'UPDATE_TIMES':
          const selectedDate = new Date(action.payload);
          return fetchAPI(selectedDate);
      default:
          return state;
  }
};


export default function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      // Si la reserva es exitosa, redirige a la página de confirmación
      navigate('/confirmed-booking');
    }
  };

  return (
    <main>
      <div id="BookingSection">
        <BookingPage 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
          submitForm={submitForm} // Pasa submitForm como prop
        />
      </div>
    </main>
  );
}
