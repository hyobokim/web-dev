import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build/index.js";
import {BrowserRouter, Route} from "react-router-dom";

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
    <Route path="/a6/hello" exact={true}>
      <HelloWorld/>
    </Route>
    <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
      <Practice/>
    </Route>
    <Route path="/a7/build" exact={true}>
      <Build/>
    </Route>
  </div>
</BrowserRouter>
  );
}

export default App;
