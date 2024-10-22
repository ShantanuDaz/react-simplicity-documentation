import { Tabs, Tab, Button, Table } from "react-simplicity-lib";
import { useState } from "react";
const codeSample = `import React from "react";
import Table from "./Table";

const columns = [
  { name: "ID", field: "id" },
  { name: "Name", field: "name" },
  { name: "Age", field: "age" },
];

const rows = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Table Example</h1>
      <Table 
        columns={columns} 
        rows={rows} 
        className="custom-table" 
        style={{ border: "1px solid black", width: "50%", margin: "auto" }} 
      />
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
    name: "columns",
    defaultValue: '[ { name: "", field: "" } ]',
    values: "Array of Objects",
    function: "Defines the table's column headers and associated row fields.",
  },
  {
    name: "rows",
    defaultValue: '[ { columnName: "value" } ]',
    values: "Array of Objects",
    function: "Contains the data to be displayed in the table.",
  },
  {
    name: "className",
    defaultValue: '""',
    values: "String",
    function: "Adds custom CSS classes to the table.",
  },
  {
    name: "style",
    defaultValue: "{}",
    values: "CSS Object",
    function: "Inline styles to customize the table's appearance.",
  },
];

const TableDoc = () => {
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
          The Table component is a reusable table that dynamically renders based
          on the provided column and row data. It is customizable through CSS
          classes and inline styles, making it suitable for various display
          purposes like data listings or comparison tables.
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

export default TableDoc;
