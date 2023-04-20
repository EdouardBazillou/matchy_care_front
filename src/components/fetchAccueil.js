import { useEffect, useState } from "react";

function FetchAccueil() {
  //Fetch GET pour récuperer les pros sur la page d'accueil//

  const [pro, setPro] = useState([]);

  const getPro = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await fetch(
      `http://127.0.0.1:8000/api/professionals`,
      options
    );
    let data = await response.json();
    console.log("data", data);

    console.log("je marche");
    setPro(data.data);
    console.log(pro);
  };

  const renderPro = () => {
    if (pro.length >= 0) {
      return pro.map((item, index) => {
        return (
          <div key={index} className="proCard">
            <h1 className="proName">{item.firstname}</h1>
            <div className="proDetails">
              <p>Email: {item.email}</p>
              <p>Phone: {item.phoneNumber}</p>
              <p>Profession: {item.profession}</p>
            </div>
            <button>View Profile</button>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    getPro();
  }, []);

  return (
    <div>
      <div>
        <button onClick={getPro}>Actualiser les Pros</button>
      </div>
      <div>{renderPro()}</div>
    </div>
  );
}

export default FetchAccueil;
