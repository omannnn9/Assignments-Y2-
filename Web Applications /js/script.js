/* ==========================================================================
   XYZ MASTER - CLIENT-SIDE FORM VALIDATION
   Author: Farhaan
   Module: Web Applications
   Description: External JavaScript file handling validation for contact.html
   ========================================================================== */

/**
 * Validates Email Format
 * Ensures presence of @ and ., proper indexing, and domain structure.
 */
function validateEmail() {
    var emailID = document.contactForm.email.value.trim();
    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2) || dotpos === emailID.length - 1) {
        alert("Please enter a correct email address (example: name@example.com).");
        document.contactForm.email.focus();
        return false;
    }
    return true;
}

/**
 * Validates Phone Number Format
 * Ensures input consists of digits only and is 7 (landline) or 8 (mobile) characters long.
 */
function validatePhone() {
    var phoneNumber = document.contactForm.phone.value.trim();

    if (isNaN(phoneNumber) || (phoneNumber.length !== 7 && phoneNumber.length !== 8)) {
        alert("Please enter a phone number with 7 or 8 digits only (no spaces or letters).");
        document.contactForm.phone.focus();
        return false;
    }
    return true;
}

/**
 * Master Validation Function
 * Sequentially checks all form fields before allowing submission.
 */
function validate() {
    /* ---------- 1. Full Name ---------- */
    if (document.contactForm.fullName.value.trim() === "") {
        alert("Please provide your name!");
        document.contactForm.fullName.focus();
        return false;
    }

    /* ---------- 2. Email Address ---------- */
    if (document.contactForm.email.value.trim() === "") {
        alert("Please provide your email address!");
        document.contactForm.email.focus();
        return false;
    }
    if (validateEmail() === false) {
        return false;
    }

    /* ---------- 3. Password ---------- */
    if (document.contactForm.password.value === "") {
        alert("Please provide a password!");
        document.contactForm.password.focus();
        return false;
    }
    if (document.contactForm.password.value.length < 6) {
        alert("Your password must contain at least 6 characters!");
        document.contactForm.password.focus();
        return false;
    }

    /* ---------- 4. Phone Number ---------- */
    if (document.contactForm.phone.value.trim() === "") {
        alert("Please provide your phone number!");
        document.contactForm.phone.focus();
        return false;
    }
    if (validatePhone() === false) {
        return false;
    }

    /* ---------- 5. Service Dropdown ---------- */
    if (document.contactForm.service.value === "-1") {
        alert("Please choose the service you require!");
        document.contactForm.service.focus();
        return false;
    }

    /* ---------- 6. Radio Buttons (Preferred Contact Method) ---------- */
    var methodChosen = false;
    for (var i = 0; i < document.contactForm.contactMethod.length; i++) {
        if (document.contactForm.contactMethod[i].checked) {
            methodChosen = true;
            break;
        }
    }
    if (methodChosen === false) {
        alert("Please choose your preferred method of contact!");
        return false;
    }

    /* ---------- 7. Checkboxes (Best Time to Contact) ---------- */
    if (!document.contactForm.morning.checked &&
        !document.contactForm.afternoon.checked &&
        !document.contactForm.evening.checked) {
        alert("Please tick at least one best time to contact you!");
        return false;
    }

    /* ---------- 8. Message Textarea ---------- */
    if (document.contactForm.message.value.trim() === "") {
        alert("Please write your message!");
        document.contactForm.message.focus();
        return false;
    }

    /* ---------- 9. Consent Checkbox ---------- */
    if (document.contactForm.consent.checked === false) {
        alert("Please tick the box to agree that we may contact you!");
        return false;
    }

    /* ---------- Submission Success ---------- */
    alert("Thank you! Your enquiry has been sent to XYZ Master.");
    return true;
}

