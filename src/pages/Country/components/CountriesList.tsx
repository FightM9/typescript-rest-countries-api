import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import CountryCard from '../../../components/Cards/CountryCard';
import { ViewModesEnums } from '../../../store/reducer/CountrySlice';
import styles from './CountryList.module.css';

export default function CountriesList() {
  const { filteredCountries, viewMode } = useAppSelector(
    (state) => state.countriesReducer
  );

  if (filteredCountries?.length === 0)
    return (
      <div className={styles.message}>
        <h2>Sorry, found no countries </h2>
        <p>Change your filter search and try again</p>
      </div>
    );
  else
    return (
      <ul
        className={
          viewMode === ViewModesEnums.grid
            ? `${styles.list} ${styles.view_grid}`
            : `${styles.list} ${styles.view_list}`
        }
      >
        {filteredCountries?.map((country) => (
          <li key={country.name.common}>
            <Link
              aria-label={country.name.common}
              to={`country/${country.name.common.toLowerCase()}`}
            >
              <CountryCard {...country} />
            </Link>
          </li>
        ))}
      </ul>
    );
}
