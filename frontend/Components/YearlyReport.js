// src/components/YearlyReport.js
import React, { useState } from 'react';
import SimpleTable from './SimpleTable';

function YearlyReport() {
    const [reports, setReports] = useState([
        { id: 1, month: 'January', profit: '$1000' },
        { id: 2, month: 'February', profit: '$1200' }
    ]);
    const [month, setMonth] = useState('');
    const [profit, setProfit] = useState('');
    const [isVisible, setIsVisible] = useState(false); // State to control visibility

    const handleAddReport = (event) => {
        event.preventDefault();
        const newReport = {
            id: reports.length + 1,
            month,
            profit
        };
        setReports([...reports, newReport]);
        setMonth('');
        setProfit('');
    };

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Yearly Report" : "Show Yearly Report"}
            </button>
            {isVisible && (
                <div>
                    <form onSubmit={handleAddReport}>
                        <input
                            type="text"
                            placeholder="Month"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Profit"
                            value={profit}
                            onChange={(e) => setProfit(e.target.value)}
                            required
                        />
                        <button type="submit">Add Report</button>
                    </form>
                    <SimpleTable data={reports} columns={[
                        { header: 'Month', accessor: 'month' },
                        { header: 'Profit', accessor: 'profit' }
                    ]} />
                </div>
            )}
        </div>
    );
}

export default YearlyReport;
