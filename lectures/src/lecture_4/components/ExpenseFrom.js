import React, { useState} from "react";

//mogli smo da uzmemo samo jedan useState
//const [userFrom, setUserForm] = useState({
//    title : '',
  //  amount : '',
    //date : '',
//})
//setUserForm(...userForm, override field)
//ali onda moramo da pazimo da update uvek sve
//da ne bi doslo do override i gubitka podataka

//trebalo bi da bude ok ali nekada moze da zakaze
//moze da ne update na vreme jer je sve scheduled u react
//kada su u pitanju fje.
//setFrom((proslo_stanje)=>{
 // return {...proslo_stanje, pretabano_polje:.tigers.value}
//})
function ExpenceForm(props) {
  function titleChangeHanlder(event){
    setTitle(event.target.value)
  } 
  
  function amountChangeHandler(event){
    setAmount(event.target.value)
  }

  function dateChangeHandler(event){
    setDate(event.target.value)
  }
  const [date, setDate] = useState()
  const [amount, setAmount] = useState(0)
  const [title, setTitle] = useState('') 


  function submitPressHandler(event){
    event.preventDefault();
    console.log("Last title :" + title)
    console.log("Last amount :" + amount)
    console.log("Last date :" + date)

    const expenseObj = {
      title:title,
      amount:amount,
      date: new Date(date)
    }
    props.onSaveExpenseData(expenseObj)
    setAmount('')
    setTitle('')
    setDate('')
  }

  return (
    <form onSubmit={submitPressHandler}> 
      <div class="form-group row">
        <label for="title" class="col-sm-2 col-form-label">
          Title
        </label>
        <div class="col-sm-10">
          <input
          value={title}
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            onChange={titleChangeHanlder}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="date" class="col-sm-2 col-form-label">
          Date
        </label>
        <div class="col-sm-10">
          <input
          value={date}
            type="date"
            class="form-control"
            id="date"
            onChange={dateChangeHandler}
            placeholder="Date"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="amount" class="col-sm-2 col-form-label">
          Amount
        </label>
        <div class="col-sm-10">
          <input
          value={amount}
            type="number"
            class="form-control"
            id="amount"
            placeholder="Amount"
            onChange={amountChangeHandler}
            min="0.01" step="0.01"
          />
        </div>
      </div>
      <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit"  class="btn btn-primary">Submit form</button>
    </div>
  </div>
    </form>
  );
}

export default ExpenceForm;
