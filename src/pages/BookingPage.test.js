import { initializeTimes, timeReducer } from "./BookingPage";

beforeEach(() => {
  global.fetchAPI = jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
});

test("initializeTimes return correct initial times", () => {
  const times = initializeTimes();

  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns available times for selected date", () => {
  const state = [];

  const action = {
    type: "dateChanged",
    date: "2026-09-13",
  };

  const newState = timeReducer(state, action);

  expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
