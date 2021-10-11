import React from "react";
import Text from "./Text";
import { colors, typography } from "./../../../utils";
import PropTypes from "prop-types";

const DiscountText = ({ value, ...rest }) => {
  return (
    <Text
      color={colors.primary[700]}
      weight={typography.fontWeights.medium}
      {...rest}
    >
      {`${value}% OFF `}
    </Text>
  );
};

DiscountText.defaultProps = {
  value: 0,
};

DiscountText.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DiscountText;
