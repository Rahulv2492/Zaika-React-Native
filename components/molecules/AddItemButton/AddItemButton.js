import React, { useState } from "react";
import PropTypes from "prop-types";

import { Addbutton, CounterButton } from "./../../atoms";

const AddItemButton = ({ text, handleCounter, count }) => {
  // const [count, setCount] = useState(0);
  return (
    <>
      {count ? (
        <CounterButton
          count={count}
          setCount={(count) => handleCounter(count)}
        />
      ) : (
        <Addbutton text={text} setCount={() => handleCounter(count + 1)} />
      )}
    </>
  );
};

AddItemButton.defaultProps = {
  text: "ADD",
  count: 0,
};

AddItemButton.propTypes = {
  text: PropTypes.string,
  handleCounter: PropTypes.func.isRequired,
  count: PropTypes.number,
};

export default AddItemButton;
