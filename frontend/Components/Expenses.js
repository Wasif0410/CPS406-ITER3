// src/components/Expenses.js
import React, { useState, useEffect } from 'react';
import SimpleTable from './SimpleTable';

function Expenses() {
    const [expenses, setExpenses] = useState([]);
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    // Fetch expenses on component mount
    useEffect(() => {
        fetch('http://localhost:3000/expenses')
            .then(response => response.json())
            .then(data => setExpenses(data))
            .catch(err => console.error('Error fetching expenses:', err));
    }, []);

    const handleAddExpense = (event) => {
        event.preventDefault();
        const newExpense = {
            category,
            amount
        };
        fetch('http://localhost:3000/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newExpense)
        })
        .then(response => response.json())
        .then(data => {
            setExpenses([...expenses, data]); // Add the new expense to the local state
            setCategory('');
            setAmount('');
        })
        .catch(err => console.error('Error posting expense:', err));
    };

    const handleDeleteExpense = (id) => {
        fetch(`http://localhost:3000/expenses/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setExpenses(expenses.filter(expense => expense.id !== id)); // Update local state
        })
        .catch(err => console.error('Error deleting expense:', err));
    };

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Expenses" : "Show Expenses"}
            </button>
            {isVisible && (
                <div>
                    <form onSubmit={handleAddExpense}>
                        <input
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                        <button type="submit">Add Expense</button>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map(expense => (
                                <tr key={expense.id}>
                                    <td>{expense.category}</td>
                                    <td>{expense.amount}</td>
                                    <td>
                                        <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Expenses;
