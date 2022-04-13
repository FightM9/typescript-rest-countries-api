/**
 *  Basic information about the country
 */

export interface ICountry {
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  capital?: string[];
  region: string;
  area: string;
  population: string;
  cca3: string;
}