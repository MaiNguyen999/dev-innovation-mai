import React, {Component} from 'react';
import { Card, CardBody, Col,Row } from 'reactstrap';
import ProductItems from '../../../shared/components/catalog/ProductItems';
import catalogList from './catalog_list';
import Alert from '../../../shared/components/Alert';
class InformationCard extends Component{

  getSuggestion() {
    switch(this.props.suggestion){
      case "1":
      case "4":
      case "5":
      case "6":
      case "2":
        return <Alert color="warning" className="alert--neutral" icon>
        <p><span className="bold-text">Suggested items:    </span> <a href={'#'}>Computer Coverage</a>, <a href={"#"}>Dwelling Coverage</a>
        </p>
      </Alert>;
      case "3":
        return <ProductItems items={catalogList} />
      default:
        return null;
    }
  }

  render(){
    return(
      <Col >
        <Card>
          <CardBody>
            <div className="card__title">
            {/* <button onClick={>Start TogetherJS</button> */}
              <h5 className="bold-text">{this.props.title}</h5>
              <h5 className="subhead">{this.props.subhead}</h5>
            </div>
            <a href={"https://www.youtube.com/watch?v=bic4qOuIJoI"}><img src={`${process.env.PUBLIC_URL}/image/youtube.png`} className="youtube-icon"/></a>
            <a href={"https://www.freshwateralliance.ca/floods"}><img src={`${process.env.PUBLIC_URL}/image/stats.png`} className="stats-icon"/></a>
             
            {this.props.children}
            
            <hr className="line-break"/>
            {this.getSuggestion()}
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default InformationCard;
