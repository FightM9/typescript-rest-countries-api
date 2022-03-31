import { useEffect, useState } from "react";
import "./Country.css";
import CountryCard from "../../components/Cards/CountryCard";
import Container from "../../layouts/Container";
import { Link } from "react-router-dom";
import CountryFilter from "./CountryFilter";
import Spinner from "../../components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { LoadingStatus } from "../../store/reducer/countriesSlice";
import Error from "../../components/Pages/Error";
import CountryList from "../../components/Lists/CountryList";

const Country = () => {
  const [loading, setLoading] = useState(LoadingStatus.pending);
  const [filtredCountries, setFilteredCountries] = useState([]);
  // @ts-ignore
  const countries = useSelector((state) => state.countriesReducer);

  useEffect(() => {
    setLoading(countries.loading);
    setFilteredCountries(countries.countries);
  }, [countries]);

  if (loading === LoadingStatus.pending)
    return (
      <>
        <Spinner />
      </>
    );
  if (loading === LoadingStatus.failed)
    return (
      <>
        <Error />
      </>
    );

  return (
    <Container>
      <div className="countainer">
        <CountryFilter />
        <main className="content">
          <CountryList/>
        </main>
      </div>
    </Container>
  );
};

export default Country;
