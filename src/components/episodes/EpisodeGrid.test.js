import EpisodeGrid from "./EpisodeGrid";
import { render } from "@testing-library/react";

describe("Episodes Grid Tests", () => {
  const episodesMock = {
    episode_id: 60,
    title: "Ozymandias",
    season: 5,
    episode: 14,
    air_date: "09-15-2013",
  };

  const isLoadingMock = null;

  test("should render the section HTML content", async () => {
    let _render = render(
      <EpisodeGrid episodes={[episodesMock]} isLoading={isLoadingMock} />
    );
    const sectionHTML = await _render.findByTestId("episode-data");
    expect(sectionHTML.getAttribute("id")).toBe("cards-episodes");
  });

  test("should render Spinner component", async () => {
    let isLoadingMock = true;
    let _render = render(
      <EpisodeGrid episodes={[episodesMock]} isLoading={isLoadingMock} />
    );
    const sectionHTML = await _render.findByTestId("spinner-data");
    expect(sectionHTML.getAttribute("id")).toBe("spinner-id");
  });
});
