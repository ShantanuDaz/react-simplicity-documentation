import { useState } from "react";
import { TypeWriter, Button } from "react-simplicity-lib";
const installCode = `npm i react-simplicity`;
const Welcome = () => {
  const [isCompleteHeading, setIsCompleteHeading] = useState(false);
  const [isCompleteMessage, setIsCompleteMessage] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(installCode);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <section id="welcome-section">
      <TypeWriter
        text="<Hi Developers/>"
        onEffectComplete={() => setIsCompleteHeading(true)}
      />

      <TypeWriter
        text="I have created this library to help you guys to create UI with simple and
        minimalistic code."
        baseSpeed={200}
        onEffectComplete={() => setIsCompleteMessage(true)}
      />

      {isCompleteHeading && isCompleteMessage && (
        <>
          <div id="install-message">
            <p>To get started please install it in your react app</p>
            <code>
              {installCode}
              <Button onClick={() => handleCopy()}>
                {isCopied ? "Copied!" : "Copy"}
              </Button>
            </code>
          </div>
        </>
      )}
    </section>
  );
};

export default Welcome;
