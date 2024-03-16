
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpenses(props){
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random.toString(),
        };
       props.onReceiveData(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    )
}