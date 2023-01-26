import { Footer } from "./Footer";
import { render } from "@testing-library/react";

describe("Footer", () => {
  it("should render the correct text", () => {
    const { container } = render(<Footer />);
    const footerElements = container.querySelectorAll("p");
    expect(footerElements.length).toBe(1);
    expect(footerElements[0].textContent).toBe(
      "MKS sistemas © Todos os direitos reservados"
    );
  });
});
