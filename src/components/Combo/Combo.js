import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const customStyles = {
    option: (base, state) => ({ ...base, color: 'black', backgroundColor: state.isSelected ? '#f96630' : base.backgroundColor }),
    control: () => ({
        display: 'flex',
        borderBottom: '1px solid lightgray',
        minWidth: 150,
    }),
};

const Combo = ({ onChange, options }) => (
    <Select styles={customStyles} onChange={onChange} options={options} defaultValue={options[0]} />
);

Combo.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string,
    })).isRequired,
};

export default Combo;
