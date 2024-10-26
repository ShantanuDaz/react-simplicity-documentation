import { Tabs, Tab } from "react-simplicity-lib";
import {
  DocComponentDocumentation,
  DocComponentDisplay,
  DocHeader,
  DocTemplate,
} from "../DocTemplate";
import TabsDoc from "./TabsDoc";
import "./TabsDisplay.css";
import { useEffect, useState } from "react";

const TabsNames = ["Happy", "Sad", "Love"];
const TabsDisplay = ({ isOpen, isClosed = () => {}, isAutomatic = true }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (!isAutomatic) {
      return;
    }
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % TabsNames.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Tabs
        Tabs={TabsNames}
        value={counter}
        isNativeMomentDisable={isAutomatic}
      >
        <Tab className="tab-display">😊</Tab>
        <Tab className="tab-display">😢</Tab>
        <Tab className="tab-display">💙</Tab>
      </Tabs>
      <DocTemplate isOpen={isOpen}>
        <DocHeader title="Tabs" onClick={() => isClosed()} />
        <DocComponentDisplay style={{ height: "40vh" }}>
          <TabsDisplay isAutomatic={false} />
        </DocComponentDisplay>
        <DocComponentDocumentation>
          <TabsDoc />
        </DocComponentDocumentation>
      </DocTemplate>
    </>
  );
};

export default TabsDisplay;
