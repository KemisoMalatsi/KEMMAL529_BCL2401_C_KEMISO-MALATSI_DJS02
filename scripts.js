const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (isNaN(dividend) || isNaN(divider) || dividend === "" || divider === ""){
    result.innerText = "Something critical went wrong. Please reload the page.";
    console.error("Error: Non-numeric value provided.");
    return;
  } 
  
  if (divider == 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by Zero.")
    return;
  }

    const quotient = Math.floor(dividend / divider);
    result.innerText = quotient
  
});