import React, {Component} from 'react';
import Slider from '../../../../shared/components/range_slider/Slider';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {changeValue2} from '../../../../redux/actions/rangeSliderAction';
class Slider2 extends Component{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        priceValue2: PropTypes.number.isRequired
      };
      changeValue2 = (priceValue2) => {
        console.log(priceValue2);
        const {dispatch} = this.props;
        dispatch(changeValue2(priceValue2));
        
      }
    render(){
        return(
            <Slider
            min={0}
            max={100}
            marks={{
            0: '0',
            30: '30,000',
            50: '50,000',
            70: '70,000',
            100: '100,000',
            }}
            onChange = {this.changeValue2}
            />
            
        );
    }
}
export default withRouter(connect(state => ({
    priceValue2: state.priceValue2,
  }))(Slider2));