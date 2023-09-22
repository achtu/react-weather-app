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
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>

        <Form className="form-2" 
        onSubmit={getCurrentLocation}
        >
          <Button variant="primary" type="submit" 
          >
            Current Location
          </Button>
        </Form>
      </div>
    </>
  );
}
