import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
  const message = useSelector((state) => state.hello.message);
  return(
      <h2>{message}</h2>
  );
};

export default HelloReduxExampleComponent;
