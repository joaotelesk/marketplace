import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should call onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button text="comprar" onClick={onClick} />);

    fireEvent.click(getByText("comprar"));

    expect(onClick).toHaveBeenCalled();
  });
});
