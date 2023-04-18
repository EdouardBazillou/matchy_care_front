function SearchBar() {
  return (
    <form>
      <label for="ville"></label>
      <select
        className="search_input"
        type="text"
        id="ville"
        name="ville"
        placeholder="Ville"
      >
        <option value="" disabled selected hidden>
          <p>Ville Entrez votre localisation</p>
        </option>
        <option value="Nice">Nice</option>
        <option value="Saint Laurent du Var">Saint Laurent du Var</option>
        <option value="Cagnes sur Mer">Cagnes sur Mer</option>
      </select>

      <label for="inputBesoin"></label>
      <select className="search_input" name="besoin">
        <option value="" disabled selected hidden>
          Comment peut-on vous aider ?
        </option>
        <option value=" Mobilité"> Mobilité</option>/
        <option value="Repas">Repas</option>
        <option value="Entretien">Entretien</option>
        <option value="Change">Change</option>
        <option value="Rééducation">Rééducation</option>
        <option value="Toilette">Toilette</option>
        <option value="Soin">Soin</option>
        <option value="Traitement">Traitement</option>
        <option value="Compagnie">Compagnie</option>
        <option value="Transport">Transport</option>
      </select>
    </form>
  );
}
export default SearchBar;
// {/* <div>
// <form className="searchbar">
//   <label for="inputVille"></label>
//   <select name="ville">
//     <option value="" selected></option>
//     <option value="Nice">Nice</option>
//     <option value="Saint Laurent du Var">Saint Laurent du Var</option>
//     <option value="Cagnes sur Mer">Cagnes sur Mer</option>
//   </select>

//   <label for="inputBesoin"></label>
//   <select name="besoin">
//     <option value="" selected></option>
//     <option value=" Mobilité"> Mobilité</option>
//     <option value="Repas">Repas</option>
//     <option value="Entretien">Entretien</option>
//     <option value="Change">Change</option>
//     <option value="Rééducation">Rééducation</option>
//     <option value="Toilette">Toilette</option>
//     <option value="Soin">Soin</option>
//     <option value="Traitement">Traitement</option>
//     <option value="Compagnie">Compagnie</option>
//     <option value="Transport">Transport</option>
//   </select>

//   <input placeholder="Dates" />
//   <button class="fa-solid fa-magnifying-glass"></button>
// </form>
// </div> */}
