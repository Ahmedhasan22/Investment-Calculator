import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const TableData = ({ data, initial }) => {
  //   return console.log(" type of data: "+typeof data +" array type: "+typeArray.prototype.slice.call(argumentsArray);
  if (data) {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.year.toString()}</td>
          <td>{formatter.format(item.savingsEndOfYear.toString())}</td>
          <td>{formatter.format(item.yearlyInterest.toString())}</td>
          <td>
            {formatter.format(
              item.savingsEndOfYear -
                initial -
                item.yearlyContribution * item.year
            )}
          </td>
          <td>
            {formatter.format(initial + item.yearlyContribution * item.year)}
          </td>
        </tr>
      );
    });
  } else {
    return (
      <tr>
        <td colSpan="5">No data available</td>
      </tr>
    );
  }
};

export default TableData;
