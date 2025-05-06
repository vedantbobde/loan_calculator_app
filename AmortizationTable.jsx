// File: src/components/AmortizationTable.jsx
import React from 'react';

function AmortizationTable({ schedule, currency }) {
  return (
    <div className="amortization-table-container">
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(([month, principal, interest, balance]) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{principal.toFixed(2)} {currency}</td>
              <td>{interest.toFixed(2)} {currency}</td>
              <td>{balance.toFixed(2)} {currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AmortizationTable;