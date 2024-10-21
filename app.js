function checkPassword() {
  const msg = document.getElementById("message");
  const minLength = 8;
  let password = document.getElementById("password").value;
  msg.textContent = "";

  do {
    if (password.length < minLength) {
      msg.textContent = `Password must be at least ${minLength} characters long.`;
      msg.className = "message invalid";
      return;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasUppercase && hasLowercase && hasNumbers && hasSpecialChars) {
      msg.textContent = "Password is strong.";
      msg.className = "message valid";
      return;
    } else {
      msg.textContent =
        "Password must include uppercase letters, lowercase letters, numbers, and special characters.";
      msg.className = "message invalid";
      return;
    }
  } while (false); // The loop runs only once
}
