import React, {Component} from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PieChart, Pie } from 'recharts';
class Card1 extends Component{
  static propTypes = {
    priceValue: PropTypes.number.isRequired,
  };
  render(){
    const {priceValue} = this.props;
    const data01 = [{ value: 80, fill: '#4ce1b6' },
                    { value: 20, fill: '#eeeeee' }];
    const data02 = [{ value: 50, fill: '#ff4861' },
                    { value: 50, fill: '#eeeeee' }];
    const data03 = [{ value: 30, fill: '#F6DA6E' },
                    { value: 70, fill: '#eeeeee' }];
    return(
      <Col >
        <Card>
          <CardBody>
          <div className="dashboard__stat dashboard__stat--budget">
            <div className="dashboard__stat-main">
              <p className="dashboard__stat-main-title">Expected Premium</p>
              <p className="dashboard__stat-main-number">${priceValue}</p>
              <hr />
            </div>
          </div>
          <div className="dashboard__stat">
            <div className="dashboard__stat-chart">
              <PieChart width={120} height={120}>
                <Pie data={data03} dataKey="value" cx={55} cy={55} innerRadius={55} outerRadius={60} />
              </PieChart>
              <p className="dashboard__stat-label" style={{ color: '#ff4861' }}>30%</p>
            </div>
            <div className="dashboard__stat-info">
              <p>House breakin often happens in this area.</p>
              <h4 className="dashboard__stat-number">
                    Starting from $23,747.00
              </h4>
            </div>
          </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
  
 export default withRouter(connect(state => ({
  priceValue: state.priceValue,
}))(Card1));
