import React from 'react';
import './input.css';


export default class Input extends React.Component{
    state = {
        tel: '+' + this.props.country.dialCode
    };


    onChange = (e) => {
      let a = e.target.value.toString().replace(/[^0-9]/g,'');
      const { country: { format }, codeList, inputChange } = this.props;

      if (codeList[+a] && a !== '1') {
          inputChange(a);
      } else if (a === '1' || a === '') {
          inputChange('1');
      }



      let formValue;
      if (format) {
          a = a.split('');
          formValue = format.split('').reduce(((previousValue, currentValue) => {
              if (currentValue === '.' && a.length > 0){
                  previousValue += a.splice(0, 1);

              } else if (currentValue !== '.' && a.length > 0) {
                  previousValue += currentValue;
              }
              return previousValue;
          }), '');

      } else {
          formValue = '+' + a;
      }



      this.setState( {
            tel: formValue
          }
      );

    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.country !== nextProps.country) {
            this.setState({
                tel: '+' + nextProps.country.dialCode
            })
        }
    }

    render() {
        return (
            <input className='input' type='tel' onChange={this.onChange} value={this.state.tel}/>
        );

    }
}
