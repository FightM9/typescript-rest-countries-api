import { useAppSelector } from '../../hooks/redux'; 
import { ViewModesEnums } from '../../store/reducer/CountrySlice';
import { MdPeople, MdOutlineZoomOutMap } from 'react-icons/md';
import { ICountry } from '../../shared/types/ICountry';
import styles from './CountryCard.module.css';

/**
 * Returns a grid or list view country card 
 * @param param0 
 */

export default function CountryCard({
  flags,
  name,
  region,
  area,
  population,
}: ICountry) {
  const { viewMode } = useAppSelector(state => state.countriesReducer);

  return (
    <article
      className={
        viewMode === ViewModesEnums.grid
          ? styles.container
          : `${styles.container} ${styles.view_list}`
      }
    >
      <img
        className={styles.flag}
        src={flags.svg}
        alt={`Flag of the ${name.official}`}
        loading='lazy'
      />
      <div className={styles.info}>
        <div className={styles.heading}>
          <h3 className={styles.heading_title}>{name.common}</h3>
          <div className={styles.heading_subtitle}>{region}</div>
        </div>
        <div className={styles.stats}>
          <span title='Population in the country'>
            <MdPeople /> {population.toLocaleString()}
          </span>
          <span title='Country area in square kilometres'>
            <MdOutlineZoomOutMap /> {area.toLocaleString()} KM²
          </span>
        </div>
      </div>
    </article>
  );
}
