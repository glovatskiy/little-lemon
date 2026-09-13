import { useState } from "react";
const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
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
                  onChange={(event) => {
                      setDate(event.target.value);
                      updateTimes(event.target.value);
                   }}
          value={date}
        />
        <label htmlFor="res-time">Choose time: {time}</label>
        <select
          id="res-time"
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
          onChange={(event) => setGuests(event.target.value)}
          value={guests}
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
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};
export default BookingForm;
