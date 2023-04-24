import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Profil() {
  const { id } = useParams();
  const [pro, setPro] = useState(null);
  // utiliser l'ID pour récupérer les informations du professionnel sélectionné
  // et afficher les détails sur la page
  useEffect(() => {
    const getPro = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await fetch(
        `http://127.0.0.1:8000/api/professionals/${id}`,
        options
      );
      let data = await response.json();
      setPro(data);
    };

    getPro();
  }, [id]);
  useEffect(() => {
    console.log(pro);
  }, [pro]);
  return <div>P {id}</div>;
}

export default Profil;
