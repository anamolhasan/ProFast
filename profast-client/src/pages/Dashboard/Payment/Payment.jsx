import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import PaymentForm from './PaymentForm'

const Payment = () => {

    const stripPromise = loadStripe(import.meta.env.VITE_payment_key)
  return (
    <Elements stripe={stripPromise}>
      <PaymentForm /> 
    </Elements>
  )
}

export default Payment