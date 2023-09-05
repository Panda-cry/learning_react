
const years = [
"2020",
"2022",
"2032",
"2021"
]

function FilterExpense(props){

    function changedYear(event){
        console.log(event.target.value)
        props.changedValue(event.target.value)
    }

    return (
        <div className="container">
                <select name="cars" onChange={changedYear} id="cars" value={props.year}>
                    {years.map((item, index)=>
                    ( <option key={index}>{item}</option>)
                       
                )}
    </select>
        </div>

    )

}


export default FilterExpense