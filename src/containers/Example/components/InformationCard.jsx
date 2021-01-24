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
        <p><span className="bold-text">Suggested items:    </span> <a href={'#'}>Pencil</a>, <a href={"#"}>Eraser</a>
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
              <h5 className="bold-text">{this.props.title}</h5>
              <h5 className="subhead">{this.props.subhead}</h5>
            </div>
            <a href={"https://www.youtube.com/watch?v=vNQzCwtImCU"}><img src={`${process.env.PUBLIC_URL}/image/youtube.png`} className="youtube-icon"/></a>
            <a href={"https://en.wikipedia.org/wiki/Stationary_process#:~:text=In%20mathematics%20and%20statistics,%20a%20stationary%20process%20(or,and%20variance%20also%20do%20not%20change%20over%20time."}><img src={`${process.env.PUBLIC_URL}/image/stats.png`} className="stats-icon"/></a>
             
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
