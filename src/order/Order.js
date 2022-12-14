import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Order() {
  return (
    <>
      <PayPalScriptProvider options={{"client-id": ""}}>
        <PayPalButtons />
      </PayPalScriptProvider>
    </>
  );
}

export default Order;
