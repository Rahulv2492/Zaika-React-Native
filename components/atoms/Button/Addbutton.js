import React from "react";
import { Text, PlusIcon, AddButtonWrapper } from "./Button.style";
import PropTypes from "prop-types";

const AddButton = ({ text, setCount }) => {
  return (
    <AddButtonWrapper onPress={() => setCount()}>
      <Text>{text}</Text>
      <PlusIcon name="plus" />
    </AddButtonWrapper>
  );
};

AddButton.defaultProps = {
  text: "ADD",
};

AddButton.propTypes = {
  text: PropTypes.string,
};

export default AddButton;
