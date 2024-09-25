import React from 'react';

const CurrentSavings = (props) => {
    return (
        <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input
          type="number"
          id="current-savings"
          name="currentSavings"
          value={props.value}
          onChange={props.onChange}
        />
      </p>
    );
};

export default CurrentSavings;