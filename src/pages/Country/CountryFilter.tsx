import CustomSelect from "../../components/Controls/CustomSelect";
import SearchInput from "../../components/Controls/SearchInput";

function Filter() {
    return (
        <aside>
             <SearchInput/>
             <h3>Region</h3>
             <CustomSelect/>
             <h2>Area</h2>
             <input type='range'/>
             <h2>Population</h2>
             <input type='range'/>         
        </aside>
    );
}

export default Filter;