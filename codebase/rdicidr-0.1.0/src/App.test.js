import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/CIDR Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test("displays the API URL", () => {
  const previousApiUrl = process.env.REACT_APP_API_URL;
  process.env.REACT_APP_API_URL = "api.rdicidr.com";

  try {
    render(<App />);
    expect(screen.getByText(/api\.rdicidr\.com/i)).toBeInTheDocument();
  } finally {
    process.env.REACT_APP_API_URL = previousApiUrl;
  }
});
