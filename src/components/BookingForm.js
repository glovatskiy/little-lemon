import { useState } from "react";
const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const isFormValid = date && time && guests;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion
    }
    submitForm(formData)
  }
  return (
    <>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date: {date}</label>
        <input
          id="res-date"
          type="date"
          required
          onChange={(event) => {
            setDate(event.target.value);
            updateTimes(event.target.value);
          }}
          value={date}
          aria-label="Choose reservation date"
        />
        <label htmlFor="res-time">Choose time: {time}</label>
        <select
          id="res-time"
          required
          onChange={(event) => setTime(event.target.value)}
          value={time}
        >
          <option value="">Please select time</option>
          {availableTimes.map((availableTime) => {
            return (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            );
          })}
        </select>
        <label htmlFor="guests">Number of guest: {guests}</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          required
          onChange={(event) => setGuests(event.target.value)}
          value={guests}
          aria-label="Number of guests"
        />
        <label htmlFor="occasion">Occasion: {occasion}</label>
        <select
          id="occasion"
          onChange={(event) => setOccasion(event.target.value)}
          value={occasion}
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          aria-label="On Click"
          disabled={!isFormValid}
        />
      </form>
    </>
  );
};
export default BookingForm;
