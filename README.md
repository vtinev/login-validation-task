## Tasks

1. Write a custom validation hook that will validate upon field change and return an error for EACH input.
- The hook should provide -> inputValue, inputChange function, inputError
- Developers should be able to use it anywhere regardless of input type or name. 
- The error must be shown below the field only when the input is invalid.
- Each field should have its own error prompt.

2. Field rules:
- Username:
 - Must be between 4-10 characters
 - Cannot start with a special character
- Password:
 - Must be between 8-16 characters
 - Must include at least 1 special character

3. Make sure that the user cannot proceed unless both fields have content and are valid!

4. Fix the Error styles.
