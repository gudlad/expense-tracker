import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // merge all the states into one state using object approach
  // const [userInput,setUserInput]=useState({
  //   title:'',
  //   amount:'',
  //   date:''
  // });

  const titleChangeHandler = (event) => {
    // event object
    setTitle(event.target.value);

    //? 2nd approach
    // setUserInput({
    //   ...userInput,  // spread operator
    //   title:event.target.value
    // });

    //? 3rd approach
    // setUserInput((prevState)=>{  // passing function as argument to setUserInput
    //   return {
    //     ...prevState,
    //     title:event.target.value
    //   }
    // });
  };

  const amountChangeHandler = (event) => {
    // event object
    setAmount(event.target.value);

    //? 2nd approach
    // setUserInput({
    //   ...userInput,  // spread operator
    //   amount:event.target.value
    // });

    //? 3rd approach
    // setUserInput((prevState)=>{  // passing function as argument to setUserInput
    //   return {
    //     ...prevState,
    //     amount:event.target.value
    //   }
    // });
  };

  const dateChangeHandler = (event) => {
    // event object
    setDate(event.target.value);

    //? 2nd approach
    // setUserInput({
    //   ...userInput,  // spread operator
    //   date:event.target.value
    // });

    //? 3rd approach
    // setUserInput((prevState)=>{  // passing function as argument to setUserInput
    //   return {
    //     ...prevState,
    //     date:event.target.value
    //   }
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={title} onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            onChange={dateChangeHandler}
            type="date"
            min="2022-01-01"
            max="2023-01-01"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
