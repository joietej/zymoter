import React from "react";
import { ContentSwitcher, Switch } from "carbon-components-react";
import { sectionsContentStyle, sectionsStyle } from "./styles";

const PageSections = ({
  sections,
  selectedSectionIndex,
  onSectionClick,
  windowSize,
  children,
}) => {
  return (
    <>
      <div style={sectionsContentStyle(null, windowSize)}>{children}</div>
      <ContentSwitcher
        style={sectionsStyle(null, windowSize)}
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
