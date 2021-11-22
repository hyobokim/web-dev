import React from "react";
import HelloReduxExampleComponent
  from "./HelloReduxExampleComponent";
import hello from "../reducers/hello";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import todos from "../reducers/todos";
import Todos from "./Todos";

const reducers = combineReducers({hello, todos});
const store = createStore(reducers);

const ReduxExamples = () => {
  return(
      <Provider store={store}>
        <div>
          <h2>Redux Examples</h2>
          <Todos/>
          <HelloReduxExampleComponent/>
        </div>
      </Provider>
  );
};
export default ReduxExamples;
