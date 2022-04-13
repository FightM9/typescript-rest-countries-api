import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import CustomSelect from '../../../components/Controls/CustomSelect';
import SearchInput from '../../../components/Controls/SearchInput';
import { resetFilter, setArea, setFilter, setPopulation,setRegion, setSearch, setSort } from '../../../store/reducer/CountrySlice';
import { getOptionByMinMaxValue, getOptionByValue} from '../../../shared/helper';
import styles from './Filter.module.css';

const MAX_NUMBER = Number.MAX_SAFE_INTEGER;

const REGION = [
  { value: 'All regions', label: 'All regions' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const AREA = [
  { value: { min: 0, max: MAX_NUMBER }, label: 'All areas' },
  { value: { min: 0, max: 1e3 }, label: 'Less than 1,000' },
  { value: { min: 1e3, max: 1e5 }, label: ' 1,000 - 100,000' },
  { value: { min: 1e5, max: 1e6 }, label: ' 100,000 - 1 millon' },
  { value: { min: 1e6, max: MAX_NUMBER }, label: 'Over 1 millon' },
];

const POPULATION = [
  { value: { min: 0, max: MAX_NUMBER }, label: 'All populations' },
  { value: { min: 0, max: 1e4 }, label: 'Less than 10,000' },
  { value: { min: 1e4, max: 1e5 }, label: '10,000 - 100,000' },
  { value: { min: 1e5, max: 1e6 }, label: '100,000 - 1 millon' },
  { value: { min: 1e6, max: 1e7 }, label: '1 - 10 millons' },
  { value: { min: 1e7, max: 1e8 }, label: '10 - 100 millons' },
  { value: { min: 1e8, max: MAX_NUMBER }, label: 'Over 100 millions' },
];

export default function Filter() {
  const filterOptions = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();

  const setFilterSort = () => {
    dispatch(setFilter());
    dispatch(setSort());
  };

  // Update the filter when the search value changes, with optimization
  useEffect(() => {
    setTimeout(() => setFilterSort(), 500);
  }, [filterOptions.search, dispatch]);

  // Update the filter when the filter parameter changes without searching
  useEffect(() => {
    setFilterSort();
  }, [
    filterOptions.region,
    filterOptions.area,
    filterOptions.population,
    dispatch
  ]);

  return (
    <form className={styles.filters} onReset={() => dispatch(resetFilter())}>
      <div className={styles.filter_search}>
        <SearchInput
          value={filterOptions.search}
          onChangeValue={(value: string) => {
            dispatch(setSearch(value));
          }}
        />
      </div>
      <div className={styles.filters_groupe}>
        <div className={styles.filter_item}>
          <h3 className={styles.filter_title}>Region</h3>
          <CustomSelect
            options={REGION}
            value={getOptionByValue(filterOptions.region, REGION)}
            isSearchable={false}
            onChange={(option: any) => {
              dispatch(setRegion(option?.value));
            }}
          />
        </div>
        <div className={styles.filter_item}>
          <h3 className={styles.filter_title}>
            Area<span className={styles.filter_title_unit}>KM²</span>
          </h3>
          <CustomSelect
            options={AREA}
            value={getOptionByMinMaxValue(filterOptions.area, AREA)}
            isSearchable={false}
            onChange={(option: any) => {
              dispatch(setArea(option?.value));
            }}
          />
        </div>
        <div className={styles.filter_item}>
          <h3 className={styles.filter_title}>Population</h3>
          <CustomSelect
            options={POPULATION}
            value={getOptionByMinMaxValue(filterOptions.population, POPULATION)}
            isSearchable={false}
            onChange={(option: any) => {
              dispatch(setPopulation(option?.value));
            }}
          />
        </div>
        <input type='reset' value='Reset' />
      </div>
    </form>
  );
}
