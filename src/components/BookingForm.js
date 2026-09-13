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
        <label htmlFor="res-date">
          Choose date <span className="required">*</span>
        </label>
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
        <label htmlFor="res-time">
          Choose time <span className="required">*</span>
        </label>
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
        <label htmlFor="guests">
          {" "}
          Number of guests <span className="required">*</span>
        </label>
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
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          onChange={(event) => setOccasion(event.target.value)}
          value={occasion}
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {isFormValid && (
          <div className="reservation-summary">
            <h3>Please confirm your reservation:</h3>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Guests: {guests}</p>
            <p>Occasion: {occasion || "None"}</p>
          </div>
        )}
        <input
          type="submit"
          value="Make Your reservation"
          aria-label="On Click"
          disabled={!isFormValid}
        />
      </form>
      <p className="required-info">
        <span className="required">*</span> Required fields
      </p>
    </>
  );
};
export default BookingForm;
