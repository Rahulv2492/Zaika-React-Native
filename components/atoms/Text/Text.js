import React from "react";
import { CustomText } from "./Text.style";
import PropTypes from "prop-types";
import { typography } from "./../../../utils";

const Text = ({ value, children, size, ...rest }) => {
  return (
    <CustomText size={size} {...rest}>
      {children ? children : value}
    </CustomText>
  );
};

Text.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(typography.fontSizes)),
};
export default Text;
