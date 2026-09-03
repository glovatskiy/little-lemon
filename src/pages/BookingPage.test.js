import { initializeTimes, timeReducer } from "./BookingPage";

test("initializeTimes return correct initial times", () => {
    const times = initializeTimes();

    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

