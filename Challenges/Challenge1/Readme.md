## HackerRank Item List Manager

Create a React app to add items to a list using an input field and a button. Ensure the input clears after adding and prevent empty entries.

> Please refer to the problem statement on the left side for more details

### Head over to `src/App.js` to get started.


## Read-only Files
The following files are marked read-only. You cannot edit these files
in the editor; however, it is possible from the terminal. You must not
modify or delete these files because doing so results in a zero score.

* src/App.test.js

Detailed Requirements

    When the application loads, it should display an empty list.
    The input field should accept user text input.
    When the button is clicked:
    The text from the input field should be added to the list.
    The input field should be cleared.
    If the input field is empty and the button is clicked, nothing should be added to the list.


Sample Interaction

Initial State

    The list is empty.
    The input field is empty.

User Action 1

    User types "First Item" in the input field.
    User clicks "Add Item" button.
    The list displays "First Item".

User Action 2

    User types "Second Item" in the input field.
    User clicks "Add Item" button.
    The list displays:
        "First Item"
        "Second Item"
