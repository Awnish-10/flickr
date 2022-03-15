import { fireEvent, render, screen } from "@testing-library/react";
import Flicker from "../components/Flicker";

describe("flicker component test", () => {
    test("should be able to search", () => {
        render(<Flicker />);
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput, { target: { value: "dogs" } });
        const search = screen.getByText(/search/i);
        expect(search).toBeInTheDocument();
        fireEvent.click(search);
    });
});
