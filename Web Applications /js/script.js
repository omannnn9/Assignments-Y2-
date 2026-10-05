/* ==========================================================================
   XYZ MASTER - CLIENT-SIDE JAVASCRIPT
   Author: Farhaan
   Module: Web Applications

   Description:
   External JavaScript file handling:
   1. Contact form validation
   2. Email validation
   3. Phone validation
   4. Customer account creation option
   5. Account password confirmation
   6. Scroll reveal animations
   ========================================================================== */


/* ==========================================================================
   ACCOUNT CREATION TOGGLE
   Shows or hides the customer account fields depending on the user's choice.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

    var createAccount = document.getElementById("createAccount");
    var guestAccount = document.getElementById("guestAccount");
    var accountFields = document.getElementById("accountFields");


    /* ----------------------------------------------------------------------
       CREATE ACCOUNT SELECTED
       ---------------------------------------------------------------------- */

    if (createAccount && guestAccount && accountFields) {

        createAccount.addEventListener("change", function () {

            if (createAccount.checked) {

                accountFields.classList.add("active");

            }

        });


        /* ------------------------------------------------------------------
           CONTINUE AS GUEST SELECTED
           ------------------------------------------------------------------ */

        guestAccount.addEventListener("change", function () {

            if (guestAccount.checked) {

                accountFields.classList.remove("active");

            }

        });

    }


    /* ==========================================================================
       SCROLL REVEAL ANIMATION

       Elements with the class "reveal" become visible when they enter
       the user's screen.
       ========================================================================== */

    var revealElements =
        document.querySelectorAll(".reveal");


    var observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    /* Stop observing once the animation has happened. */
                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

});


/* ==========================================================================
   EMAIL VALIDATION

   Ensures that:
   - The email contains "@"
   - The @ is not the first character
   - A "." exists after the @
   - The "." is not the final character
   ========================================================================== */

function validateEmail() {

    var emailID =
        document.contactForm.email.value.trim();

    var atpos =
        emailID.indexOf("@");

    var dotpos =
        emailID.lastIndexOf(".");


    if (
        atpos < 1 ||
        (dotpos - atpos < 2) ||
        dotpos === emailID.length - 1
    ) {

        alert(
            "Please enter a correct email address " +
            "(example: name@example.com)."
        );

        document.contactForm.email.focus();

        return false;
    }


    return true;
}


/* ==========================================================================
   PHONE VALIDATION

   Accepts:
   - 7 digits
   - 8 digits

   Does not accept:
   - Letters
   - Spaces
   - Incorrect number of digits
   ========================================================================== */

function validatePhone() {

    var phoneNumber =
        document.contactForm.phone.value.trim();


    if (
        isNaN(phoneNumber) ||
        (phoneNumber.length !== 7 &&
         phoneNumber.length !== 8)
    ) {

        alert(
            "Please enter a phone number with 7 or 8 digits only " +
            "(no spaces or letters)."
        );

        document.contactForm.phone.focus();

        return false;
    }


    return true;
}


/* ==========================================================================
   MAIN FORM VALIDATION

   Checks every required field before allowing the form to submit.
   ========================================================================== */

function validate() {

    var form = document.contactForm;


    /* ==========================================================================
       1. FULL NAME
       ========================================================================== */

    if (form.fullName.value.trim() === "") {

        alert("Please provide your name!");

        form.fullName.focus();

        return false;
    }


    /* ==========================================================================
       2. EMAIL ADDRESS
       ========================================================================== */

    if (form.email.value.trim() === "") {

        alert("Please provide your email address!");

        form.email.focus();

        return false;
    }


    if (validateEmail() === false) {

        return false;
    }


    /* ==========================================================================
       3. ORIGINAL PASSWORD

       This keeps the password requirement from the original assignment.
       ========================================================================== */

    if (form.password.value === "") {

        alert("Please provide a password!");

        form.password.focus();

        return false;
    }


    if (form.password.value.length < 6) {

        alert(
            "Your password must contain at least 6 characters!"
        );

        form.password.focus();

        return false;
    }


    /* ==========================================================================
       4. CUSTOMER ACCOUNT VALIDATION

       These checks only run when "Create an Account" is selected.
       ========================================================================== */

    var createAccount =
        document.getElementById("createAccount");


    if (
        createAccount &&
        createAccount.checked
    ) {

        var username =
            document.getElementById("username");

        var accountPassword =
            document.getElementById("accountPassword");

        var confirmPassword =
            document.getElementById("confirmPassword");


        /* ----------------------------------------------------------------------
           Username
           ---------------------------------------------------------------------- */

        if (
            !username ||
            username.value.trim() === ""
        ) {

            alert("Please choose a username.");

            username.focus();

            return false;
        }


        /* ----------------------------------------------------------------------
           Username length
           ---------------------------------------------------------------------- */

        if (
            username.value.trim().length < 3
        ) {

            alert(
                "Your username must contain at least 3 characters."
            );

            username.focus();

            return false;
        }


        /* ----------------------------------------------------------------------
           Account password
           ---------------------------------------------------------------------- */

        if (
            !accountPassword ||
            accountPassword.value === ""
        ) {

            alert(
                "Please create an account password."
            );

            accountPassword.focus();

            return false;
        }


        if (
            accountPassword.value.length < 6
        ) {

            alert(
                "Your account password must contain at least 6 characters."
            );

            accountPassword.focus();

            return false;
        }


        /* ----------------------------------------------------------------------
           Confirm account password
           ---------------------------------------------------------------------- */

        if (
            !confirmPassword ||
            confirmPassword.value === ""
        ) {

            alert(
                "Please confirm your account password."
            );

            confirmPassword.focus();

            return false;
        }


        /* ----------------------------------------------------------------------
           Password matching
           ---------------------------------------------------------------------- */

        if (
            accountPassword.value !==
            confirmPassword.value
        ) {

            alert(
                "The account passwords do not match."
            );

            confirmPassword.focus();

            return false;
        }

    }


    /* ==========================================================================
       5. PHONE NUMBER
       ========================================================================== */

    if (
        form.phone.value.trim() === ""
    ) {

        alert(
            "Please provide your phone number!"
        );

        form.phone.focus();

        return false;
    }


    if (
        validatePhone() === false
    ) {

        return false;
    }


    /* ==========================================================================
       6. SERVICE DROPDOWN
       ========================================================================== */

    if (
        form.service.value === "-1"
    ) {

        alert(
            "Please choose the service you require!"
        );

        form.service.focus();

        return false;
    }


    /* ==========================================================================
       7. RADIO BUTTONS
       Preferred method of contact
       ========================================================================== */

    var methodChosen = false;


    for (
        var i = 0;
        i < form.contactMethod.length;
        i++
    ) {

        if (
            form.contactMethod[i].checked
        ) {

            methodChosen = true;

            break;
        }

    }


    if (
        methodChosen === false
    ) {

        alert(
            "Please choose your preferred method of contact!"
        );

        return false;
    }


    /* ==========================================================================
       8. CHECKBOXES
       Best time to contact
       ========================================================================== */

    if (
        !form.morning.checked &&
        !form.afternoon.checked &&
        !form.evening.checked
    ) {

        alert(
            "Please tick at least one best time to contact you!"
        );

        return false;
    }


    /* ==========================================================================
       9. MESSAGE
       ========================================================================== */

    if (
        form.message.value.trim() === ""
    ) {

        alert(
            "Please write your message!"
        );

        form.message.focus();

        return false;
    }


    /* ==========================================================================
       10. CONSENT CHECKBOX
       ========================================================================== */

    if (
        form.consent.checked === false
    ) {

        alert(
            "Please tick the box to agree that we may contact you!"
        );

        return false;
    }


    /* ==========================================================================
       SUCCESS MESSAGE

       Different message depending on whether the customer created
       an account or continued as a guest.
       ========================================================================== */

    if (
        createAccount &&
        createAccount.checked
    ) {

        alert(
            "Your customer account and enquiry have been " +
            "successfully validated!"
        );

    } else {

        alert(
            "Thank you! Your enquiry has been sent to XYZ Master."
        );

    }


    /* Allow the form to submit. */
    return true;

}
