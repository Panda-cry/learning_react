import { useState } from "react";






function PersonForm(props){

    function onSubmitHandle(event){
        event.preventDefault()

        if(flag || flagA){
            return
        }
        console.log(username)
        console.log(age)

        props.addNewUser({
            "id" : Math.random(),
            "username":username,
            "age":age,
        })
    }
    
    const [username,setUsername] = useState('')
    const [age, setAge] = useState(18)
    const [flag,setBoolFlag] = useState(false)
    const [flagA,setBoolFlagA] = useState(false)

    function onChangeUsernameHandler(event){
        setUsername(event.target.value)
        if(username.trim().length === 0){
            setBoolFlag(true)
            return
        }
        if(username == "empty"){
            setBoolFlag(true)
            return
        }
        if(username.trim().length > 10){
            setBoolFlag(true)
            return
        }
        setBoolFlag(false)
    }
    function onChangeAgeHandler(event){
        setAge(event.target.value)
        if(age < 18 || age > 60){
            setBoolFlagA(true)
            return
        }

        setBoolFlagA(false)
    }
    return (
        <div className="container">

            <form onSubmit={onSubmitHandle}>

                <div class="row">
        <div class="col">
        <label for="username">Username:</label>
        <input type="text" onChange={onChangeUsernameHandler} class="form-control" id="username" placeholder="Username" />
        </div>
        <div class="col">
            <br></br>
            {flag && <div class="alert alert-danger" role="alert" >
            Username cannot be over 10 caracters or empty!!!
            </div>}
        </div>
    </div>

    <div class="row">
        <div class="col">
        <label for="age">Age:</label>
        <input type="number" onChange={onChangeAgeHandler} class="form-control" id="age" placeholder="Age"/>
        </div>
        <div class="col">
        <br></br>
        {flagA && <div class="alert alert-danger" role="alert" >
            Age cannot be over 60 or less than 18!!!
            </div>}
        </div>
    </div>
    <br></br>
    <button type="submit" class="btn btn-primary">Add new user</button>
            </form>


        </div>


    )

}

export default PersonForm;