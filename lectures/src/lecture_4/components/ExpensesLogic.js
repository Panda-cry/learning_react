import ExpenseItem from "../../lecture_3/components/ExpenseItems";


function ExpenseLogic(props){


    if (props.items.length === 0){
        return <h1>Nema nista</h1>
    }

    return (
        <ul className="list-group list-group-flush">
        { props.items.map((expense, index)=>(    
            <ExpenseItem title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}>
            </ExpenseItem>
        ))}
    </ul>
       
    )

}


export default ExpenseLogic;