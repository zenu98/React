import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
test("renders hi as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...

  // Assert
  const hiElement = screen.getByText("hi");
  expect(hiElement).toBeInTheDocument();
});
