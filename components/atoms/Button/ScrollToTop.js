import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollToTopWrapper } from "./Button.style";
import PropTypes from "prop-types";
import colors from "../../../utils/colors";

const ScrollToTop = ({ onPress, iconColor, bgColor }) => {
  return (
    <ScrollToTopWrapper onPress={onPress} bgColor={bgColor}>
      <AntDesign name="arrowup" size={20} color={iconColor} />
    </ScrollToTopWrapper>
  );
};

ScrollToTop.defaultProps = {
  iconColor: colors.white[900],
  bgColor: colors.primary[900],
};

ScrollToTop.propTypes = {
  onPress: PropTypes.func,
  iconColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default ScrollToTop;
