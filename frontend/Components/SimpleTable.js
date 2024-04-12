// src/components/SimpleTable.js
import React from 'react';

function SimpleTable({ data, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => <th key={index}>{col.header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{item[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SimpleTable;
