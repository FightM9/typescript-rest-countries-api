export const BASE_URL = "https://restcountries.com/v3.1/";

export const ALL_COUNTRIES = BASE_URL + "all?fields=name,capital,flags,region";

export const COUNTRY_DETAILS =
  BASE_URL +
  "?fields=name,capital,flags,region,currencies,subregion,languages,landlocked,borders,area,population,coatOfArms";

export const searchByName = (name: string) =>
  BASE_URL + "name/" + name + COUNTRY_DETAILS;

export const filterByCodes = (codes: string[]) =>
  BASE_URL + "alpha?codes=" + codes.join(",");

export const getCountryDelails = (name: string) => BASE_URL;

export type CountyShortType = {
  flags: { png: string; svg: string };
  name: { common: string };
  capital: string[];
  region: string;
};

export type CountryDetails = {};
