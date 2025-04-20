var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    return PaymentProcessor;
}());
var CreditCardProcessor = /** @class */ (function (_super) {
    __extends(CreditCardProcessor, _super);
    function CreditCardProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCardProcessor.prototype.processPayment = function (amount) {
        console.log("CreditCardProcessor");
    };
    return CreditCardProcessor;
}(PaymentProcessor));
var BankTransferProcessor = /** @class */ (function (_super) {
    __extends(BankTransferProcessor, _super);
    function BankTransferProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BankTransferProcessor.prototype.processPayment = function (amount) {
        console.log("Transfer processing>...");
    };
    return BankTransferProcessor;
}(PaymentProcessor));
function executePayment(paymentProcessor, amount) {
    paymentProcessor.processPayment(amount);
}
var creditPayment = new CreditCardProcessor();
executePayment(creditPayment, 5000);
