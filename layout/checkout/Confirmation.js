import React from "react";

const Confirmation = ({ confirmedOrder }) => {
  return (
    <div>
      <h4>
        Thank you for your purchase, {confirmedOrder.customer.firstname}{" "}
        {confirmedOrder.customer.lastname}!
      </h4>
      <p>
        <span>Order ref:</span> {confirmedOrder.customer_reference}
      </p>
    </div>
  );
};

export default Confirmation;
