import BookingForm from "../components/BookingForm";
import { useReducer } from "react";
const timeReducer = (state, action) => {
  if (action.type === "dateChanged") {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
  }

  return state;
};
const BookingPage = () => {
  const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];
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
