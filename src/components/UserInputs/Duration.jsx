import React from 'react';

const Duration = (props) => {
    return (
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={props.value}
            onChange={props.onChange}
          />
        </p>
    );
};

export default Duration;