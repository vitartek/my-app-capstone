import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm button", () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const buttonElement = screen.getByText(/Make Your reservation/i);
    expect(buttonElement).toBeInTheDocument();
});