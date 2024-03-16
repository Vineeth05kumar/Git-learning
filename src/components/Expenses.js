import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  const {expenses}= props;
   
  return (
    <div className="expenses">
      {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}
