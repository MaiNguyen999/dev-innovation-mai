import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col,CardBody,Card,Table} from 'reactstrap';
class Total extends Component{
    static propTypes = {
        priceValue: PropTypes.number.isRequired,
        priceValue2: PropTypes.number.isRequired,
        priceValue3: PropTypes.number.isRequired,
      };
      
    render(){
        const {priceValue,priceValue2,priceValue3} = this.props;
        var subTotal = priceValue + priceValue2 + priceValue3 ;
        let discount = (0.05 * subTotal).toFixed(2);
        var total = (0.95 * subTotal).toFixed(2);
        return(
            <Col>
                <Card>
                    <CardBody className="invoice">
                    <Table className="table--bordered cart__table" responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Coverage A – Dwelling Building</td>
                            <td>1</td>
                            <td>${priceValue}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Coverage B - Private Structures</td>
                            <td>1</td>
                            <td>${priceValue2}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Coverage C - Personal Property</td>
                            <td>1</td>
                            <td>${priceValue3}</td>
                        </tr>
                    </tbody>
                    </Table>
                    
                    <div className="invoice__total">
                        <p>Sub-total: ${subTotal}</p>
                        <p>Discount: ${discount}</p>
                        <p className="invoice__grand-total">Grand Total: ${total}</p>
                    </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default withRouter(connect(state => ({
    priceValue: state.priceValue,
    priceValue2: state.priceValue2,
    priceValue3: state.priceValue3,
  }))(Total));
