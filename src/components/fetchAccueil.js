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
          <div key={index} className="proContainer">
            <form>
              <div>
                <h1 className="firstname">{item.firstname}</h1>
                <p>{item.lastname}</p>
                <p>{item.email}</p>
                <p>{item.phoneNumber}</p>
                <p>{item.profession}</p>
              </div>
              <button>consulter</button>
            </form>
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
