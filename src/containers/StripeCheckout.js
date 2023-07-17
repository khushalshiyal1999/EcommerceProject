import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';


const PaymentForm = () => {
  const stripe = useStripe();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe) {
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: 'price_123abc', quantity: 1 },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Pay with Stripe</button>
    </form>
  );
};

export default PaymentForm;
