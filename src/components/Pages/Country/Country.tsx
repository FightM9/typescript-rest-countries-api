import { useEffect, useState } from "react";
import Container from "../../../layouts/Container";
import CountryFilter from "./CountryFilter";
import CountryList from "../../Lists/CountryList";
import { useSelector } from "react-redux";
import { LoadingStatus } from "../../../store/reducer/countriesSlice";
import Error from "../Error";
import Spinner from "../../Spinner/Spinner";
import "./Country.css";

const Country = () => {
  const [loading, setLoading] = useState<LoadingStatus>(LoadingStatus.pending);
  // @ts-ignore
  const countriesLoading = useSelector((state) => state.countries.loading);

  useEffect(() => {
    setLoading(countriesLoading);
  }, []);

  switch (loading) {
    case LoadingStatus.failed:
      return (
        <>
          <Error />
        </>
      );

    case LoadingStatus.pending:
      return (
        <>
          <Spinner />
        </>
      );

    default:
      return (
        <>
          <Container>
            <div className="countainer">
              <CountryFilter />
              <main className="content">
                <CountryList />
              </main>
            </div>
          </Container>
        </>
      );
  }
};

export default Country;
