import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Test date label", () => {
    render(
      <BookingForm
        availableTimes={["17:00"]}
        updateTimes={() => {}}
        submitForm={() => {}}
      />,
    );
    const dateLabel = screen.getByLabelText(/choose date/i);
    expect(dateLabel).toBeInTheDocument();
})

test("Date input has required attribute", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      updateTimes={() => {}}
      submitForm={() => {}}
    />,
  );

  const dateInput = screen.getByLabelText(/choose date/i);

  expect(dateInput).toBeRequired();
});

test("Time select has required attribute", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      updateTimes={() => {}}
      submitForm={() => {}}
    />,
  );

  const timeSelect = screen.getByLabelText(/choose time/i);

  expect(timeSelect).toBeRequired();
});

test("Guests input has correct validation attributes", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      updateTimes={() => {}}
      submitForm={() => {}}
    />,
  );

  const guestsInput = screen.getByLabelText(/number of guest/i);

  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Submit button is disabled when form is invalid", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      updateTimes={() => {}}
      submitForm={() => {}}
    />,
  );

  const submitButton = screen.getByDisplayValue(/make your reservation/i);

  expect(submitButton).toBeDisabled();
});

test("Submit button is enabled when form is valid", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      updateTimes={() => {}}
      submitForm={() => {}}
    />,
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guest/i);

  const submitButton = screen.getByDisplayValue(/make your reservation/i);

  fireEvent.change(dateInput, {
    target: { value: "2026-09-20" },
  });

  fireEvent.change(timeSelect, {
    target: { value: "17:00" },
  });

  fireEvent.change(guestsInput, {
    target: { value: "2" },
  });

  expect(submitButton).not.toBeDisabled();
});