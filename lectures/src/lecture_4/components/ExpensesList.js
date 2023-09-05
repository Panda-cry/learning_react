import ExpenseItem from '../../lecture_3/components/ExpenseItems'
import FilterExpense from './FilterExpenses';
import { useState } from 'react';
import ExpenseLogic from './ExpensesLogic';
function ExpensesList(props){

    const [year, setYear] = useState('2022')
    function setNewYear(newYear){
        console.log("New YEAR" + newYear)
        setYear(newYear)
    }

    const filteredExpenses = props.items.filter(
        expense => {
            return expense.date.getFullYear().toString() >= year
        }
    )
    let contentExpense = <p>Nema nista</p>
    if (filteredExpenses.length >0){
        contentExpense = filteredExpenses.map((expense, index)=>(    
            <ExpenseItem title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}>
            </ExpenseItem>
        ))
    }
    return (
        <div>
        <FilterExpense changedValue={setNewYear} year={year}>

        </FilterExpense>      
        <ExpenseLogic items={filteredExpenses}/>
        </div>
    )
}

//         <ul className="list-group list-group-flush">
//            {contentExpense}
//        </ul>




//ako nam neka logika mnogo treba tj stalno menjanje
//DOM komponente bolje je da izbacimo to u neku novu komponentu koja ce da radi logiku
//mesto ovakvog ternarnog izraza mozemo satavlajti && i imamo samo jedan 
//jer && radi samo ono sto je iza ako je uslov ispunjen   
//imamo title koje je state i koje moze da se menja
//ako ne stavljamo ovaj key react kada parsira ne zna onda 
//kada se update lista itema on uzme pa prekopira stanja i
//i dolazi do bug jer htm ako mu je nesto isto on ga samo kopira 
//tako da vrv kopira i adresu gde se nalazi fja i koja se kasnije samo update sa ostala polja 
//sto ne valja 
//treba svako da ima posebno 
//sa key zna da prepozna sta mu treba :D
//            filteredExpenses.length === 0 ? (<p>Nema nista</p>) :

export default ExpensesList;