import React from "react";
import { BsCashCoin, BsFillCreditCardFill } from "react-icons/bs";
import { BiBarcodeReader } from "react-icons/bi";

const paymentItems = [
  { name: "cash", icon: <BsCashCoin /> },
  { name: "Debit Card", icon: <BsFillCreditCardFill /> },
  { name: "E-Wallet", icon: <BiBarcodeReader /> },
];
function PaymentsWidget() {
  return (
    <div className="row">
      <h6 className="text-dark">Payment Method</h6>
      {/* Payment Option */}

      {paymentItems.map((payment, index) => (
        <div className="col-4" key={index}>
          <a href="#!">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <div className="payment__icon border border-2 rounded-2">
                {payment.icon}
              </div>
              <h6 className="mt-2 text-muted">{payment.name}</h6>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default PaymentsWidget;
