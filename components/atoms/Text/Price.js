import React from "react";
import PropTypes from "prop-types";
import { PriceText } from "./Text.style";

const Price = ({ value, lineThrough, ...rest }) => {
  return (
    <PriceText lineThrough={lineThrough} {...rest}>{`₹${value} `}</PriceText>
  );
};

Price.defaultProps = {
  value: 0,
  lineThrough: false,
};

Price.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineThrough: PropTypes.bool,
};

export default Price;
