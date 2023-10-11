import React from "react";

import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

export default function SearchForm({
  handleSubmit,
  setCity,
  city,
  getCurrentLocation
}) {
  return (
    <>

      <div className="form-wrap">
        <Form

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

        <Form
          >
          <Button variant="primary" type="submit" onClick={getCurrentLocation}>
            Current Location
          </Button >
        </Form>
      </div>
    </>
  );
}
