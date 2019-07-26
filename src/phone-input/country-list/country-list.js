import React from 'react';
import './country-list.css';
import SelectCountry from "../select-country/select-country";

let count = 0;

export default class CountryList extends React.Component{

    counterList = () =>  this.props.list.map((item, i) => {
        const { changeCountry, currentCountry } = this.props;
        const {name, iso2, dialCode} = item;
        let style = currentCountry === item ? 'list_item current_country' : 'list_item';
        if (this.props.list.indexOf(currentCountry) === i) {
            style += ' selected';
        }

        return (
            <dl id={i.toString()} key={i} className={style} onClick={() => changeCountry(item)} tabIndex={-1}>
                <SelectCountry arrow={false} iso2={iso2}/>
                <p className='item_name'>{name} <span className='item_code'>+{dialCode}</span></p>
            </dl>
        );
    });

    scrolling = (e) => {
        if (count < this.props.list.length-1 && e.key === 'ArrowDown') {
            count++
        }
        if (count > 0 && e.key === 'ArrowUp') {
            count--
        }
    };

    up = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            document.getElementById(`${count}`).focus();
        }
        if (e.key === 'Enter') {
            this.props.changeCountry(this.props.list[count]);
        }
    };

    componentDidMount() {
        count = this.props.list.indexOf(this.props.currentCountry);
        document.getElementById(`${count}`).focus({preventScroll: false});
        document.addEventListener('keydown', this.scrolling);
        document.addEventListener('keyup', this.up);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.up);
        document.removeEventListener('keydown', this.scrolling);
    }

    render() {
        const { hide } = this.props;
        return (
            <div className='country_list' onMouseLeave={hide}>
                <ul id='list'>
                    {this.counterList()}
                </ul>
            </div>
        );
    }
}
