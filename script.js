

//The prompt function is used to get a number from the user.
//  The parseInt function is used to convert the user's input into an integer

// Get the number from the user
const num = parseInt(prompt("Enter a number: "));
// The program then uses the modulo operator (%) to check if the number is even or odd. If the remainder of the number divided by 2 is 0, then the number is even. Otherwise, it is odd.

// Check if the number is even or odd
if (num % 2 === 0) {
  alert(`${num} is even.`);
} else {
    // The program uses the alert function to display a message indicating whether the number is even or odd.
  alert(`${num} is odd.`);
}