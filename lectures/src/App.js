import NewExpence from './lecture_4/components/NewExpence';
import ExpensesList from "./lecture_4/components/ExpensesList"
import React, { useState } from 'react';

const  expInitial = [
  {id : "e1", title:"Title 1" , amount: 123, date : new Date(2021, 2, 13), },
  {id : "e2",title:"Title 2" , amount: 124, date : new Date(2022, 5, 16), },

  {id : "e3",title:"Title 3" , amount: 125, date : new Date(2011, 3, 19), },

  {id : "e4",title:"Title 4" , amount: 126, date : new Date(2021, 1, 12), },

]



function App() {

  const [expences, setExpences] = useState(expInitial)
function addExpenseHandler(expense){
  console.log(expense)
  setExpences((prevState) =>{
    console.log([expense, ...prevState])
    return [expense, ...prevState]
  })
}
  return (
    <div class="container" >
      <NewExpence addExpense={addExpenseHandler}/>
      <ExpensesList items={expences}/>

    </div>
  );
}

export default App;


//Moguce je napraviti komponentu koja je kao wrapper
//da bi se koristila kao html tag mora u sebi da ima 
//prop.children a neki class name koji moze da se doda na njega
//const = props.ime_necega mozemo da dodamo class name
//u globalu sve se gleda taj props kao dict
//uglavnom koliko sam ukapirao uvek se koristi 
//react.creteElement() koji kreira neki div ili tako
//ako je custom Component vrv ide tamo i posto je i to fja
// i ona se parsira preko react.createElement


const someFunction = () => {}