import React from "react";
import {
  Row,
  Column,
  Grid,
  ProgressIndicator,
  ProgressStep,
} from "carbon-components-react";
import Customer from "./Customer";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Review from "./Review";

const Checkout = ({ index }) => {
  return (
    <Grid>
      <Row>
        <Column>
          <ProgressIndicator spaceEqually currentIndex={index}>
            <ProgressStep
              current={index === 0}
              complete={index > 0}
              label="Customer"
            />
            <ProgressStep
              current={index === 1}
              complete={index > 1}
              label="Shipping"
            />
            <ProgressStep
              current={index === 2}
              complete={index > 2}
              label="Payment"
            />
            <ProgressStep
              current={index === 3}
              complete={index > 3}
              label="Review"
            />
          </ProgressIndicator>
          <>
            {index === 0 && <Customer />}
            {index === 1 && <Shipping />}
            {index === 2 && <Payment />}
            {index === 3 && <Review />}
          </>
        </Column>
      </Row>
    </Grid>
  );
};

export default Checkout;
