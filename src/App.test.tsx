import { render, screen } from "@testing-library/react";
import App from "./App";
import * as provider from "./providers/DirectoryDataContextProvider";
import content from "./assets/content.json";

const useContextSpy = jest.spyOn(provider, "useDirectoryDataContext");

const setupContextSpy = () => {
  useContextSpy.mockReturnValue({});
};

test("renders App", () => {
  setupContextSpy();
  render(<App />);
  const title = screen.getByText(content.title + content.emoji);
  expect(title).toBeInTheDocument();
});
