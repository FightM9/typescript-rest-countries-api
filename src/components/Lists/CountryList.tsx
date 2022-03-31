import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CountriesType } from "../../services/api/types";
import CountryCard from "../Cards/CountryCard";
import "./CountryList.css";

function CountryList() {
  // @ts-ignore
  const [countries, setCountries] = useState<CountriesType>([]);
  const countriesList = useSelector(
      // @ts-ignore
    (state) => state.countriesReducer.countries
  );

  useEffect(() => {
    setCountries(countriesList);
  }, []);
  return (
    <ul className="list">
      {
        // @ts-ignore
        countries.map((country) => (
          <li className="list-item" key={country.name.common}>
            <Link to={`country/${country.name.common.toLowerCase()}`}>
              <CountryCard {...country} />
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default CountryList;
