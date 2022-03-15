import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import logo from "./img/fa.png";
import DATA from "./.data.js";

function App() {
  const { data } = DATA;
  console.log("hey", data);
  <Route path="/" component={HomeScreen} exact></Route>;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row1">
          <div>
            <Link className="brand" to="/">
              <img className="small" src={logo} alt="logo"></img>
            </Link>
          </div>
        </header>
        <main>
          {/* <Route path="/" component={HomeScreen} exact></Route> */}
          <HomeScreen />
          {/* {data.map((d) => (
            <ul>{d.month}</ul> */}
          {/* ))} */}
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
