import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {

    return (
    <div>
        <ExpenseDate date = {props.date}> </ExpenseDate>
        <div>
        <h2>{props.title}</h2>
        </div>
        <div>{props.amount}</div>
    </div>
    );
}

export default ExpenseItem;
