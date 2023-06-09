import React, { useState } from 'react';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card.js";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(
    expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
      <div>
        <Card className="expenses">

          {/* 2 way binding */}
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilteredYear={filteredChangeHandler}>
          </ExpensesFilter>

          {/* for rendering the expense items*/}
          <ExpensesList items={filteredExpenses}></ExpensesList>


          {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}


        </Card>
      </div>
    );
  }

  export default Expenses;