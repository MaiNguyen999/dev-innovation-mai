import React, {Component} from 'react';
import Slider from '../../../../shared/components/range_slider/Slider';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {changeValue3} from '../../../../redux/actions/rangeSliderAction';
class Slider3 extends Component{
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        priceValue3: PropTypes.number.isRequired
      };
      changeValue3 = (priceValue3) => {
        const {dispatch} = this.props;
        dispatch(changeValue3(priceValue3));
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
            onChange = {this.changeValue3}
            />
        );
    }
}
export default withRouter(connect(state => ({
    priceValue3: state.priceValue3,
  }))(Slider3));