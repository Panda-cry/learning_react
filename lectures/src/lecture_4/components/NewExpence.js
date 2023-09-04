import ExpenceForm from "./ExpenseFrom";
function NewExpence(props){
    function saveExpenseHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.addExpense(expenseData)
    }
    return (
        <div class="container">
        <ExpenceForm onSaveExpenseData={saveExpenseHandler}></ExpenceForm>
        </div>
    )
}


export default NewExpence;