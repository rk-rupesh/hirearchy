import React from 'react'

const NumericInput = ({colSpan}) => {
    const handleChange = (e) => {
        const value = e.target.value;
        // Allow only digits
        if (/^\d*$/.test(value)) {
            setValue(value);
        }
    };

    const [value, setValue] = React.useState('');

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter digits only"
            className={`border px-3 py-2 rounded ${colSpan}`}
        />
    );
}

export default NumericInput
