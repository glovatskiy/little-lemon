/* global fetchAPI, submitAPI */
import BookingForm from "../components/BookingForm";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
const timeReducer = (state, action) => {
  if (action.type === "dateChanged") {
    return fetchAPI(new Date(action.date));
  }

  return state;
};
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};
const BookingPage = () => {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    timeReducer,
    [],
    initializeTimes,
  );

  const updateTimes = (date) => {
    dispatch({
      type: "dateChanged",
      date: date,
    });
  };
  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  };
  return (
    <main className="booking-page">
      <h2>Book a table</h2>

      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </main>
  );
};
export default BookingPage;
export { timeReducer };
