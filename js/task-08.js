const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("All fields are required!");
  } else {
    const userData = {
      email,
      password,
    };
    console.log(userData);
    form.reset();
  }
});
