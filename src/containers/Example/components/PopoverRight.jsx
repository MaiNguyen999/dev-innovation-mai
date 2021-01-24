import React, { PureComponent } from 'react';
import {
  Popover, PopoverBody, PopoverHeader,
} from 'reactstrap';
import PropTypes from 'prop-types';
class PopoverRight extends PureComponent {
  static propTypes = {
    dir: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      popoverOpen: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({ popoverOpen: !prevState.popoverOpen }));
  };

  render() {
    const {dir,id } = this.props;
    const { popoverOpen } = this.state;
    return (
      <div>
        <a id={id} onClick={this.toggle} className="info-icon">
          <img src={`${process.env.PUBLIC_URL}/image/info.png`} />
        </a>
        <Popover
          placement="right"
          isOpen={popoverOpen}
          target={id}
          toggle={this.toggle}
          dir={dir}
        >
          <PopoverHeader>FAQ</PopoverHeader>
          <PopoverBody>
            <a href={"https://en.wikipedia.org/wiki/Stationery"}>What is stationery?</a>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverRight;
