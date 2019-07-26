import React from 'react';
import './select-country.css';
import './flags.css';

const SelectCountry = ({ arrow, iso2, onClick, tabIndex = '-1' }) => {
        let icon = `flag icon ${iso2}`;
        let select = arrow ? 'select' : 'only_icon';

        return (
            <div className={select} onClick={onClick} tabIndex={tabIndex} id='block'>
                <div className={icon}></div>
                {arrow ? <div className='arrow'> > </div> : false}
            </div>
        );
};
export default SelectCountry;

