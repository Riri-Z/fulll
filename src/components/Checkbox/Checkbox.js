import React from 'react'
import PropTypes from 'prop-types';

const Checkbox = ({ name, checked = false, onChange, id }) => {

    return (
        <div>
            <input id={id} type="checkbox" name={name} checked={checked} onChange={onChange} />
            <label >{name}</label>
        </div>

    )
}

Checkbox.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

export default Checkbox