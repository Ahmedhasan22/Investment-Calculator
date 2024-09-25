import React from 'react';

const YearlySavings = (props) => {
    return (
        <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          type="number"
          id="yearly-contribution"
          name="yearlyContribution"
          value={props.value}
          onChange={props.onChange}
        />
      </p>
    );
};

export default YearlySavings;