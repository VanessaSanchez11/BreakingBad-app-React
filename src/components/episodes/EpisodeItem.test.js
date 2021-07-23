import { render } from "@testing-library/react";
import EpisodeItem from "./EpisodeItem";

describe("Episo", () => {
      const episodesMock = {
        episode_id: 60,
        title: "Ozymandias",
        season: 5,
        episode: 14,
        air_date: "09-15-2013",
      };

      let _render;
      beforeEach(() => {
        _render = render(<EpisodeItem episode={episodesMock} />);
      });

      test("should return title label", async () => {
        const episodeExpect = await _render.findByText(episodesMock.title);
        expect(episodeExpect).toBeTruthy();
      });

      test("should return the air date label", async () => {
        const episodeExpect = await _render.findByText(episodesMock.air_date);
        expect(episodeExpect).toBeTruthy();
      });

      test("should return the season label", async () => {
        const episodeExpect = await _render.findByText(episodesMock.season);
        expect(episodeExpect).toBeTruthy();
      });

      test("should return the episode label ", async () => {
        const episodeExpect = await _render.findByText(episodesMock.episode);
        expect(episodeExpect).toBeTruthy();
      });
});
