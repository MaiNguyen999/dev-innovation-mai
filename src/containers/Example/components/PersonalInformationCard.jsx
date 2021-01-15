/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, Col, Button, ButtonToolbar, Table, CardBody,
} from 'reactstrap';

const invoiceData = [
  { title: 'Wordpress Plugin Apollo 200', quantity: 1, cost: 27 },
  { title: 'Easy Pro Admin Template', quantity: 1, cost: 59 },
  { title: 'Spirit HTML Template', quantity: 2, cost: 20 },
];

const PersonalInformationCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody className="invoice" style={{"height":"250px"}}>
        <div className="invoice__head">
          <div className="invoice__head-left">
            <p>Jane Doe </p>
            <p>Email: customer@gmail.com</p>
            <p>Address: 123 Main Street</p>
            <p>City: Winnipeg</p>
            <p>Postal Code: R5H 9K1</p>
            <p dir="ltr">Phone Number: (012)-5446-8288</p>
          </div>
          <div className="invoice__head-right">
            <h4>Mai's Innovation</h4>
            <p className="invoice__date">August 23, 2019</p>
            <p></p>
            <p>ABC's Broker Company</p>
            <p>broker@gmail.com</p>
            <p>44 Shirley Ave.</p>
            <p>West Chicago, IL 60185</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default PersonalInformationCard;
