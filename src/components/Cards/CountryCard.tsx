import { CountriesType } from "../../services/api/types";
import "./CountryCard.css";

function CountryCard({ flags, name, capital, region }:CountriesType) {
  return (
    <article className="card">
      <div className="card-image">
        <img src={flags.png} alt={name.common} loading='lazy'/>
      </div>
      <div className="card-body">
        <h3>{name.common}</h3>
        <span>{capital}</span>
        <span> {region}</span>
      </div>
    </article>
  );
}

export default CountryCard;
