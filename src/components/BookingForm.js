import '../css/BookingForm.css';
import React, { useState } from 'react';



const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [formData, setFormData] = useState({
      date: '',
      time: '',
      guests: '',
      occasion: ''
    });
  
    const [formValid, setFormValid] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  
      validateForm({ ...formData, [name]: value });
    };
  
    const validateForm = (data) => {
      const isValid =
        data.date &&
        data.time &&
        data.guests >= 1 &&
        data.guests <= 10 &&
        data.occasion;
      setFormValid(isValid);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formValid) {
        submitForm(formData);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="date">Choose date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]}
        />
  
        <label htmlFor="time">Choose time:</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
  
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          min="1"
          max="10"
        />
  
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
  
        <button type="submit" disabled={!formValid} className='btn btn-primary' aria-label="On Click">
          Make Your Reservation
        </button>
      </form>
    );
  };
  
  
  export default BookingForm;

