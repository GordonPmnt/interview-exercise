import axios from "axios";
import {
  headersMock,
  tokenMock,
  visitorsMock,
  visitorsUrl,
} from "../__mocks__/api.mocks";

import { VisitorsService } from "./visitors";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("visitors - service", () => {
  describe("getVisitors", () => {
    test("When api call is successful, it should return visitors from proxyclick", async () => {
      mockedAxios.post.mockResolvedValue(tokenMock);
      mockedAxios.get.mockResolvedValue(visitorsMock);

      const visitors = await VisitorsService.getVisitors({});

      expect(mockedAxios.get).toHaveBeenCalledWith(visitorsUrl, headersMock);
      expect(visitors).toBe(visitorsMock.data.visitors);
    });

    test("When calling with filters, it should have passed them as query params in url of proxyclick call", async () => {
      mockedAxios.post.mockResolvedValue(tokenMock);
      mockedAxios.get.mockResolvedValue(visitorsMock);

      await VisitorsService.getVisitors({
        email: "test@email.com",
      });

      expect(mockedAxios.get).toHaveBeenCalledWith(
        visitorsUrl + "?email=test@email.com",
        headersMock
      );
    });
  });
});
