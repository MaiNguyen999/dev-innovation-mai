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
import CoverageA from './coverages/CoverageA';
import CoverageB from './coverages/CoverageB';
import CoverageC from './coverages/CoverageC';
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
          <InformationCard title="Coverage A – Dwelling Building" suggestion="1">
            <PopoverRight id="Pop1"/>
            <CoverageA/>
            <Slider1/>
          </InformationCard>
        </Col>
        <Card1/>
    </Row>
    <Row>
        <Col md={9}>
          <InformationCard title="Coverage B - Private Structures" suggestion="2">
            <PopoverRight id="Pop2"/>
            <CoverageB/>
            <Slider2/>
          </InformationCard>
        </Col>
        <Card2/>
    </Row>
    <Row>
        <Col md={9}>
          <InformationCard title="Coverage C - Personal Property" suggestion="3">
            <PopoverRight id="Pop3"/>
            <CoverageC/>
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
