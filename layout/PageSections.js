import React from "react";
import { ContentSwitcher, Switch } from "carbon-components-react";
import { sectionsStyle } from "./styles";

const PageSections = ({
  sections,
  selectedSectionIndex,
  onSectionClick,
  children,
}) => {
  return (
    <div style={{width:'100%'}}>
      <div style={{ height: "75vh", width: "100%", overflowY:'auto' }}>{children}</div>
      <ContentSwitcher
        style={sectionsStyle()}
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
    </div>
  );
};

export default PageSections;
