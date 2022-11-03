import { screen } from "@testing-library/react";
import * as redux from "react-redux";
import * as router from "react-router-dom";
import App from "./App";
import * as mockValues from "./utils/mockValues";
import { renderWithRouter } from "./utils/test.utils";
import * as routes from "./utils/routes";

const mockVideoId = mockValues.videosRecommendationsByRegion[0].id;
const videoRoute = router.generatePath(routes.VIDEO, { videoId: mockVideoId });

const mockUseLocationValue = {
  pathname: videoRoute,
  search: "",
  hash: "",
  state: {
    videoTitle: mockValues.videosRecommendationsByRegion[0].snippet.title,
    channelTitle:
      mockValues.videosRecommendationsByRegion[0].snippet.channelTitle,
  },
};

const mockDispatch = jest.fn();
const mockSelector = jest.fn();
const mockParams = jest.fn();
const mockLocation = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector,
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockedUsedNavigate,
  useParams: () =>
    mockParams.mockImplementation(() => {
      return mockVideoId;
    }),
  useLocation: () =>
    mockLocation.mockImplementation(() => {
      return mockUseLocationValue;
    }),
}));

describe("Render App", () => {
  it("renders Home page on '/' url", async () => {
    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue(mockValues.videosRecommendationsByRegion);

    renderWithRouter(<App />);

    expect(screen.getByAltText("YouTube Logo")).toBeInTheDocument();
    expect(screen.getByTitle("VideosContainer")).toBeInTheDocument();
  });

  it.only("renders Home page on '/video/:id' url", () => {
    const spyRedux = jest.spyOn(redux, "useSelector");
    spyRedux.mockReturnValue(mockValues.relatedVideos);

    renderWithRouter(<App />, { route: videoRoute });

    expect(screen.getByTitle("Embedded youtube player")).toBeInTheDocument();
  });
});
