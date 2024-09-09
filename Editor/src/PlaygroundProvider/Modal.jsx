import React, { createContext } from "react";
import Playgroundmodal from "./Modals/Playgroundmodal";
const mdalContext = createContext()

const modalType = {
    ["modal-created"]: Playgroundmodal,
}

function Modal({ children }) {
  return (
    <>
    <mdalContext.Provider value={'AZAZ'}>
     {children}
    </mdalContext.Provider>
    </>
  );
}

export default Modal;
