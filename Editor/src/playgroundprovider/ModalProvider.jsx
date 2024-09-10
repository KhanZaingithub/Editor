import React, { createContext, useState } from "react";

export const ModalContext = createContext();



function ModalProvider({ children }) {
  const [modelType, setModelType] = useState(null);

  const closeModal = () => {
    setModelType(null);
  };
  // const openModel = ()=>{
  //   setModelType("CREATE_PLAYGROUND")
  // }
  const modalFeature = {
    open: setModelType,
    close: closeModal,
    activeModal: modelType,
  };
  console.log(modelType)
  return (
    <>
      <ModalContext.Provider value={modalFeature}>
        {children}
      </ModalContext.Provider>
    </>
  );
}

export default ModalProvider;
