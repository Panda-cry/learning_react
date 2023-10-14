import React, { useState, useEffect, useContext } from "react";
import Header from "./food_order_app_follow/components/Layout/Header";
import Meals from "./food_order_app_follow/components/Meals/Meals";
import Cart from "./food_order_app_follow/components/Cart/Cart";
import CartProvider from "./food_order_app_follow/components/store/CartProvider";
import Movie from "./lecture_14/components/Movies";
import Movies from "./lecture_14/components/Movies";

function App() {
  function getRequest() {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }
  const [buttonClicked, setButton] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getRequest();
  }, []);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <React.Fragment>
      <Movies items={movies}></Movies>
    </React.Fragment>
  );
}

export default App;

{
  /* 

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
