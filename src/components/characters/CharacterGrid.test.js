import CharacterGrid from "./CharacterGrid";
import { render } from "@testing-library/react";

describe("CharacterGrid tests", () => {
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

  test("should render the section HTML content", async () => {
    let isLoadingMock = false;
    let _render = render(
      <CharacterGrid items={[itemMock]} isLoading={isLoadingMock} />
    );
    const sectionHTML = await _render.findByTestId("item-data");
    expect(sectionHTML.getAttribute("id")).toBe("cards-id");
  });

  test("should render Spinner component", async () => {
    let isLoadingMock = true;
    let _render = render(
      <CharacterGrid items={[itemMock]} isLoading={isLoadingMock} />
    );
    const sectionHTML = await _render.findByTestId("spinner-data");
    expect(sectionHTML.getAttribute("id")).toBe("spinner-id");
  });
});
