import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul>
      <li>
        <Link to="/">Event</Link>
      </li>
      <li>
        <Link to="/teams">Teams</Link>
      </li>
      <li>
        <Link to="/analytics">Analytics</Link>
      </li>
      <li>
        <Link to="/result">Results</Link>
      </li>
    </ul>
  );
}
