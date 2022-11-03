import { render, fireEvent } from "@testing-library/react";
import YoutubeSearchbar from "./YoutubeSearchbar";

const onFormSubmit = jest.fn();

describe("Render YoutubeSearchbar and search for the content", () => {
  it("render searchbar form", () => {
    const { getByRole } = render(<YoutubeSearchbar onSubmit={onFormSubmit} />);
    expect(getByRole("form")).toBeInTheDocument();
  });

  it("searchbar form submit", () => {
    const search = "Fun";

    const { getByRole } = render(<YoutubeSearchbar onSubmit={onFormSubmit} />);

    const input = getByRole("input");

    fireEvent.change(input, {
      target: {
        value: search,
      },
    });

    fireEvent.click(getByRole("button"));

    expect(input.value).toBe(search);
    expect(onFormSubmit).toHaveBeenCalledTimes(1);
  });
});
