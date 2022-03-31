import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/reducer/searchReduser";
import './SearchInput.css'

function SearchInput() {
  const dispatch = useDispatch();
  // @ts-ignore
  const searchValue = useSelector((state) => state.search)

  return (
    <div className="search">
      <IoSearch />
      <input
        className="search-input"
        type='search'
        value={searchValue}
        placeholder="Search for a country..."        
        onChange={(e) => dispatch(setSearch(e.currentTarget.value))}
      />
    </div>
  );
}

export default SearchInput;
