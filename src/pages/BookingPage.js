import BookingForm from "../components/BookingForm";
import { useReducer } from "react";
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

const [availableTimes, dispatch] = useReducer(timeReducer, [], initializeTimes);

const updateTimes = (date) => {
  dispatch({
    type: "dateChanged",
    date: date,
  });
};
  return (
    <>
      <h2>Book a table - form</h2>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </>
  );
};
export default BookingPage;
