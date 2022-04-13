import {
  MdOutlinePeopleAlt,
  MdLanguage,
  MdStarBorder,
  MdOutlineTravelExplore,
  MdAttachMoney,
  MdOutlineDriveEta,
  MdMailOutline,
  MdToday,
  MdOutlineZoomOutMap,
  MdOutlineWebAsset,
} from 'react-icons/md';
import { capitalize } from '../../../utils';
import styles from './ContryInfo.module.css';
import { useAppSelector } from '../../../hooks/redux';

function ContryInfo() {
  const { country } = useAppSelector((state) => state.countryDetailsReducer);

  const getCurency = () =>
    country.currencies
      ? Object.values(country.currencies)
          .map((currency) => `${currency.name} (${currency.symbol})`)
          .join(', ')
      : false;

  const getLanguages = () =>
    country.languages ? Object.values(country.languages).join(', ') : false;

  const getDrivingInfo = () =>
    country.car.side ? `${capitalize(country.car.side)}-driving` : false;

  // prettier-ignore
  const countryInfo = [
    { caption: 'Capital', title: country.capital?.length ? country.capital[0] : false, icon: <MdStarBorder />, },
    { caption: 'Region', title: country.region,icon: <MdOutlineTravelExplore />,},    
    { caption: 'Subregion', title: country.subregion,icon: <MdOutlineTravelExplore />,},
    { caption: 'Area KM²', title: country.area.toLocaleString(),icon: <MdOutlineZoomOutMap />,},
    { caption: 'Population', title: country.population.toLocaleString(),icon: <MdOutlinePeopleAlt />,},
    { caption: 'Languages', title: getLanguages(),icon: <MdLanguage />,},
    { caption: 'Currencies', title: getCurency(), icon: <MdAttachMoney /> },
    { caption: 'Top-level domain', title: country.tld ? country.tld.join(', ') : false,icon: <MdOutlineWebAsset />,},
    { caption: 'Driving', title: getDrivingInfo(), icon: <MdOutlineDriveEta /> },   
    { caption: 'First Day of the Week', title: capitalize(country.startOfWeek),icon: <MdToday />,},
    { caption: 'Postal Code Format', title: country.postalCode.format,icon: <MdMailOutline />,},
  ];

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.section_title}>
          <h1 className={styles.title}>{country.name.common}</h1>
          <h2 className={styles.subtitle}>{country.name.official}</h2>
        </div>
        <div className={styles.symbols}>
          <img
            className={styles.flag}
            src={country.flags.svg}
            alt={`Flag of the ${country.name.official}`}
          />
          <img
            className={styles.coatOfArms}
            src={country.coatOfArms?.svg}
            alt={`The coat of arms of the ${country.name.official}`}
          />
        </div>
      </section>
      <section>
        <h2 className={styles.section_title}>Details</h2>
        <ul className={styles.list}>
          {countryInfo.map((info) =>
            // Skip if title value is empty
            info.title ? (
              <li className={styles.list_item} key={info.caption}>
                <div className={styles.list_caption}>{info.caption}</div>
                <div className={styles.list_title}>{info.title}</div>
                <div className={styles.list_icon}>{info.icon}</div>
              </li>
            ) : null
          )}
        </ul>
      </section>
    </div>
  );
}

export default ContryInfo;
