import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";
import Movies from "./Movies";

const Practice = () => {
  return (
      <>
        <h1>Practice2</h1>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <TodoList/>
        <Link to="/a6/hello">
          Hello
        </Link> |
        <Link to="/a9/build">
          Twitter
        </Link>
        <Movies/>
        <APIExamples/>
        <ReduxExamples/>
      </>
  )
};

export default Practice;