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
  value: 0,
  randomValue: 0,
};

Price.propTypes = {
  value: PropTypes.number,
  randomValue: PropTypes.number,
};

export default PriceWithDiscount;
