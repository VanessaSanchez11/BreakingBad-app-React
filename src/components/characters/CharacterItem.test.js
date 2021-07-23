import { render } from "@testing-library/react";
import CharacterItem from "./CharacterItem";

describe("CharacterItem test", () => {
  const itemMock = {
    birthday: "09-07-1958",
    category: "Breaking Bad",
    char_id: 1,
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    name: "Walter White",
    nickname: "Heisenberg",
    portrayed: "Bryan Cranston",
    status: "Presumed dead",
  };

  let _render;

  beforeEach(() => {
    _render = render(<CharacterItem item={itemMock} />);
  });

  test("should render the img source", async () => {
    const img = await _render.findByTestId("item-img");
    expect(img.getAttribute("src")).toBe(itemMock.img);
  });

  test("should show the name text in the HTML tag", async () => {
    const itemExpect = await _render.findByText(itemMock.name);
    expect(itemExpect).toBeTruthy();
  });

  test("should show the portrayed text in the HTML tag", async () => {
    const itemExpect = await _render.findByText(itemMock.portrayed);
    expect(itemExpect).toBeTruthy();
  });

  test("should show some the nickname in the HTML tag", async () => {
    const itemExpect = await _render.findByText(itemMock.nickname);
    expect(itemExpect).toBeTruthy();
  });

  test("should show some the birthday in the HTML tag", async () => {
    const itemExpect = await _render.findByText(itemMock.birthday);
    expect(itemExpect).toBeTruthy();
  });

  test("should show some the status in the HTML tag", async () => {
    const itemExpect = await _render.findByText(itemMock.status);
    expect(itemExpect).toBeTruthy();
    
  });
});
