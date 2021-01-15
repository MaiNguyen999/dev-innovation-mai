import React, {Component} from 'react';
import Slider from '../../../../shared/components/range_slider/Slider';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {changeValue} from '../../../../redux/actions/rangeSliderAction';
class Slider1 extends Component{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        priceValue: PropTypes.number.isRequired
      };
      changeValue = (priceValue) => {
        const {dispatch} = this.props;
        dispatch(changeValue(priceValue));
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
            onChange = {this.changeValue}
            />
        );
    }
}
export default withRouter(connect(state => ({
    priceValue: state.priceValue,
  }))(Slider1));