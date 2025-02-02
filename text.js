let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll(".button");

let string = "";
// let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      string = eval(string);  // Evaluating the expression
      input.value = string;
    } else if (value === "AC") {
      string = "";  // Clear the input
      input.value = string;
    } else if (value === "DEL") {
      string = string.substring(0, string.length - 1);  // Delete last character
      input.value = string;
    } else {
      string += value;  // Append button value to string
      input.value = string;
    }
  });
});