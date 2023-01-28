import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Card from "./Card";
import store from "../../../redux";

describe("Card component", () => {
  it("should render correctly and call the addToCart action", () => {
    const product = {
      id: 1,
      title: "Test Product",
      photo: "test.jpg",
      price: "10",
      description: "Test Description",
    };

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Card {...product} />
      </Provider>
    );

    expect(getByAltText(`Photo this ${product.title}`)).toBeTruthy();
    expect(getByText(product.title)).toBeTruthy();
    expect(getByText(`R$ ${product.price}`)).toBeTruthy();
    expect(getByText(product.description)).toBeTruthy();

    fireEvent.click(getByText("comprar"));
  });
});
