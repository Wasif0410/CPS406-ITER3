// src/components/BacklogPage.js
import React from 'react';
import Header from './Header';
import Expenses from './Expenses';
import MemberPayments from './MemberPayments';
import YearlyReport from './YearlyReport'; // Ensure this is imported
import styles from '../styles/BacklogPage.module.css';

function BacklogPage() {
  return (
    <div className={styles.container}>
      <Header title="Product Backlog Rev 2.0" />
      <div className={styles.dropdownsContainer}>
        <MemberPayments />
        <Expenses />
        <YearlyReport />  // Use the interactive YearlyReport component
      </div>
    </div>
  );
}

export default BacklogPage;
