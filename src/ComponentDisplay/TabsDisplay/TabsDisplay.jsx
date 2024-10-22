import { Tabs, Tab } from "react-simplicity-lib";
import {
  DocComponentDocumentation,
  DocComponentDisplay,
  DocHeader,
  DocTemplate,
} from "../DocTemplate";
import TabsDoc from "./TabsDoc";
import "./TabsDisplay.css";
const TabsDisplay = ({ isOpen, isClosed = () => {} }) => {
  return (
    <>
      <Tabs Tabs={["Happy", "Sad", "Love"]}>
        <Tab className="tab-display">😊</Tab>
        <Tab className="tab-display">😔</Tab>
        <Tab className="tab-display">❤️</Tab>
      </Tabs>
      <DocTemplate isOpen={isOpen}>
        <DocHeader title="Tabs" onClick={() => isClosed()} />
        <DocComponentDisplay>
          <TabsDisplay />
        </DocComponentDisplay>
        <DocComponentDocumentation>
          <TabsDoc />
        </DocComponentDocumentation>
      </DocTemplate>
    </>
  );
};

export default TabsDisplay;
