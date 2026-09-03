import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Test date label", () => {
    render(<BookingForm availableTimes={["17:00"]} updateTimes={() => { }} />);
    const dateLabel = screen.getByLabelText(/choose date/i);
    expect(dateLabel).toBeInTheDocument();
})
