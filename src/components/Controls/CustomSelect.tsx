import React from 'react';
import ReactSelect from 'react-select';
import './CustomSelect.css'

function CustomSelect(props:any) {
    return (
        <ReactSelect {...props} className='select'/>
    );
}

export default CustomSelect;