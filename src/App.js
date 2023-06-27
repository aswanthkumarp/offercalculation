import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Form,
  Button,
  Container,
  InputGroup,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";
import { Offer1, calculate1 } from "./components/Offer1";
import { Offer2, calculate2 } from "./components/Offer2";
import { Offer3, calculate3 } from "./components/Offer3";
import Header from "./components/componentstyles/Header";

function App() {
  const [resultComponent, setResultComponent] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [showSecondaryButtons, setShowSecondaryButtons] = useState(false);

  function handleInputChange(event) {
    console.log(event);
    setInputValue(event.target.value);
  }

  function handlePrimaryButtonClick() {
    setShowSecondaryButtons(true);
  }

  function handleOffer1Operation() {
    const result = calculate1(inputValue);
    setResultComponent(<Offer1 result={result} />);
  }

  function handleOffer2Operation() {
    const result = calculate2(inputValue);
    setResultComponent(<Offer2 result={result} />);
  }

  function handleOffer3Operation() {
    const result = calculate3(inputValue);
    setResultComponent(<Offer3 result={result} />);
  }

  return (
    <BrowserRouter>
      <Header showSecondaryButtons={showSecondaryButtons} />
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>Check Different Offers</h1>

            <Form>
              <Form.Group controlId="inputValue">
                <InputGroup>
                  <FormControl
                    placeholder="Enter The Amount in Rs"
                    type="number"
                    onChange={handleInputChange}
                    value={inputValue}
                  />
                </InputGroup>
              </Form.Group>
              <Button
                className="mt-2 me-2 mb-2"
                variant="primary"
                onClick={handlePrimaryButtonClick}
              >
                Choose The Offers
              </Button>

              {resultComponent}
            </Form>
          </Col>
        </Row>
      </Container>

      <Routes>
        <Route index element={<Form />} />
        <Route
          path="/offer1"
          element={<Offer1Form onOperation={handleOffer1Operation} />}
        />
        <Route
          path="/offer2"
          element={<Offer2Form onOperation={handleOffer2Operation} />}
        />
        <Route
          path="/offer3"
          element={<Offer3Form onOperation={handleOffer3Operation} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function Offer1Form({ onOperation }) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>10% Discount</h2>
          <Button
            className="mt-2 buttontext"
            variant="success"
            onClick={onOperation}
          >
            Click to Apply 10% Discount
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

function Offer2Form({ onOperation }) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>25% Discount</h2>
          <Button
            className="mt-2 buttontext"
            variant="success"
            onClick={onOperation}
          >
            Click to Apply 25% Discount
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

function Offer3Form({ onOperation }) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>50% Discount</h2>
          <Button
            className="mt-2 buttontext"
            variant="success"
            onClick={onOperation}
          >
            Click to Apply 50% Discount
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
