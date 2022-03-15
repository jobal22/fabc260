import React from "react";
import { Link } from "react-router-dom";
import DATA from "../.data.js";

export default function HomeScreen() {
  const { data } = DATA;
  console.log(data);
  return (
    <div className="btgrid">
      {data.map((d) => (
        <div className="mem" key={d.id}>
          <div className="front">
            <h1 className="ref">{d.ref}</h1>
            <p className="ref refDate">{d.date}</p>
          </div>
          <p className="vers">{d.vers}</p>
        </div>
      ))}
    </div>
  );
}
