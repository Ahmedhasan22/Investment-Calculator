import React from 'react';

const ExpectedInterest = (props) => {
    return (
        <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input
          type="number"
          id="expected-return"
          name="expectedReturn"
          value={props.value}
          onChange={props.onChange}
        />
      </p>
    );
};

export default ExpectedInterest;