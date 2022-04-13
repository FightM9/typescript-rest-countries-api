import ReactSelect, { Props } from 'react-select';

/**
 * Styles for react-select
 * https://react-select.com/styles
 */

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    padding: '0.2rem',
    background: 'var(--color-card-bg)',
    borderColor: 'var(--color-border)',
    transition: 'background 0s',    
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected  ? 'white': 'var(--color-text)',
    backgroundColor:state.isSelected ? 'var(--color-primary)' : 'var(--color-card-bg)' ,
    cursor: 'pointer',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: '0.9rem',
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

interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}

function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  
    return <ReactSelect 
    styles={customStyles} {...props}/>;
}

export default CustomSelect;


