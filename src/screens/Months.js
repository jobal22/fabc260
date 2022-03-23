import React from "react";
import { Link } from "react-router-dom";
import MORE from "../.more.js";

export default function Months() {
  const { mon } = MORE;
  console.log(mon);
  return (
    <div>
      <div className="monthHeader">
        <h2>Welcome to FABC260's memory verses</h2>
        <p>
          Click on the current month and scroll through the weekly memory verse.
        </p>
      </div>
      <div className="btgrid">
        {mon.map((m) => (
          <div className="mem">
            <div className="front2">
              <Link
                style={{ textDecoration: "none", color: "#2c446c" }}
                key={m.id}
                to={`/${m.id}`}
              >
                <h1 className="ref">{m.id}</h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="mem" key={r.id}>
  <div className="front">
    <h1 className="ref">{r.ref}</h1>
    <p className="ref refDate">{r.date}</p>
  </div>
  <p className="vers">{r.vers}</p>
</div>; */
}
