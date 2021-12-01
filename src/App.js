import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build/index.js";
import {BrowserRouter, Link, Route} from "react-router-dom";
import A9 from "../src/a9";
import A9Build from "../src/a9/Build";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
<BrowserRouter>

  <div className="container">
    <Link to="/a8/practice">A8</Link> |
    <Link to="/a9/practice">A9</Link>

    <Route path="/a6/hello" exact={true}>
      <HelloWorld/>
    </Route>
    <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
      <Practice/>
    </Route>
    <Route path="/a8/build" exact={true}>
      <Build/>
    </Route>
    <Route path="/a9/">
      <A9/>
    </Route>
    <Route path="/a9/build" exact={true}>
      <A9Build/>
    </Route>
  </div>
</BrowserRouter>
  );
}

export default App;
