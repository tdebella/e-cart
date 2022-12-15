import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "test",
  currency: "USD",
  //   intent: "capture",
  //   "data-client-token": "abc123xyz==",
};

//3 things in paypal payment: create an order, user approve the order & capture payment for the order
const Order = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1,800.00",
                },
              },
            ],
          });
          // .then((orderId) => {
          //   // Your code here after create the order
          //   return orderId;
          // });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Order;
