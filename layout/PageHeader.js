import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const PageHeader = ({ title }) => {
  return (
    <Grid narrow>
      <Row>
        <Column sm={4} md={8} lg={12}>
          <h1>{title}</h1>
        </Column>
      </Row>
    </Grid>
  );
};

export default PageHeader;
