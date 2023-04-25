function FilterProBySkill() {
  // const [professionals, setProfessionals] = useState([]);
  // const [searchSkills, setsearchSkills] = useState("");

  // const handleSearch = async () => {
  //   console.log("je suis la ", searchSkills);
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const response = await fetch(
  //     `http://127.0.0.1:8000/api/filter/skills/${searchSkills}`,
  //     options
  //   );
  //   const data = await response.json();
  //   setProfessionals(data.professionals);
  // };

  // const renderProfessionals = () => {
  //   if (professionals.length > 0) {
  //     return professionals.map((professional, index) => (
  //       <div key={index} className="professional">
  //         <h2>
  //           {professional.firstname} {professional.lastname}
  //         </h2>
  //         <p>{professional.email}</p>
  //         <p>{professional.phoneNumber}</p>
  //         <p>{professional.profession}</p>
  //         <p>{professional.skills}</p>
  //       </div>
  //     ));
  //   } else {
  //     return <p>No results found.</p>;
  //   }
  // };
  // useEffect(() => {
  //   handleSearch();
  // }, []);

  return <div></div>;
}
export default FilterProBySkill;
