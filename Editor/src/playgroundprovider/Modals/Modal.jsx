import React, { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import CreatePlaygroundmodal from "./CreatePlaygroundmodal";

function CurrentModal() {
  const Feature = useContext(ModalContext);
  console.log("JHHVKUYF")
  return (
    <>
      {Feature.activeModal === "CREATE_PLAYGROUND" && <CreatePlaygroundmodal/>}
    </>
  );
}

export default CurrentModal;
