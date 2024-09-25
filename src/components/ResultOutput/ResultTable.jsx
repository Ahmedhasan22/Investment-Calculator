import React from "react";
import TableData from "./TableData";
import classes from "./ResultTable.module.css";

const ResultTable = (props) => {
  return (
    <table className={classes.result}>
      {props.data && (
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
      )}
      <tbody>
        <TableData data={props.data} initial={props.initialInvestment} />
      </tbody>
    </table>
  );
};

export default ResultTable;
