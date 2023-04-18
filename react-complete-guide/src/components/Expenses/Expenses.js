import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const expenses = props.expenses.filter(expense => { 
    return expense.date.getFullYear().toString() === filteredYear
  });

  const changeExpensesFilterHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeExpensesFilter={changeExpensesFilterHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
