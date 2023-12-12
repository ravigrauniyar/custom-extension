import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders texts in extension", () => {
  render(<App />);
  const helloText = screen.getByText(/Hello, World!/i);
  expect(helloText).toBeInTheDocument();

  const byeText = screen.getByText(/Bye, World!/i);
  expect(byeText).toBeInTheDocument();
});
