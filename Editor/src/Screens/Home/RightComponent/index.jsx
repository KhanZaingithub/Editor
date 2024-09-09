import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import "./style.css";
import { useContext } from "react"; // used to import data from createContent
import { PlaygroundContext } from "../../../PlaygroundProvider/provider";

// JS used to loop and run same code 
const FolderHTML = ({ folderTitle, subFolder }) => {
  return (
    <div>
      {/* Heading */}
      <div className="d-flex align-items-center justify-content-between bottom-border pt-4">
        <h5>
          <span className="pe-2">
            <i className="bi bi-folder-fill file-color"></i>
          </span>
          {folderTitle}
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
        {subFolder?.map((element, index) => {
          return (
            <Col className="col-lg-6" key={index}>
              <div className="custom d-flex justify-content-between align-items-center w-100 inner-folder p-Half my-3 rounded h-5 mouse">
                <div className="image h-100 d-flex">
                  <div>
                    <img src="img-1.png" className="img-fluid h-100" alt="" />
                  </div>
                  <div className="pt-2 text h-100 ps-2 w-fit-content">
                    <p className="m-0">Folder name</p>
                    <p>Language: {element.language}</p>
                  </div>
                </div>
                <div className="icons">
                  <i className="bi bi-trash mouse"></i>
                  <i className=" px-2 bi bi-pen mouse"></i>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

function RightComponent() {
  const Folder = useContext(PlaygroundContext);

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
        {Folder?.map((element, index) => {
          return (
            <FolderHTML
              folderTitle={element?.title}
              subFolder={element?.folder}
              key={index}
            />
          );
        })}
      </Col>
    </>
  );
}

export default RightComponent;
