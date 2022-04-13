 /**
  * Base RESTful API
  * Docs https://restcountries.com/
  */
export const BASE_URL = 'https://restcountries.com/v3.1/';

/**
 * Filter the output of request to include only the base fields
 */

export const ALL_COUNTRIES =
  BASE_URL + 'all?fields=name,capital,flags,region,population,area,cca3';

/**
 * Filter the output of request to include the details fields
 */

export const COUNTRY_FIELDS = `?fullText=true&fields=
name,capital,flags,region,currencies,subregion,languages,
landlocked,borders,area,population,coatOfArms,car,startOfWeek,postalCode,tld`;

/**
 * Returns the URL for getting country details
 * @param country - Country name
 */
export const getCountryByName = (country: string) => BASE_URL + `name/${country}` + COUNTRY_FIELDS;
