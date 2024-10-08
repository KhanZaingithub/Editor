import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import "./style.css";
import RightComponent from "./RightComponent";
import { ModalContext } from "../../playgroundprovider/ModalProvider";
import CreatePlaygroundmodal from "../../playgroundprovider/Modals/CreatePlaygroundmodal";

function index() {
  const modalFeature = useContext(ModalContext);
  const openModal = ()=>{
    modalFeature.open("CREATE_PLAYGROUND");

  }
  return (
    
    <Container fluid className="vh-100">
      {/* left part */}
      <Row className="h-100">
        <Col className="col-12 h-100 col-lg-5 m-h-100" style={{ background: "#1E1E1E" }}>
          <Row className="h-100 align-items-center d-flex justify-content-center text-center">
            <Col>
              <img src="img-1.png" className="img-fluid" />
              <h1 className="text-white">Code Editor</h1>
              <p className="p-custom">Code. Compile. Debug.</p>
              <div className="custom">
                <Button onClick={openModal}
                  className="shadow-c m-auto align-items-center d-flex justify-content-center rounded-5"
                  variant="light"
                >
                  <i className="icon-size bi bi-plus-lg"></i> Create New
                  Playground
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        {/* Right part */}
        <Col className="h-100 overflow-x">
          <Row className="h-100 mt-5 mt-md-5 mt-lg-0 p-1 p-lg-5 p-md-0">
            <RightComponent />
          </Row>
        </Col>
      </Row>
      {modalFeature.activeModal === "CREATE_PLAYGROUND" && <CreatePlaygroundmodal/>}
    </Container>
  );
}

export default index;
