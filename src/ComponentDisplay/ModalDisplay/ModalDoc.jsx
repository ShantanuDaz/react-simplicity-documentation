import { Tabs, Tab, Button, Table } from "react-simplicity-lib";
import { useState } from "react";
const codeSample = `import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal 
        isOpen={isOpen} 
        isCenter={true} 
        onModalClose={toggleModal}
        style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
      >
        <h2>Hello, I am a Modal!</h2>
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
`;
const columns = [
  {
    name: "Prop Name",
    field: "name",
  },
  {
    name: "Default Value",
    field: "defaultValue",
  },
  {
    name: "Allowed Values",
    field: "values",
  },
  {
    name: "Function",
    field: "function",
  },
];

const rows = [
  {
    name: "children",
    defaultValue: "undefined",
    values: "Any valid React nodes",
    function: "Content to display inside the modal.",
  },
  {
    name: "isOpen",
    defaultValue: "undefined",
    values: "Boolean",
    function: "Controls whether the modal is visible.",
  },
  {
    name: "isCenter",
    defaultValue: "true",
    values: "Boolean",
    function: "Aligns the modal content at the center if true.",
  },
  {
    name: "onModalClose",
    defaultValue: "() => {}",
    values: "Function",
    function: "Callback invoked when the modal is closed.",
  },
  {
    name: "className",
    defaultValue: '""',
    values: "String",
    function: "Adds additional CSS class names.",
  },
  {
    name: "style",
    defaultValue: "{}",
    values: "CSS Object",
    function: "Adds custom inline styles to the modal container.",
  },
];

const ModalDoc = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSample);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <Tabs Tabs={["Overview", "Props"]}>
      <Tab className="doc-tab doc-overview">
        <p>
          The Modal component provides a customizable, reusable modal overlay.
          It supports centered alignment, conditional rendering, and can close
          automatically when clicking outside the modal content. This component
          is ideal for dialogs, pop-ups, and notifications.
        </p>
        <pre>
          <div>
            <span className="code-title">JSX</span>
            <Button onClick={() => handleCopy()}>
              {isCopied ? "Copied!" : "Copy Code"}
            </Button>
          </div>
          <div>
            <code>{codeSample}</code>
          </div>
        </pre>
      </Tab>
      <Tab className="doc-tab doc-props">
        <Table rows={rows} columns={columns} />
      </Tab>
    </Tabs>
  );
};

export default ModalDoc;
