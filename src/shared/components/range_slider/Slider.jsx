/* eslint-disable prefer-destructuring */
import 'rc-slider/assets/index.css';
import React, { PureComponent } from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';
const Handle = Slider.Handle;

const handle = ({ value, index, ...restProps }) => (
  <div>
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value != 0? `${value},000` :0}
      visible
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} dragging={undefined} />
    </Tooltip>
  </div>
);


handle.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default class SliderTheme extends PureComponent {
  static propTypes = {
    marks: PropTypes.shape(),
    value: PropTypes.number,
    min: PropTypes.number.isRequired,
    max: PropTypes.string.isRequired,
    tipFormatter: PropTypes.func,
    onChange:PropTypes.func,
  };

  static defaultProps = {
    marks: {},
    value: 0,
    tipFormatter: value => value,
  };

  render() {
    const {
      marks, value, min, max, tipFormatter, onChange
    } = this.props;
    
    return (
      <div className="slider">
        <div className="slider__min">
          <p>{tipFormatter ? tipFormatter(min) : min}</p>
        </div>
        <div className="slider__max">
          <p>{tipFormatter ? tipFormatter(max) : max}</p>
        </div>
        <Slider
          min={min}
          max={max}
          defaultValue={0}
          handle={handle}
          marks={marks}
          tipFormatter={tipFormatter}
          onChange={onChange}
        />
      </div>
    );
  }
}
