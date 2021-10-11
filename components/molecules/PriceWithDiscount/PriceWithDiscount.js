import React from "react";
import { Price, DiscountText } from "../../atoms";
import { PriceWithDiscountWrapper } from "./PriceWithDiscount.style";
import PropTypes from "prop-types";

const PriceWithDiscount = ({ value, randomValue }) => {
  const discountAmount = value - randomValue;
  const discountPercent = (((value - discountAmount) / value) * 100).toFixed(0);
  return (
    <PriceWithDiscountWrapper>
      <Price lineThrough={true} value={value} />
      <Price style={{ marginLeft: 5 }} value={discountAmount} />
      <DiscountText value={discountPercent} style={{ marginLeft: 10 }} />
    </PriceWithDiscountWrapper>
  );
};

Price.defaultProps = {
  randomValue: 0,
};
Price.propTypes = {
  value: PropTypes.number.isRequired,
  randomValue: PropTypes.number,
};

export default PriceWithDiscount;
