// import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Vers from "./screens/Vers";
import Months from "./screens/Months";
import logo from "./img/fa.png";
import DATA from "./.data.js";

import React, { Component } from "react";

export default class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route path="/" component={Months} exact></Route>
        <Route path="/:monthId" component={Vers}></Route>
      </>
    );
  }
  render() {
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
          <main className="">{this.renderMainRoutes()}</main>
          <footer className="row center">All rights reserved</footer>
        </div>
      </BrowserRouter>
    );
  }
}

// function App() {
//   <Route path="/" component={HomeScreen} exact></Route>;
//   <Route path="/:monthID" component={Months}></Route>;

//   return (
//     <BrowserRouter>
//       <div className="grid-container">
//         <header className="row1">
//           <div>
//             <Link className="brand" to="/">
//               <img className="small" src={logo} alt="logo"></img>
//             </Link>
//           </div>
//         </header>
//         <main>
//           {/* <Route path="/" component={HomeScreen} exact></Route> */}
//           <HomeScreen />
//           {/* {data.map((d) => (
//             <ul>{d.month}</ul> */}
//           {/* ))} */}
//         </main>
//         <footer className="row center">All rights reserved</footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
