import Quote from "./Quote";
import { render } from "@testing-library/react";

describe("quotes testing", () => {
  const quoteMock = {
    quote_id: 9,
    text: "Text Mock",
    quote: "Funyuns are awesome.",
    author: "Jesse Pinkman",
  };

  let _render;
  beforeEach(() => {
    _render = render(<Quote quote={quoteMock} />);
  });

  test("should return text label", async () => {
    const quoteExpect = await _render.findByText(quoteMock.text);
    expect(quoteExpect).toBeTruthy();
  });

  test("should return author label", async () => {
    const quoteExpect = await _render.findByText(quoteMock.author);
    expect(quoteExpect).toBeTruthy();
  });
});
