import React from "react";
import { Link } from "react-router-dom";
import MORE from "../.more.js";

export default function Months() {
  const { mon } = MORE;
  console.log(mon);
  return (
    <div className="btgrid">
      {mon.map((m) => (
        <div className="mem">
          <div className="front2">
            <Link key={m.id} to={`/${m.id}`}>
              <h1 className="ref">{m.id}</h1>
            </Link>
          </div>
        </div>
      ))}
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
