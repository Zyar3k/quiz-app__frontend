import React from "react";

const ResultTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>03</td>
            <td>88</td>
            <td>Passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
