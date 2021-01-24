import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import InformationCard from './components/InformationCard';
import PersonalInformationCard from './components/PersonalInformationCard';
import Card1 from './components/PremiumCards/Card1';
import Card2 from './components/PremiumCards/Card2';
import Card3 from './components/PremiumCards/Card3';
import Slider1 from './components/Sliders/Slider1';
import Slider2 from './components/Sliders/Slider2';
import Slider3 from './components/Sliders/Slider3';
import Totals from './components/Totals';
import Pen from './coverages/Pen';
import Pencil from './coverages/Pencil';
import Eraser from './coverages/Eraser';
import PopoverRight from './components/PopoverRight';
import Panel from '../../shared/components/Panel';
const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <PersonalInformationCard/>
      </Col>
    </Row>
    <Row className="row-container">
        <Col md={9}>
          <InformationCard title="Pen" suggestion="1">
            <PopoverRight id="Pop1"/>
            <Pen/>
            <Slider1/>
          </InformationCard>
        </Col>
        <Card1/>
    </Row>
    <Row>
        <Col md={9}>
          <InformationCard title="Pencil" suggestion="2">
            <PopoverRight id="Pop2"/>
            <Pencil/>
            <Slider2/>
          </InformationCard>
        </Col>
        <Card2/>
    </Row>
    <Row>
        <Col md={9}>
          <InformationCard title="Eraser" suggestion="3">
            <PopoverRight id="Pop3"/>
            <Eraser/>
            <Slider3/>
          </InformationCard>
        </Col>
        <Card3/>
    </Row>
    <Row>
        <Col md={12}>
          <Panel  color="success" title="Total">
            <Totals/>
          </Panel>
        </Col>
        
    </Row>
  </Container>
);

export default ExamplePage;
