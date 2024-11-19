import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the JSON Editor and Form Generator", () => {
  const { getByText } = render(<App />);
  expect(getByText(/JSON Editor/i)).toBeInTheDocument();
  expect(getByText(/Project Requirements Survey/i)).toBeInTheDocument();
});

