import React from "react";
import { BsCashCoin, BsFillCreditCardFill } from "react-icons/bs";
import { BiBarcodeReader } from "react-icons/bi";

const paymentItems = [
  { name: "cash", icon: <BsCashCoin /> },
  { name: "Debit Card", icon: <BsFillCreditCardFill /> },
  { name: "E-Wallet", icon: <BiBarcodeReader /> },
];
function PaymentsWidget({ payment, setPayment }) {
  return (
    <div className="row">
      <h6 className="text-dark">Choose payment Method</h6>
      {/* Payment Option */}

      {paymentItems.map((item, index) => (
        <div className="col-4" key={index}>
          <div className={`payment__Item ${item.name === payment && "active"}`}>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <div className="payment__icon border border-2 rounded-2">
                <input
                  className="check__input"
                  type="radio"
                  id={`${item.name}_${index}`}
                  value={item.name}
                  checked={item.name === payment}
                  onChange={(e) => setPayment(e.target.value)}
                />
                <lable className="check__box" htmlFor={`${item.name}_${index}`}>
                  {item.icon}
                </lable>
              </div>
              <h6 className="mt-2 text-muted">{item.name}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaymentsWidget;
