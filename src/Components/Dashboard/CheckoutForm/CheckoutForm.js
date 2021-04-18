import React, { useState } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ enrollCourseInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  // Handling order submit
  const handleOrderSubmit = () => {
    fetch("https://enigmatic-badlands-92540.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(enrollCourseInfo),
    })
      .then((res) => res.json())
      .then((data) => setIsEnrolled(data));
  };
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardInfo">Pay with Card:</label>
      <CardElement className="mt-3 p-3 border rounded" />
      <button
        type="submit"
        disabled={!stripe}
        className="mt-3 btn btn-dark"
        onClick={handleOrderSubmit}
      >
        Pay
      </button>
      {paymentError && <p className="text-danger">{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "limegreen" }}>
          Your payment is successfully accepted
        </p>
      )}
      {isEnrolled && (
        <p style={{ color: "limegreen" }}>Course Enrolled Successfully</p>
      )}
    </form>
  );
};
export default CheckoutForm;
