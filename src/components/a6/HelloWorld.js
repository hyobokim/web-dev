import React from "react";
import {Link} from "react-router-dom";
import History from "../History";

const HelloWorld = () => {
  return (
      <>
        <h1>Hello World!</h1>
        <Link to="/a8/practice">
          Practice
        </Link> |
        <Link to="/a8/build">
          Build
        </Link>
        <History/>
      </>
  )
}

export default HelloWorld;