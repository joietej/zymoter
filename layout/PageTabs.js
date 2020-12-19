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
    <Grid style={{ paddingRight: "0", paddingLeft: "0", width: "100%" }}>
      <Row style={{marginLeft:'1rem'}}>
        {tabs.length > 0 && selectedTabIndex > -1 ? (
          <Tabs
            style={tabsStyle()}
            selected={selectedTabIndex}
            type="container"
          >
            {tabs.map((t, i) => (
              <Tab
                style={{width:`${100/tabs.length}%`}}
                key={t.name}
                label={t.name}
                onClick={() => router.push(route.path + t.path)}
              >
                {i === selectedTabIndex ? children : <> </>}
              </Tab>
            ))}
          </Tabs>
        ) : (
          children
        )}
      </Row>
    </Grid>
  );
};

export default PageTabs;
