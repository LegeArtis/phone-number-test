import React from 'react';
import './phone-input.css';
import SelectCountry from "./select-country/select-country";
import CountryList from "./country-list/country-list";
import Input from "./input/input";


export default class PhoneInput extends React.Component{
    state = {
      selectClick: false,
      selectedCountry: this.props.countryList.list[0]
    };

    onSelectClick = () => {
        this.setState((state) => {
            return {
                selectClick: !state.selectClick
            };
        });
    };

    changeSelectedCountry = (country) => {
      this.setState({
          selectedCountry: country,
          selectClick: false
      })
    };

    inputChangeCountry = (dialCode) => {
        const { list } = this.props.countryList;
        let index =  dialCode === '1' ? 282 : list.findIndex(value => value.dialCode === dialCode);
        this.setState( (selectedCountry) => {
            return {
                selectedCountry: list[index]
            }
        });
    };



    render() {
            return (
                <div className="main_div">
                    <label >All countries</label>
                    <SelectCountry arrow={true} iso2={this.state.selectedCountry.iso2} onClick={this.onSelectClick} tabIndex={'0'} />
                    <Input country={this.state.selectedCountry} codeList={this.props.countryList.allCountryCodes} inputChange={this.inputChangeCountry}/>
                    { this.state.selectClick ? <CountryList changeCountry={this.changeSelectedCountry}
                                                            hide={this.onSelectClick}
                                                            currentCountry={this.state.selectedCountry}
                                                            list={this.props.countryList.list} /> : null}
                </div>
        );
    }
}
