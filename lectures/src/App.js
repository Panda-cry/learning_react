import React, { useState, useEffect, useContext } from "react";
import Header from "./food_order_app_follow/components/Layout/Header";
import Meals from "./food_order_app_follow/components/Meals/Meals";
import Cart from "./food_order_app_follow/components/Cart/Cart";
import CartProvider from "./food_order_app_follow/components/store/CartProvider";
import Movie from "./lecture_14/components/Movies";
import Movies from "./lecture_14/components/Movies";
import ForwardCounter from "./lecture_15/components/ForwardCounter";
import BackwardCounter from "./lecture_15/components/BackwardCounter";
import useHttp from "./lecture_15/hooks/use-http";
import SimpleFunction from "./lecture_16/SimpleInput";
import CounterRedux from "./redux-demo-folder/CounterRedux";
import { Provider, useSelector } from "react-redux";
import NavBarRedux from "./redux-demo-folder/NavBarRedux";
import AuthRedux from "./redux-demo-folder/AuthRedux";
import ReduxCart from "./lecutre_17/ReduxCart";
import store from "./lecutre_17/store/cart-store-redux";
import { Routes, Route } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Welcome from "./react-routing/wlecome";
import Start1 from "./react-routing/started1";
import Detailed from "./react-routing/detailed-page";

let init_val = false;
function App() {
  return (
    <div>
      <header>
        <NavLink to="/welcome">Welcome</NavLink>
        <br></br>
        <Link to="/detailed">Start1</Link>
        <br></br>
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/detailed" element={<Start1></Start1>}></Route>
        <Route
          path="/detailed/:anything"
          element={<Detailed></Detailed>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

{
  /* 
  const cart = useSelector((state) => state.cart);

  useEffect(
    function () {
      if (!init_val) {
        init_val = true;
        return;
      }
      console.log("Ovde saljemo backend-u iteme");
    a mozemo takodje i da uradimo sa actions 
    
    mozemo da imamo neku varijablu koja govori da li je inicijalno pokretanje app
    posle toga dispatch(sentCartData(cart))
    
    imamo tamo fju u fji i to moze jer dispatch ce da okine tamo onu fju 
    i dace nam dispatch jer je logika je da se koristi fja 
    a da se ne koristi reducer i tjt 
    ne treba da se useEffect pretrpava i onda se desava to u action creator functions!!!
    ReduxDev tools !!!
    

  ,
  [cart]
);
  ----------------17
  Treba napomenuti jos jednom u redux se ne stavlja nista side effect
  to slanje necega 
  ili se radi u componenti sa useEffect ili action creators!!!
  mozemo neke notifikacije da izbacimo kada radimo sa useeffect i saljemo nesto na backedn
  mozda da bude async i da se henldaju errori responsa itd.


lecture 16
 <React.Fragment>
      <NavBarRedux auth={auth}></NavBarRedux>
      {!auth && <AuthRedux auth={auth} />}
      <CounterRedux></CounterRedux>
    </React.Fragment>

        <SimpleFunction></SimpleFunction>
  --------------------- Lecutres to 15


    function getRequest() {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }
  const [buttonClicked, setButton] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [movies, setMovies] = useState([]);

  const [tasks, setTasks] = useState([]);
  function getDataModify(data) {
    const tempList = [];
    for (item in data) {
      tempList.push({ id: item, text: data[item].text });
    }
    setTasks(tempList);
  }
  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp(
    {
      url: "https://asymmetric-lore-317721-default-rtdb.firebaseio.com/tasks.json",
    },
    getDataModify
  );
  useEffect(() => {
    fetchTasks();
  }, []);
  useEffect(() => {
    getRequest();
  }, []);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  ----------------------------------------

  
  lecture food app my way 

    <MealProvider>
      <NavBar clickButton={setButton}></NavBar>
      <FoodList clickButton={setButton} />
      {buttonClicked && <Cart></Cart>}
    </MealProvider>

  ------------
  Lecture 10
  -------------------------------
    const ctx = useContext(AuthContext)

  return (
        <React.Fragment>
        <NavBar/>
        {
          ctx.isLoggedIn === true && <Home/>
        }
        {
          ctx.isLoggedIn === false && <Login />
        }
  
        </React.Fragment>
  )

  ------------------------------------

  import NewExpence from './lecture_4/components/NewExpence';
import ExpensesList from "./lecture_4/components/ExpensesList"
import React, { useState } from 'react';
import CourseForm from './lecture_5/components/CourseForm';
import ListCourses from './lecture_5/components/ListCourses';
import PersonForm from './mini_project/components/PersonForm';
import PersonList from './mini_project/components/PersonList';


  const  expInitial = [
  {id : "e1", title:"Title 1" , amount: 123, date : new Date(2021, 2, 13), },
  {id : "e2",title:"Title 2" , amount: 124, date : new Date(2022, 5, 16), },

  {id : "e3",title:"Title 3" , amount: 125, date : new Date(2011, 3, 19), },

  {id : "e4",title:"Title 4" , amount: 126, date : new Date(2021, 1, 12), },

]

const initCourses=[
  {id:11, title:"Learn React!!!"}
]
---------------------------------------
  
  
  const [courses,setCourses] = useState(initCourses)

  const [expences, setExpences] = useState(expInitial)

  const [users, setUsers] = useState([])

  
function addExpenseHandler(expense){
  console.log(expense)
  setExpences((prevState) =>{
    console.log([expense, ...prevState])
    return [expense, ...prevState]
  })
}

function addNewCourse(newCourse){
  console.log(newCourse)
  setCourses(
    (prevState)=>{
      return [...prevState,newCourse]
    }
  )
}

function deletedCourse(idDeleted){
  console.log(idDeleted)
    const newList = courses.filter((course) => course.id != idDeleted)
    setCourses(newList)
}
function createUser(newUser){
    setUsers(
      (oldUsers)=>{
        return [newUser,...oldUsers]
        }
      )
      console.log(users)
}

  return (
    <div class="container" >
     <NewExpence addExpense={addExpenseHandler}/>
      <ExpensesList items={expences}/>
    <CourseForm addCourse={addNewCourse} ></CourseForm>
      <ListCourses courses={courses} deleteWithID={deletedCourse}/>
    
    
    <PersonForm addNewUser={createUser}/>
    <PersonList users={users} />
  
    
    
    </div>
  );
  
  
  
  
  
  
  
  
  */
}

//Moguce je napraviti komponentu koja je kao wrapper
//da bi se koristila kao html tag mora u sebi da ima
//prop.children a neki class name koji moze da se doda na njega
//const = props.ime_necega mozemo da dodamo class name
//u globalu sve se gleda taj props kao dict
//uglavnom koliko sam ukapirao uvek se koristi
//react.creteElement() koji kreira neki div ili tako
//ako je custom Component vrv ide tamo i posto je i to fja
// i ona se parsira preko react.createElement

const someFunction = () => {};
