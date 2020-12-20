import React from "react";
import { ContentSwitcher, Switch } from "carbon-components-react";
import { sectionsStyle } from "./styles";

const PageSections = ({
  sections,
  selectedSectionIndex,
  onSectionClick,
  windowSize,
  children,
}) => {
  return (
    <>
      <div style={{ width: "100%",maxHeight: windowSize.height >= 1024 ? '70vh' : '80vh' , overflowY: "auto" }}>
        {children}
      </div>
      <ContentSwitcher
        style={sectionsStyle(null,windowSize)}
        selectedIndex={selectedSectionIndex}
        type="container"
      >
        {sections.map((s, i) => (
          <Switch
            style={{ width: `${100 / sections.length}%` }}
            key={s.name}
            name={s.name}
            text={s.name}
            onClick={() => onSectionClick(s.path)}
          ></Switch>
        ))}
      </ContentSwitcher>
    </>
  );
};

export default PageSections;
