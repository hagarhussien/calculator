Calculator
---
<img src="Logotype primary.png" width="60%" height="60%" />

Created with *create-react-app*. See the [full create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



Try It
---

[ahfarmer.github.io/calculator](https://ahfarmer.github.io/calculator/)



Install
---

`npm install`



Usage
---

`npm start`


# Calculator Project

This project is a calculator application that supports basic operations: addition, subtraction, multiplication, and division.  

## Original Project Functionality
- Users could input two numbers and select an operation.
- The result of the operation was displayed instantly.
- Basic UI without history or color coding.


## Added Features

1. **Calculation History (Last 10 Operations)**
   - Tracks the last 10 operations performed by the user.
   - Users can see recent calculations for reference.
   - Screenshot:(screen\history.PNG)

2. **Colored Operations**
   - Each operation type (addition, subtraction, multiplication, division) is displayed in a different color for clarity.
   - Screenshot:(screen\change.PNG)

3. **Dark Mode**
   - Added a toggle for Dark Mode.
   - Users can switch between light and dark themes for better visibility and user experience.
   - Screenshot: (screen\darkmode.PNG)


   ## Implementation Process

1. Opened the project using Aider.
2. Used Aider to implement the **history panel** showing the last 10 operations.
3. Added **color coding** for different operations using CSS classes suggested by Aider.
4. Implemented **dark mode toggle** with Aider’s help.
5. Tested each feature manually and fixed any bugs found using Aider.
6. Wrote unit tests for new features with Aider.


## Challenges Faced

- **History Panel Not Updating Correctly**
  - **Solution:** Used Aider to debug state management and ensure the last 10 operations are displayed.

- **Dark Mode Styling Conflicts**
  - **Solution:** Adjusted CSS using Aider’s suggestions to make both light and dark themes consistent.

- **Rate Limit on Aider**
  - **Solution:** Updated API key format and configured it properly in Aider.

- **History & Dark Mode Buttons Misplaced**
  - **Issue:** The buttons for History and Dark Mode were not positioned correctly, leading to UI elements not displaying properly.
  - **Solution:** Reorganized the layout and adjusted CSS with Aider’s help to position buttons appropriately.


  ## Aider Commands Used

1. `diff` – Checked differences between current code and previous versions.
2. `add` – Added new code so Aider can read and work with it.
3. `test` – Wrote or updated unit tests for new features.
4. `undo` – Reverted the last edit or change when needed.
5. `commit` – Saved changes with proper commit message.
6. `ask` – Asked Aider for explanations, suggestions, or guidance.
7. `exit` – Closed Aider session.
8. `run` – Executed code or tested specific functionality.





  ## Reflection 
   file(Reflection.docx)


   