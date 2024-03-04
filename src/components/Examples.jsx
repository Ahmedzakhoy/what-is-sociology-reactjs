import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
      </div>
    );
  }

  return (
    <Section title="Subfields" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "political"}
              onClick={() => handleSelect("political")}
            >
              political
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "education"}
              onClick={() => handleSelect("education")}
            >
              education
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "medical"}
              onClick={() => handleSelect("medical")}
            >
              medical
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "criminology"}
              onClick={() => handleSelect("criminology")}
            >
              criminology
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
