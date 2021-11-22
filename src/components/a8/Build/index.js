import React from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen";
import who from "../../../reducers/who"
import tweets from "../../../reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who});
const store = createStore(reducer);

const Build = () => {
  return (
        // <h1>Build</h1>
        // <Link to="/a7/practice">
        //   Practice
        // </Link> |
        // <Link to="/a6/hello">
        //   Hello
        // </Link>
        // <ExploreScreen/>
        //

        <Provider store={store}>
          <>
            <BrowserRouter>
              <Route path='/a8/twitter/explore'
                     exact={true} component={ExploreScreen}/>
              <Route path={["/", "/a8/build", "/a8/twitter/home"]}
                     exact={true} component={HomeScreen}/>
            </BrowserRouter>
          </>
        </Provider>
  );
}

export default Build;