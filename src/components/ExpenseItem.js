import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props) {
const [price,setTitle] = useState(props.price);

  const deleteHandler=()=>{
    setTitle("100");
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${price}</div>
        <button onClick={deleteHandler}>ChangePrice</button>
      </div>
      <div className="expense-item__location">{props.location}</div>
      
    </div>
  );
}

export default ExpenseItem;