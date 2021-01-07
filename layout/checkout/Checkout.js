import React from "react";
import {
  Row,
  Column,
  Grid,
  ProgressIndicator,
  ProgressStep,
} from "carbon-components-react";

import Shipping from "./Shipping";
import Payment from "./Payment";
import Review from "./Review";

const Checkout = ({ index }) => {
  return (
    <Grid>
      <Row>
        <Column>
          <ProgressIndicator  spaceEqually currentIndex={index}>
            <ProgressStep
              current={index === 0}
              complete={index > 0}
              label="Shipping"
            />
            <ProgressStep
              current={index === 1}
              complete={index > 1}
              label="Payment"
            />
            <ProgressStep
              current={index === 2}
              complete={index > 2}
              label="Review"
            />
          </ProgressIndicator>
          <>
            {index === 0 && <Shipping />}
            {index === 1 && <Payment />}
            {index === 2 && <Review />}
          </>
        </Column>
      </Row>
    </Grid>
  );
};

export default Checkout;
