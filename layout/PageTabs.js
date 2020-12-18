import React from "react";
import { useRouter } from "next/router";
import { Grid, Row, Column, Tabs, Tab } from "carbon-components-react";
import { tabsStyle } from "./styles";

const PageTabs = ({ route, children }) => {
  const router = useRouter();
  const { tab } = router.query;
  const tabs = route?.sub || [];
  const selectedTabIndex = tabs.findIndex((r) => r.path === `/${tab}`);
  return (
    <Grid style={{ paddingRight: "0", paddingLeft: "0" }}>
      <Row>
        <Column lg={12}>
          {tabs.length > 0 ? (
            <Tabs
              style={tabsStyle()}
              selected={selectedTabIndex}
              type="container"
            >
              {tabs.map((t) => (
                <Tab
                  key={t.name}
                  label={t.name}
                  onClick={() => router.push(route.path + t.path)}
                >
                  {children}
                </Tab>
              ))}
            </Tabs>
          ) : (
            children
          )}
        </Column>
      </Row>
    </Grid>
  );
};

export default PageTabs;
