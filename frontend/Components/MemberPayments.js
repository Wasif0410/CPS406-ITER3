// src/components/MemberPayments.js
import React, { useState } from 'react';
import SimpleTable from './SimpleTable';

function MemberPayments() {
    const [payments, setPayments] = useState([
        { id: 1, name: 'Member 1', payment: '$100' },
        { id: 2, name: 'Member 2', payment: '$150' }
    ]);
    const [name, setName] = useState('');
    const [payment, setPayment] = useState('');
    const [isVisible, setIsVisible] = useState(false); // State to control visibility

    const handleAddPayment = (event) => {
        event.preventDefault();
        const newPayment = {
            id: payments.length + 1,
            name,
            payment
        };
        setPayments([...payments, newPayment]);
        setName('');
        setPayment('');
    };

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Payments" : "Show Payments"}
            </button>
            {isVisible && (
                <div>
                    <form onSubmit={handleAddPayment}>
                        <input
                            type="text"
                            placeholder="Member Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Payment Amount"
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                            required
                        />
                        <button type="submit">Add Payment</button>
                    </form>
                    <SimpleTable data={payments} columns={[
                        { header: 'Name', accessor: 'name' },
                        { header: 'Payment', accessor: 'payment' }
                    ]} />
                </div>
            )}
        </div>
    );
}

export default MemberPayments;
