import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51KarsXGkfBs1N0Ew2Ntxx6VBw21mT1mkKSGGxLTG0EtSGadmh6VhtWnrKSeBn5jhZmUyoRAlaNoZI6llEs8yymO2009oGuKpKY"
);
const Payment = () => {
  const { orderId } = useParams();
  const [payment, setPayment] = useState({});
  useEffect(() => {
    fetch(`https://limitless-gorge-71694.herokuapp.com/payment/${orderId}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [orderId]);
  return (
    <div>
      <h3>please pay for :{payment.name}</h3>
      <h4>pay: {payment.price}</h4>
      {payment.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm payment={payment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
// process
// install stripe and stripe react
// set publishable key
// elements
// checkout
// -----------------
// create payment method
//
