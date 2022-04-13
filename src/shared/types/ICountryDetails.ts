import { ICountry } from './ICountry';

/**
 * Extended information about the country
 */

export interface ICountryDetails extends ICountry {
    continents: string[];
    subregion: string;
    coatOfArms?: { png: string; svg: string };
    tld?: string[];
    timezones: string[];
    currencies?: object;
    languages: object;
    landlocked: boolean;
    borders?: string[];
    postalCode: { format: string, regex: string};
    startOfWeek: string;
    car: { signs?: string[]; side: string };
    maps: { googleMaps: string; openStreetMaps: string };
  }
  