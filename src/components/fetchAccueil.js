import { useEffect, useState } from "react";
import "./professionalCard.css";
import profilPicture from "./pictures/exemple.png";
import { Link } from "react-router-dom";

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
            <Link to={`/professional/${item.id}`} key={index}>
              <img src={profilPicture} alt="" />
              <div className="flex">
                <div>
                  <h3 className="proName">{item.firstname}</h3>
                  <p> {item.profession}</p>
                </div>
                <div>
                  <h3 className="price"> {item.price} €</h3>
                </div>
              </div>
              <div className="proDetails">
                {/* <p>Email: {item.email}</p>
              <p>Phone: {item.phoneNumber}</p> */}
              </div>
              {/* <button>View Profile</button> */}
            </Link>
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
      <div className="flex">{renderPro()}</div>
    </div>
  );
}

export default FetchAccueil;
