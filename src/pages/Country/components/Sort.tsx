import { useEffect } from 'react';
import { MdOutlineViewAgenda, MdGridView, MdSort } from 'react-icons/md';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getOptionByValue } from '../../../shared/helper';
import {
  setSort,
  setSortOption,
  setSortOrder,
  setViewMode,
  SortOptionEnum,
  SortOrderEnum,
  ViewModesEnums,
} from '../../../store/reducer/CountrySlice';
import styles from './Sort.module.css';

const SORT = [
  { value: SortOptionEnum.name, label: 'Name' },
  { value: SortOptionEnum.population, label: 'Population' },
  { value: SortOptionEnum.area, label: 'Area' },
];

export default function Sort() {
  const { sort, viewMode } = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSort());
  }, [sort, dispatch]);

  return (
    <div className={styles.sort}>
      <div className={styles.sort_option}>
        <div className={styles.sort_option_sort}>
          Sort by
          <Select
            styles={customStyles}
            options={SORT}
            value={getOptionByValue(sort.option, SORT)}
            onChange={(option: any) => dispatch(setSortOption(option?.value))}
            isSearchable={false}
          />
        </div>
        <div className={styles.sort_option_order}>
          Order
          <button
            className={styles.btn_order}
            onClick={() => {
              sort.order === SortOrderEnum.asc
                ? dispatch(setSortOrder(SortOrderEnum.desc))
                : dispatch(setSortOrder(SortOrderEnum.asc));
            }}
          >
            <MdSort
              className={
                sort.order === SortOrderEnum.asc
                  ? `${styles.btn_icon_asc}`
                  : ``
              }
            />
          </button>
        </div>
      </div>
      <form className={styles.view}>
        <label className={styles.view_label}>
          <input
            className='visually-hidden'
            type='radio'
            name='view'
            onChange={() => dispatch(setViewMode(ViewModesEnums.list))}
            checked={viewMode === ViewModesEnums.list}
          />
          <MdOutlineViewAgenda className={styles.view_icon} />
          <span className='visually-hidden'>Set list view mode</span>
        </label>
        <label className={styles.view_label}>
          <input
            type='radio'
            name='view'
            onChange={() => dispatch(setViewMode(ViewModesEnums.grid))}
            checked={viewMode === ViewModesEnums.grid}
          />
          <MdGridView className={styles.view_icon} />
          <span className='visually-hidden'>Set grid view mode</span>
        </label>
      </form>
    </div>
  );
}

const customStyles = {
  valueContainer: (provided: any) => ({
    ...provided,
    flex: 'none',
    padding: '0',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected  ? 'white': 'var(--color-text)',
    backgroundColor:state.isSelected ? 'var(--color-primary)' : 'var(--color-card-bg)' ,
    cursor: 'pointer',
  }),
  control: () => ({
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '0.2rem',
    fontSize: '0.9rem',
    backgroundColor: 'var(--color-card-bg)',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'var(--color-text)',
  }),
  menu : (provided: any) => ({
    ...provided,
    backgroundColor: 'var(--color-card-bg)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided: any,  state: any) => ({
    ...provided,
    padding: '0',
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  clearIndicator : () => ({
    padding: '0',
  }),
}