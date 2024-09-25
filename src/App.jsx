import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/UserInputs/Form";
import Header from "./components/Header/Header";
import ResultTable from "./components/ResultOutput/ResultTable";

function App() {
  const [yearlyData, setYearlyData] = useState(); // per-year results
  let initialInvestment = 0;
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const newYearlyData = []; // per-year results

    let currentSavings = (initialInvestment = +userInput["current-savings"]); // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    let totalInterest = 0;
    let i = 0;
    const duration = +userInput["duration"];
    // The below code calculates yearly results (total savings, interest etc)
    for (i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      newYearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest
      });
    }
    setYearlyData(newYearlyData); // update the state with the new yearlyData
    // do something with yearlyData ...
  };

  return (
    <>
      <Header />
      <Form onSubmit={calculateHandler} />
      <ResultTable data={yearlyData} initialInvestment={initialInvestment} />
    </>
  );
}

export default App;
