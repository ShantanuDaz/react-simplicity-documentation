import { Tabs, Tab, Button, Table } from "react-simplicity-lib";
import { useState } from "react";
const codeSample = `import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import "./Tabs.css"; // Ensure this CSS file handles the styling

const TabsNames = ["Happy", "Sad", "Love"];
function App() {
  return (
    <Tabs Tabs={TabsNames}>
      <Tab className="tab-display">😊</Tab>
      <Tab className="tab-display">😢</Tab>
      <Tab className="tab-display">💙</Tab>
    </Tabs>
  );
}

export default App;

`;
const columns = [
  { name: "Prop Name", field: "name" },
  { name: "Default Value", field: "defaultValue" },
  { name: "Allowed Values", field: "values" },
  { name: "Function", field: "function" },
];

const rows = [
  {
    name: "Tabs",
    defaultValue: "[]",
    values: ["Array of Strings"],
    function: "Defines the tab names displayed in the tab bar.",
  },
  {
    name: "children",
    defaultValue: "undefined",
    values: ["React Nodes"],
    function: "Represents the tab content to be displayed under each tab.",
  },
  {
    name: "color",
    defaultValue: '"#cbdce1"',
    values: ["String (CSS Color)"],
    function: "Sets the active tab's highlight color.",
  },
  {
    name: "style",
    defaultValue: "{}",
    values: ["CSS Object"],
    function: "Applies inline styling to the Tabs container.",
  },
  {
    name: "className",
    defaultValue: '""',
    values: ["String"],
    function: "Adds custom CSS classes to the Tabs container.",
  },
  {
    name: "onTabChange",
    defaultValue: "() => {}",
    values: ["Function"],
    function: "Callback invoked when a tab is changed.",
  },
  {
    name: "value",
    defaultValue: "0",
    values: ["Number"],
    function: "Sets the initial active tab.",
  },
  {
    name: "isNativeMomentDisable",
    defaultValue: "false",
    values: ["Boolean"],
    function:
      "Disables native tab switching when set to true. This means clicking a tab won't change its position; instead, you’ll need to update the value prop with a new index to switch tabs.",
  },
];

const TabsDoc = () => {
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
          The Tabs component allows you to create a tabbed interface where
          multiple sections of content are grouped under different tabs. The Tab
          component represents each section of content that corresponds to a tab
          in the Tabs container. This setup provides a seamless way to switch
          between content views.
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

export default TabsDoc;
