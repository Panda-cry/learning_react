import ExpenceForm from "./ExpenseFrom";
function NewExpence(props){
    function saveExpenseHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        console.log(expenseData)
        props.addExpense(expenseData)
    }
    return (
        <div class="container">
        <ExpenceForm onSaveExpenseData={saveExpenseHandler}></ExpenceForm>
        </div>
    )
}


export default NewExpence;