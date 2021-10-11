import React from "react";
import Text from "./../Text";
import { colors } from "./../../../utils";
import { ButtonWrapper } from "./Button.style";
import PropTypes from "prop-types";

const Button = ({ onPress, value, bgColor, color }) => {
  return (
    <ButtonWrapper onPress={onPress} bgColor={bgColor}>
      <Text size={"sm"} color={color || colors.white[900]}>
        {value}
      </Text>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  onPress: () => {},
  value: "",
};

Button.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.number,
    PropTypes.string,
  ]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
