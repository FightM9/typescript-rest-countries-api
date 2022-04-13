import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { LoadingStatusEnum } from '../../../shared/enums';
import styles from './Borders.module.css';

export default function Borders() {
  const { countries, loading: isLoadCountries } = useAppSelector(
    (state) => state.countriesReducer
  );
  const { loading: isLoadinfDetails, ...details } = useAppSelector(
    (state) => state.countryDetailsReducer
  );

  const borders = details.country.borders;

  const getCountyByCode = (code: string) => {
    return countries.filter((country) => country.cca3 === code);
  };

  // Сountry without land borders
  if (!borders?.length) return null;

  if (isLoadCountries === LoadingStatusEnum.succeeded) {
    return (
      <section className={styles.section}>
        <h2 className={styles.section_title}>Land borders</h2>
        <ul className={styles.list}>
          {borders?.map((countryCode) => {
            const country = getCountyByCode(countryCode)[0];
            return (
              <li key={countryCode}>
                <Link
                  className={styles.list_item}
                  to={`/country/${country.name.common.toLowerCase()}`}
                >
                  <h3 className={styles.list_title}>{country.name.common}</h3>
                  <img
                    className={styles.list_flag}
                    src={country.flags.svg}
                    alt={`Flag of the ${country.name.official}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  return null;
}
