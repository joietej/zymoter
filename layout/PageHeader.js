import React from "react";
import { Grid, Row, Column } from "carbon-components-react";

const PageHeader = ({ title }) => {
  return (
    <Grid narrow>
      <Row style={{marginLeft:'1rem'}}>
        <h1>{title}</h1>
      </Row>
    </Grid>
  );
};

export default PageHeader;
