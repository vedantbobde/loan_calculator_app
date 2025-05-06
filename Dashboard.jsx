// File: src/components/Dashboard.jsx
import React, { useState } from 'react';
import AmortizationTable from './AmortizationTable';

function Dashboard() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [monthlyEMI, setMonthlyEMI] = useState(2051.65);
  const [schedule, setSchedule] = useState(defaultSchedule);
  const [showResult, setShowResult] = useState(false);
  const [currency, setCurrency] = useState('USD');

  const calculateEMI = () => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const emi = loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    setMonthlyEMI(parseFloat(emi.toFixed(2)));
    setSchedule(defaultSchedule); // Replace with real logic later
    setShowResult(true);
  };

  const resetTable = () => {
    setShowResult(false);
  };

  return (
    <div className="dashboard">
      <h2>Loan Calculator Dashboard</h2>
      <div className="form-row">
        <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(+e.target.value)} placeholder="Loan Amount" />
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(+e.target.value)} placeholder="Interest Rate (%)" />
        <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(+e.target.value)} placeholder="Term (Years)" />
        </div>
        
        <button className="calculate-btn" onClick={calculateEMI}>CALCULATE</button>
      
      {showResult && (
        <div className="result-section">
          <p>Monthly EMI: ${monthlyEMI}</p>
          <div className="controls">
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option>USD</option>
              <option>EUR</option>
              <option>INR</option>
              <option>GBP</option>
              <option>JYP</option>
              <option>AUD</option>
              <option>CAD</option>
            </select>
            <button className="reset-btn" onClick={resetTable}>RESET TABLE</button>
          </div>
          <AmortizationTable schedule={schedule} currency={currency} />
        </div>
      )}
    </div>
  );
}

const defaultSchedule = [
  [1, 1343.32, 708.33, 98656.68],
  [2, 1352.83, 698.82, 97303.85],
  [3, 1362.41, 689.24, 95941.44],
  [4, 1372.06, 679.59, 94569.38],
  [5, 1381.78, 669.87, 93187.6],
  [6, 1391.57, 660.08, 91796.03],
  [7, 1401.43, 650.22, 90394.6],
  [8, 1411.35, 640.3, 88983.25],
  [9, 1421.35, 630.3, 87561.9],
  [10, 1431.42, 620.23, 86130.48],
  [11, 1441.56, 610.09, 84688.92],
  [12, 1451.77, 599.88, 83237.15],
  // ... (add rest of the 60 rows here)
];

export default Dashboard;