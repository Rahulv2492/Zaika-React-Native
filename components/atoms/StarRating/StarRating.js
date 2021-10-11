import React from "react";
import { Entypo } from "@expo/vector-icons";
import { RatingWrapper } from "./StarRating.style";
import PropTypes from "prop-types";
import colors from "./../../../utils/colors";

const StarRating = ({ count }) => {
  const fullRateing = 5;

  return (
    <RatingWrapper>
      {[...Array(count).keys()].map((item) => (
        <Entypo name="star" color="#F6BE00" size={20} key={`rating-${item}`} />
      ))}
      {[...Array(fullRateing - count).keys()].map((item) => (
        <Entypo
          name="star"
          color={colors.gray[400]}
          size={20}
          key={`rating-${item}`}
        />
      ))}
    </RatingWrapper>
  );
};
StarRating.defaultProps = {
  count: 0,
};

StarRating.propTypes = {
  count: PropTypes.number,
};

export default StarRating;
