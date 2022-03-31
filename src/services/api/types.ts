export interface CountriesType {
    flags: { png: string; svg: string };
    name: { common: string };
    capital: string[];
    region: string;
    area: number;
    population: number    
  }
  



export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface CountryType {
  alpha3Code?: string;
  flag?: string;
  currencies?: Currency[];
  languages?: Language[];
  name?: string;
  topLevelDomain?: string[];
  capital?: string;
  region?: string;
  subregion?: string;
  population?: number;
  borders?: string[];
  nativeName?: string;
}

export type CountyShortType = {
  flag: { png: string; svg: string };
  name: { common: string };
  capital: string[];
  region: string;
};

