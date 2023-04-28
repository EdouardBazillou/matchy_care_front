import react from "react";
import StripeContainer from "../stripe/stripeContainer";
import "../stripe/stripeForm.css";

function TestStripe() {
  return (
    <div className="paymentForm">
      <div className="titreTestStripe">
        <h2>Paiement test pour Matchy Care</h2>
      </div>
      <div className="formStripe">
        <StripeContainer />
      </div>
    </div>
  );
}
export default TestStripe;
