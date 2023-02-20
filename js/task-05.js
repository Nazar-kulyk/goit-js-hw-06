const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  const inputName = event.target.value.trim();
  nameOutput.textContent = inputName ? inputName : "Anonymous";
});
