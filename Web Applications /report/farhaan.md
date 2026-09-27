### JavaScript Validation

Client-side validation was implemented using an external script (`js/script.js`) linked to `contact.html`. It checks user inputs before the form submits to ensure data is complete and correctly formatted.

The script validates that text fields are not left blank, the email contains a valid `@` and domain format, password length is at least 6 characters, and the phone number consists of 7 or 8 digits. It also ensures the user selects a service, a contact method, a preferred time, and ticks the consent box.

<img width="1440" height="900" alt="errormessage" src="https://github.com/user-attachments/assets/5628a10d-6997-4640-95f9-fb279e2a1375" />

---

### Testing & Errors Found

The form was thoroughly tested with missing, invalid, and correct inputs. All edge cases successfully triggered the corresponding alert messages and prevented invalid form submissions.

During testing, spaces were initially bypassing blank checks, so `.trim()` was added to text inputs. Radio buttons were also causing an error when left unselected, which was resolved by looping through the `contactMethod` array group.

---

### My Contribution

My main contribution to this section was writing the client-side JavaScript validation and testing the form behavior. I created the `js/script.js` file to handle error alerts, validate inputs (email format, phone length, password length, dropdowns, radio buttons, and checkboxes), and prevent invalid submissions. I also ran test cases to identify edge cases, applied fixes, and documented the results.
