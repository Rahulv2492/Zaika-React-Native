import React from "react";
import { RateWithVotingWrapper } from "./RateWithVoting.style";
import PropTypes from "prop-types";
import { StarRating, Text } from "./../../atoms";
import { colors } from "./../../../utils";

const RateWithVoting = ({ ratingCount, votes, ...rest }) => {
  return (
    <RateWithVotingWrapper {...rest}>
      <StarRating count={ratingCount} />
      <Text size={"md"} color={colors.gray[500]} style={{ marginLeft: 10 }}>
        {`${votes} votes`}
      </Text>
    </RateWithVotingWrapper>
  );
};

RateWithVoting.defaultProps = {
  votes: 0,
};

RateWithVoting.propTypes = {
  ratingCount: PropTypes.number,
  votes: PropTypes.number,
};

export default RateWithVoting;
