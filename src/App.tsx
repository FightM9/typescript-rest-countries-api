import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Country from "./pages/Country";
import CountryDetails from "./pages/CountryDetails";
import Error from "./pages/Error";
import { fetchCounries } from "./store/reducer/CountriesSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCounries());
  }, [dispatch]);  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="country/:name" element={<CountryDetails/>} />
        <Route path="*" element={<Error message="Page Not Found" />} />
      </Routes>
    </>
  );
}
