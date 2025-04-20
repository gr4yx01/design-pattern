abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log("CreditCardProcessor");
  }
}

class BankTransferProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log("Transfer processing>...");
  }
}

function executePayment(
  paymentProcessor: PaymentProcessor,
  amount: number,
): void {
  paymentProcessor.processPayment(amount);
}

const creditPayment = new CreditCardProcessor();

executePayment(creditPayment, 5000);
