// import React from "react";
// import { Link } from "react-router-dom";
// import DATA from "../.data.js";
// import propTypes from "prop-types";

// export default function Vers() {
//   const { data } = DATA;

//   console.log(data);
//   return (
// <div className="btgrid">
//   {data.map((d) => (
//     <div className="mem" key={d.id}>
//       <div className="front">
//         <h1 className="ref">{d.ref}</h1>
//         <p className="ref refDate">{d.date}</p>
//       </div>
//       <p className="vers">{d.vers}</p>
//     </div>
//   ))}
// </div>
//   );
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";
import DATA from "../.data.js";
import PropTypes from "prop-types";

export default class Vers extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };
  render() {
    const monthId = this.props.match.params.monthId;
    const { data } = DATA;
    const findMonth = data.map((m) => m.month);
    const findRef = data.filter((d) => d.month == monthId);
    // console.log(findRef);
    return (
      <div>
        <div className="monthHeader">
          <h2>Welcome to FABC260's memory verses</h2>
          <p>Click on a Bible reference in order to see the memory verse.</p>
        </div>
        <div className="btgrid">
          {findRef.map((r) => (
            <div className="mem" key={r.id}>
              <div className="front">
                <h1 className="ref">{r.ref}</h1>
                <p className="ref refDate">{r.date}</p>
              </div>
              <p className="vers">{r.vers}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
