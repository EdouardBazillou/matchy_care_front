import react from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
//Utilisation d'AXIOS
//commande npm à activer : npm install @stripe/react-stripe-js @stripe/stripe-js axios
import axios from "axios";
import "../stripe/stripeForm.css";

//création du composant avec les hooks qui permettent d'accéder aux éléments de la card :
export const CheckoutForm = () => {
  //pour accéder aux éléments de la carte de paiement
  const stripe = useStripe();
  const elements = useElements();

  //Fonction pour gérer le submit
  const handleSubmit = async (event) => {
    //Prevent Defautl spécial pour REACT
    event.nativeEvent.preventDefault();
    //Debugg sur console
    debugger;
    //On crée la méthode de paiement :
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      //On récupére les éléments de la carte de paiement (ex. numéro)
      //grâce auquel on génére une paymentMethod qui sera un Token (À ENVOYER au BACK-END pour paiement)
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log("token :", paymentMethod);
      try {
        // Envoi du token au backend - Route à définir et à insérer dans post (http://localhost...)
        const { id } = paymentMethod; //Envoi du paiement au serveur via ID
        const response = await axios.post("http://127.0.0.1:8000/api/stripe", {
          amount: 100, //Mention du montant en centimes
          id: id,
        });
        console.log(response);
        if (response.data.sucess) console.log("Payment réussi");
      } catch (error) {
        console.log("Erreur payment", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form
      className="payStripe"
      onSubmit={handleSubmit}
      style={{ maxWidth: 400 }}
    >
      <CardElement
        options={{
          hidePostalCode: true,
        }}
      />
      <button className="buttonStripe" type="submit" disabled={!stripe}>
        payer
      </button>
    </form>
  );
};
