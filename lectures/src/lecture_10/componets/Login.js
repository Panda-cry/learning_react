import { useRef, useEffect, useState, useReducer } from "react";
import React from "react";

function emailReducer(state, action){
    if(action.type === "USER_INPUT"){
        return {value:action.value, isValid:action.value.includes("@")}
    }
    if(action.type === "BLUR"){
        return {value:state.value, isValid:state.value.includes("@")}
    }


    return {valueE : "" , isValid : false}
}

function Login(props){

    const [email,setEmail] = useReducer(emailReducer,{value:"",isValid:false}) 
    //const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    //const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    const [isFormValid, setForm] = useState(false)
    useEffect(() => {
      let timer = setTimeout(() => {
        console.log("Timer");
        checkForm(email.isValid,pass.length > 6);
      }, 5000);
      return () => {
        console.log("Data");
        //clearTimeout(timer)
      };
    }, [email, pass]);

    function checkForm(emailValid,passValid){
        if(emailValid && passValid){
            setForm(true)
        }else{
            setForm(false)
        }
    }

    function checkInputFields(){
        let flag = email.isValid
        if(pass.length < 6){
            setPasswordError(true)
            flag = false
        }else{
            setPasswordError(false)
        }
        if(!flag===true){
            setForm(true)
        }
        else{
            setForm(false)
        }
        return flag
    }

    function emailChangeHandler(event){
        setEmail({type : "USER_INPUT",value:event.target.value})
    }

    function emailOnBlurChange(){
        setEmail({type:"BLUR"})
    }
    function passChangeHandler(event){
        setPass(event.target.value)
    }

    function onSubmitHandler(event){
        event.preventDefault()
        props.login()
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmitHandler}>
            <div className="form-group">
    <label>Email address</label>
    <input type="email" onBlur={emailOnBlurChange} onChange={emailChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  
    {!email.isValid && (
        <div className="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
    )}
  
  </div>
  <div class="form-group">
    <label >Password</label>
    <input type="password" onBlur={passChangeHandler}className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    
    {passwordError && (
        <div className="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
    )}
  </div>

  <button type="submit" className="btn btn-primary" disabled={!isFormValid}>Submit</button>
            </form>
        </React.Fragment>
    )


}

export default Login;



{
    /* 
    
    UseEffect vazi tj poziva se onog trenutka kada je jedan true iz dependencies
    kada sam koristio ref nije hteo da radi ali u principu 
    kada se neko polje promeni on se trigeruje 

    moze da se koristi za http request za stopwatch za input polja ovako nesto
    za bilo koje SideEffects koje trebaju da budu triggered na uslovu dependecy
    ako je [] znaci da je prazan dependecy i da ce samo jednom da se pozove 
    tj pozivace se onomad kada se renderuje ponovo komponenta :D
    
    npr gore primer 
    Ako stavimo da nema cleanTimer onda cemo za svaki keystroke da kreiramo jedan tajmer
    nakon toga ce oni da se pogase
    Nakon prvog puta kad se pokrene side effect 
    2 put se prvo radi funkcija koja se vraca
    onda ovako mozemo da nakon odredjenog broja sekundi da posaljemo neki request tako nesto :D


    Reducer je tu da uvezemo vise stvari 
    Npr ako imamo da su dve ili vise varijabli zavisne 
    npr emailError flag i email polje 
    mozemo da ga wrap u neki objekat npr 
    ili celu formu mozemo u neki objekat da stavimo
    
    mozemo da uzmemo npr ovo sto vraca Reducer fja 
    da stavimo const {isvalid : email} isto i za pass i da proveravamo to dalje :D 
    u useEffect :D
    */
}