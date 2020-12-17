import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const PageHeader = ({ title }) => {
  return (
    <Grid narrow>
      <Row>
        <Column lg={12}>
          <h1>{title}</h1>
        </Column>
      </Row>
    </Grid>
  );
};

export default PageHeader;
