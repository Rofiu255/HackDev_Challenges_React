import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("adds item to the list when button is clicked", () => {
  render(<App />);
  const inputElement = screen.getByTestId("input-field");
  const addButton = screen.getByTestId("add-button");

  fireEvent.change(inputElement, { target: { value: "Test Item" } });
  fireEvent.click(addButton);

  const listItems = screen.getAllByTestId("list-item");
  expect(listItems).toHaveLength(1);
  expect(listItems[0].textContent).toBe("Test Item");
});

test("input field is cleared after adding an item", () => {
  render(<App />);
  const inputElement = screen.getByTestId("input-field");
  const addButton = screen.getByTestId("add-button");

  fireEvent.change(inputElement, { target: { value: "Test Item" } });
  fireEvent.click(addButton);

  expect(inputElement.value).toBe("");
});

test("it adds a normal item but does not add empty item to the list", () => {
  render(<App />);

  const inputElement = screen.getByTestId("input-field");
  const addButton = screen.getByTestId("add-button");

  fireEvent.change(inputElement, { target: { value: "Test Item" } });
  fireEvent.click(addButton);

  expect(inputElement.value).toBe("");

  fireEvent.change(inputElement, { target: { value: "" } });
  fireEvent.click(addButton);

  const listItems = screen.queryAllByTestId("list-item");
  expect(listItems).toHaveLength(1);
});

test('adds multiple items to the list', () => {
  render(<App />);
  const inputElement = screen.getByTestId('input-field');
  const addButton = screen.getByTestId('add-button');

  fireEvent.change(inputElement, { target: { value: 'First Item' } });
  fireEvent.click(addButton);

  fireEvent.change(inputElement, { target: { value: 'Second Item' } });
  fireEvent.click(addButton);

  const listItems = screen.getAllByTestId('list-item');
  expect(listItems).toHaveLength(2);
  expect(listItems[0].textContent).toBe('First Item');
  expect(listItems[1].textContent).toBe('Second Item');
});
