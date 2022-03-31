import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Country from "./pages/Country/Country";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import NotFound from "./pages/NotFound";
import { fetchCounries } from "./store/reducer/countriesSlice";

export default function App() {
  const dispatch = useDispatch();

  // Get and save data about countries using the REST Countries API
  useEffect(() => {
    dispatch(fetchCounries());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="country/:name" element={<CountryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
