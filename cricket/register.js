document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form Data Submitted:", {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      mobile: document.getElementById("mobile").value,
      dob: document.getElementById("dob").value,
      email: document.getElementById("email").value,
      state: document.getElementById("state").value,
      city: document.getElementById("city").value,
      zone: document.getElementById("zone").value,
      skillset: document.getElementById("skillset").value,
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirmPassword").value,
      termsAccepted: document.getElementById("terms").checked ? "Yes" : "No",
    });
  });

function validateForm() {
  let isValid = true;
  const requiredFields = [
    "firstName",
    "lastName",
    "mobile",
    "dob",
    "email",
    "state",
    "city",
    "zone",
    "skillset",
    "password",
    "confirmPassword",
  ];

  requiredFields.forEach((field) => {
    const input = document.getElementById(field);
    const error = document.getElementById(`${field}Error`);

    if (input && input.value.trim() === "") {
      console.log(`${field} is empty`);
      error.style.display = "block";
      isValid = false;
    } else {
      error.style.display = "none";
    }
  });

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    console.log("Passwords do not match");
    document.getElementById("confirmPasswordError").style.display = "block";
    isValid = false;
  }

  const terms = document.getElementById("terms");
  if (!terms.checked) {
    console.log("Terms not accepted");
    document.getElementById("termsError").style.display = "block";
    isValid = false;
  }

  return isValid;
}
