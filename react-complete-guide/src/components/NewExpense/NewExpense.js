import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseFormVisible, setExpenseFormVisible] = useState(false);

  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    setExpenseFormVisible(false);
  };

  const clickNewExpenseHandler = () => {
    setExpenseFormVisible(true);
  };

  const cancelExpenseDataHandler = () => {
    setExpenseFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!expenseFormVisible && (
        <button type="submit" onClick={clickNewExpenseHandler}>
          Add New Expense
        </button>
      )}
      
      {expenseFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpense={cancelExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
