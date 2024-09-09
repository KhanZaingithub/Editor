import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import "./style.css";
import RightComponent from "./RightComponent";

function index() {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className=" col-lg-5 " style={{ background: "#1E1E1E" }}>
          <Row className="h-100 align-items-center d-flex justify-content-center text-center">
            <Col>
              <img src="img-1.png" className="img-fluid" />
              <h1 className="text-white">Code Editor</h1>
              <p className="p-custom">Code. Compile. Debug.</p>
              <div className="custom">
                <Button
                    className="shadow-c m-auto align-items-center d-flex justify-content-center rounded-5"
                    variant="light"
                >
                    {" "}
                    <i className="icon-size bi bi-plus-lg"></i> Create New
                    Playground
                </Button>
              </div>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row className="h-100 p-5">
            <RightComponent />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default index;
