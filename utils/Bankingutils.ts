// Exporting the function so other files (tests) can import and use it
export function transferFunds(

  // The user's current account balance
  currentBalance: number,

  // The amount the user wants to transfer
  transferAmount: number

): number { // The function returns the updated balance as a number

  // Validation 1:
  // Transfer amount must be greater than zero
  if (transferAmount <= 0) {

    // Throw an error if amount is invalid
    // This simulates backend validation in a banking system
    throw new Error("Invalid transfer amount");
  }

  // Validation 2:
  // User cannot transfer more money than they have
  if (transferAmount > currentBalance) {

    // Throw error if balance is insufficient
    throw new Error("Insufficient funds");
  }

  // Calculate new balance after transfer
  const updatedBalance = currentBalance - transferAmount;

  // toFixed(2) keeps only two decimal places
  // Important for financial calculations
  // parseFloat converts it back from string to number
  return parseFloat(updatedBalance.toFixed(2));
}