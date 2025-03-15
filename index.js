
// Function to reverse the string
function reverseString(str) {
    // Convert string to array
    var charactersArray = str.split("");
    
    // Reverse the array
    var reversedArray = charactersArray.reverse();
    
    // Convert array back to string
    var result = reversedArray.join("");
    
    // Return the reversed string
    return result;
  }



// Retrieve text from html input field
function reverseStringFromInput() {
  // Get the input value
  var text = document.getElementById("stringInput").value;
  
  // Check if user entered something
  if (text) {
    var reversed = reverseString(text);
    
    // Display the result
    document.getElementById("reverseResult").innerHTML = 
      "Original: " + text + "<br>Reversed: " + reversed;
  } else {
    // User didn't enter anything
    document.getElementById("reverseResult").innerHTML = 
      "You didn't enter any text!";
  }
}



/*******************************/

// Check if a series of numbers is a palindrome


function isPalindrome(num) {
  // Convert input to string
  var numStr = num.toString();
  
  // Get the reversed string
  var reversedStr = "";
  for (var i = numStr.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + numStr[i];
  }
  
  // Check if original equals reversed
  if (numStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

// Function to check palindrome from input field
function isPalindromeFromInput() {
    // Get the input value
    var numbers = document.getElementById("palindromeInput").value;
    
    // Check if user entered something
    if (numbers) {
      // Check if the input is a palindrome
      var result = isPalindrome(numbers);
      
      // Show results
      if (result === true) {
        document.getElementById("palindromeResult").innerHTML = 
          numbers + " is a palindrome!";
      } else {
        document.getElementById("palindromeResult").innerHTML = 
          numbers + " is not a palindrome.";
      }
    } else {
      // User didn't enter anything
      document.getElementById("palindromeResult").innerHTML = 
        "You didn't enter any numbers!";
    }
  }

/*******************************/

// Program to calculate total bill with tip

function calculateBillWithTipFromInput() {
  // Get input values
  var subtotalInput = document.getElementById("subtotalInput").value;
  var tipPercentageInput = document.getElementById("tipPercentageInput").value;
  
  // Convert inputs to numbers
  var subtotal = parseFloat(subtotalInput);
  var tipPercentage = parseFloat(tipPercentageInput);
  
  // Check if inputs are valid numbers
  if (isNaN(subtotal) || subtotal <= 0) {
    document.getElementById("tipResult").innerHTML = 
      "Please enter a valid bill amount!";
    return;
  }
  
  if (isNaN(tipPercentage) || tipPercentage < 0) {
    document.getElementById("tipResult").innerHTML = 
      "Please enter a valid tip percentage!";
    return;
  }
  
  // Calculate tip amount
  var tipAmount = subtotal * (tipPercentage / 100);
  
  // Calculate total bill
  var totalBill = subtotal + tipAmount;
  
  // Results
  document.getElementById("tipResult").innerHTML = 
    "Subtotal: $" + subtotal + 
    "<br>Tip amount (" + tipPercentage + "%): $" + tipAmount + 
    "<br>Total bill: $" + totalBill;
}

/*******************************/

