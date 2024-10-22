import { useState } from "react";
import { Button } from "react-simplicity-lib";
import {
  DocComponentDocumentation,
  DocComponentDisplay,
  DocHeader,
  DocTemplate,
} from "../DocTemplate";
import ModalDoc from "./ModalDoc";
const ModalDisplay = ({ isOpen, isClosed = () => {}, layer = 0 }) => {
  const [isOpenByButton, setIsOpenByButton] = useState(false);
  return (
    <>
      <div style={{ height: "100%", display: "flex" }}>
        <Button
          onClick={() => setIsOpenByButton(true)}
          style={{ margin: "auto" }}
        >
          Click Me 🤭
        </Button>
      </div>
      <DocTemplate isOpen={isOpen || isOpenByButton}>
        <DocHeader
          title="Modal"
          onClick={() => {
            isClosed();
            setIsOpenByButton(false);
          }}
        />
        <DocComponentDisplay>
          <p style={{ textAlign: "center" }}>Layer = {layer}</p>
          <ModalDisplay layer={layer + 1} />
        </DocComponentDisplay>
        <DocComponentDocumentation>
          <ModalDoc />
        </DocComponentDocumentation>
      </DocTemplate>
    </>
  );
};

export default ModalDisplay;
