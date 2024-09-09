import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import "./style.css";
function RightComponent() {
  return (
    <>
      <Col>
        {/* Heading */}
        <div className="d-flex align-items-center justify-content-between bottom-border">
          <h3>
            My <span className="fw-bold">Playgrounds</span>{" "}
          </h3>
          <p
            onClick={() => {
              console.log("hello");
            }}
            className="align-items-center d-flex justify-content-center mouse"
          >
            <i className="icon-size bi bi-plus-lg"></i>New Folder
          </p>
        </div>
        {/* Inner part */}
        <div>
          {/* Heading */}
          <div className="d-flex align-items-center justify-content-between bottom-border pt-4">
            <h5>
              {" "}
              <span>
                <i className="bi bi-folder-fill file-color"></i>
              </span>{" "}
              My Playgrounds{" "}
            </h5>
            <div className="d-flex align-items-center">
              <p>
                <i className="bi bi-trash mouse"></i>
              </p>
              <p className="px-2">
                <i className="bi bi-pen mouse"></i>
              </p>
              <p
                onClick={() => {
                  console.log("hello");
                }}
                className="d-flex align-items-center mouse"
              >
                <i className="icon-size bi bi-plus-lg"></i>New Folder
              </p>
            </div>
          </div>
          {/* Inner folder */}
          <Row>
            <Col className="col-lg-4">
              <div className="custom d-flex justify-content-between align-items-center w-100 inner-folder p-Half my-3 rounded h-5 mouse">
                <div className="image h-100 d-flex">
                  <div>
                    <img src="img-1.png" className="img-fluid h-100" alt="" />
                  </div>
                  <div className="pt-2 text h-100 ps-2">
                    <p className="m-0">Folder name</p>
                    <p>Language</p>
                  </div>
                </div>
                <div className="icons">
                  <i className="bi bi-trash mouse"></i>
                  <i className=" px-2 bi bi-pen mouse"></i>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4">
              <div className="custom d-flex justify-content-between align-items-center w-100 inner-folder p-Half my-3 rounded h-5 mouse">
                <div className="image h-100 d-flex">
                  <div>
                    <img src="img-1.png" className="img-fluid h-100" alt="" />
                  </div>
                  <div className="pt-2 text h-100 ps-2">
                    <p className="m-0">Folder name</p>
                    <p>Language</p>
                  </div>
                </div>
                <div className="icons">
                  <i className="bi bi-trash mouse"></i>
                  <i className=" px-2 bi bi-pen mouse"></i>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4">
              <div className="custom d-flex justify-content-between align-items-center w-100 inner-folder p-Half my-3 rounded h-5 mouse">
                <div className="image h-100 d-flex">
                  <div>
                    <img src="img-1.png" className="img-fluid h-100" alt="" />
                  </div>
                  <div className="pt-2 text h-100 ps-2">
                    <p className="m-0">Folder name</p>
                    <p>Language</p>
                  </div>
                </div>
                <div className="icons">
                  <i className="bi bi-trash mouse"></i>
                  <i className=" px-2 bi bi-pen mouse"></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* Inner part */}
        <div>
          {/* Heading */}
          <div className="d-flex align-items-center justify-content-between bottom-border pt-4">
            <h5>
              {" "}
              <span>
                <i className="bi bi-folder-fill file-color"></i>
              </span>{" "}
              My Playgrounds{" "}
            </h5>
            <div className="d-flex align-items-center">
              <p>
                <i className="bi bi-trash mouse"></i>
              </p>
              <p className="px-2">
                <i className="bi bi-pen mouse"></i>
              </p>
              <p
                onClick={() => {
                  console.log("hello");
                }}
                className="d-flex align-items-center mouse"
              >
                <i className="icon-size bi bi-plus-lg"></i>New Folder
              </p>
            </div>
          </div>
          {/* Inner folder */}
          <Row>
            <Col className="col-lg-4">
              <div className="custom d-flex justify-content-between align-items-center w-100 inner-folder p-Half my-3 rounded h-5 mouse">
                <div className="image h-100 d-flex">
                  <div>
                    <img src="img-1.png" className="img-fluid h-100" alt="" />
                  </div>
                  <div className="pt-2 text h-100 ps-2">
                    <p className="m-0">Folder name</p>
                    <p>Language</p>
                  </div>
                </div>
                <div className="icons">
                  <i className="bi bi-trash mouse"></i>
                  <i className=" px-2 bi bi-pen mouse"></i>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4">
              <div className="custom d-flex justify-content-between align-items-center w-100 inner-folder p-Half my-3 rounded h-5 mouse">
                <div className="image h-100 d-flex">
                  <div>
                    <img src="img-1.png" className="img-fluid h-100" alt="" />
                  </div>
                  <div className="pt-2 text h-100 ps-2">
                    <p className="m-0">Folder name</p>
                    <p>Language</p>
                  </div>
                </div>
                <div className="icons">
                  <i className="bi bi-trash mouse"></i>
                  <i className=" px-2 bi bi-pen mouse"></i>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4">
              <div className="custom d-flex justify-content-between align-items-center w-100 inner-folder p-Half my-3 rounded h-5 mouse">
                <div className="image h-100 d-flex">
                  <div>
                    <img src="img-1.png" className="img-fluid h-100" alt="" />
                  </div>
                  <div className="pt-2 text h-100 ps-2">
                    <p className="m-0">Folder name</p>
                    <p>Language</p>
                  </div>
                </div>
                <div className="icons">
                  <i className="bi bi-trash mouse"></i>
                  <i className=" px-2 bi bi-pen mouse"></i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>    
    </>
  );
}

export default RightComponent;
