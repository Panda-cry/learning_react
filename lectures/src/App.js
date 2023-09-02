import './App.css';
import ExpenseItem from './lecture_3/components/ExpenseItems';
function App() {
const  expenses = [
  {title:"Title 1" , amount: 123, date : new Date(2021, 2, 13), },
  {title:"Title 2" , amount: 124, date : new Date(2022, 5, 16), },

  {title:"Title 3" , amount: 125, date : new Date(2011, 3, 19), },

  {title:"Title 4" , amount: 126, date : new Date(2021, 1, 12), },

]

  return (
    <div class="container" className="App">
    <ul class="list-group list-group-flush">
    {
      expenses.map((expense, index)=>(
        <li class="list-group-item">        
        <ExpenseItem title={expense.title}
        date={expense.date}
        amount={expense.amount}>
        </ExpenseItem>
        {index}
        </li>

      ))
    }
    </ul>

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