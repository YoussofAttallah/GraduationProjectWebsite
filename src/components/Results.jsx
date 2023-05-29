import { Link, useLocation } from "react-router-dom";
import "./Results.css";
import React, { useState } from "react";


const Results = () => {
  const location = useLocation();
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    console.log(Object.keys(location.state.info));
  });
  return (
    <div className="Results">
      {/* <h1>Results</h1> */}
      <table className="table">
        <tr>
          <th>Similarity</th>
          <th>Academics</th>
          <th>Passion</th>
          <th>Major</th>
          <th>Phone Number</th>
        </tr>
        {Object.keys(location.state.info["Users"]).map((user1, key) => {
          return (
            <tr key={key}>
              <td>{location.state.info["Users"][user1]}</td>
              <td>{location.state.info["Academics"][user1]}</td>
              <td>{location.state.info["Passion"][user1]}</td>
              <td>{location.state.info["Major"][user1]}</td>
              <td>{location.state.info["Phone Number"][user1]}</td>
            </tr>
          );
        })}
      </table>
      <ul>
        {/* <li>
          <Link to="/TestPage">TestPage</Link>
        </li>
        <li>
          <Link to="/SignIn">SignIn</Link>
        </li> */}
      </ul>
    </div>
  );
};
export default Results;
