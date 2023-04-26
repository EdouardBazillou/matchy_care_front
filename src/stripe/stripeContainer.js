import react from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./checkoutForm";

// const stripeSecretKey = process.env.REACT_APP_STRIPE_SECRET_KEY;

//Insertion de la clé publique fournie par STRIPE (compte de Alice)
//et sctockage dans une constante pour rappel dans le fecth loadStripe:
const PUBLIC_KEY =
  "pk_test_51N0LytBtXPXJXAKBpibFdot7ckcLMoT1GiSvMWTR92xItlXNF7rQ51931o8CBeZ52Y6JnQ9dzpqUtcwHdfzGE8sa00yeE4ncCh";

//Initialisation/ création d'une instance de STRIPE avec la clé publique
const stripeTestPromise = loadStripe(PUBLIC_KEY);

//Création du composant avec rappel de la props

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
