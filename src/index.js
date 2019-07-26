import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhoneInput from './phone-input/phone-input';
import allCountries from './data';

const a = () => {
    return (
        <div>
            <div className='main'>
                <PhoneInput countryList={allCountries} />
            </div>
            <div className='test'>
                <PhoneInput countryList={allCountries}/>
            </div>
        </div>
    );
};

ReactDOM.render(a(), document.getElementById('root'));
