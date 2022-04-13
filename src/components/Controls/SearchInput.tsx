import { MdSearch } from 'react-icons/md';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  value: string,
  onChangeValue: (params:string)=> void
}

function SearchInput({ value, onChangeValue }: SearchInputProps) {
  return (
    <div  className={styles.search}>
      <MdSearch />
      <input
        className={styles.search_input}
        type='search'
        value={value}
        placeholder='Search for a country...'
        onChange={e => onChangeValue(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
