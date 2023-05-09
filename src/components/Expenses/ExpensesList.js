import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {  // logic rendering

    if (props.items.length === 0) {
        return <h1 className="expenses-list__fallback text-lg font-bold pb-6">Found no expenses.</h1>
    }

    return (
        <ul classname="expenses-list">
         {props.items.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}>
            </ExpenseItem>
            ))}
        </ul>

    );

}

export default ExpensesList;