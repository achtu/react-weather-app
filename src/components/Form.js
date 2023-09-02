import React from "react";

import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

export default function SearchForm({
  handleSubmit,
  setCity,
  city,
  getCurrentLocation,
  Search
}) {
  return (
    <>
      <style type="text/css">
        {`
    
    .btn-outline-dark{
      background-color: #fff;
      border-color:#fff;
    }
    .btn-outline-dark:hover{
      background-color: #48484A;
      border-color:#48484A;
    }
    `}
      </style>
      <div className="form-wrap">
        <Form
         className="form-1"
          onSubmit={handleSubmit}
          value={city}
          onChange={(event) => setCity(event.target.value)}>
          <Row>
            <Col xs="auto">
              <FormControl
                type="text"
                name="city"
                placeholder="enter city"
                className="mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button variant="outline-dark" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>

        <Form className="form-2" 
        onSubmit={getCurrentLocation}
        >
          <Button variant="outline-dark" type="submit" 
          >
            Current Location
          </Button>
        </Form>
      </div>
    </>
  );
}
