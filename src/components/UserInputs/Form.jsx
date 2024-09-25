import React, { useState } from "react";
import CurrentSavings from "./CurrentSavings";
import YearlySavings from "./YearlySavings";
import ExpectedInterest from "./ExpectedInterest";
import Duration from "./Duration";
import classes from "./Form.module.css";
const Form = (props) => {
  // create a new instance of Form instance with default values
  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlyContribution, setYearlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    // If inputs are empty, show alert and stop submission
    if (
      currentSavings.trim() === "" ||
      yearlyContribution.trim() === "" ||
      expectedReturn.trim() === "" ||
      duration.trim() === ""
    ) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const userInput = {
      "current-savings": parseFloat(currentSavings) || 0,
      "yearly-contribution": parseFloat(yearlyContribution) || 0,
      "expected-return": parseFloat(expectedReturn) || 0,
      duration: parseInt(duration) || 0
    };

    // Call the parent component's onSubmit function with the calculated values
    props.onSubmit(userInput);

    // Reset form inputs after submission
    resetHandler();
  };

  const changeHandler = (e) => {
    if (e.target.name == "currentSavings") {
      setCurrentSavings(e.target.value);
    } else if (e.target.name == "yearlyContribution") {
      setYearlyContribution(e.target.value);
    } else if (e.target.name == "expectedReturn") {
      setExpectedReturn(e.target.value);
    } else if (e.target.name == "duration") {
      setDuration(e.target.value);
    }
  };

  const resetHandler = (e) => {
    // Reset form inputs
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
  };

  // Render the form with input fields and submit button
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes["input-group"]}>
          <CurrentSavings value={currentSavings} onChange={changeHandler} />
          <YearlySavings value={yearlyContribution} onChange={changeHandler} />
        </div>
        <div className={classes["input-group"]}>
          <ExpectedInterest value={expectedReturn} onChange={changeHandler} />
          <Duration value={duration} onChange={changeHandler} />
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default Form;
