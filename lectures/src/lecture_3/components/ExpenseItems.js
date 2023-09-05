import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react"
import StateLecutre from '../../lecture_4/components/StateLecture'


//use state kada se poziva uvek poziva nanovo tu komponentu
//Kapiram da je sve u memoriji i svaki put ona se vezuje u memoriji za alociranu tu insancu jedne komponente
//ne vidi ostale i zato se pri update ne update svi nego samo ta instanca
//jedno se inicijalizuje i prilikom narednih poziva nece pretebati na staro nego ce koristiti updated version :D
function  ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    // use state vrac fju koja vraca array gde je prvi elemtnt sama varjabla
    //a drugi element je fja koja moze da setuje polje
    return (
    <li>
        <ExpenseDate date = {props.date}> </ExpenseDate>
        <div>
        <h2>{title}</h2>
        </div>
        <div>{props.amount}</div>
        <StateLecutre changeTitle={setTitle}/>
    </li>
    );
}

//Da sada stavimo nesto u state lecture morali bi da stavimo 
//props.childrens u StateLecture.js da bi mogao ceo DOM da parsira
export default ExpenseItem;


// ostavio sam polje props.title koje je generalno uvek isto
//jednom se renderovalo i tjt nikada se nece promeniti
//kada sam okidao button nije se desavalo nista jer props.title nije registrovano kao nova varijabla koja se menja
//tj nije setovana da je specijalna varijabla 
//a koliko sam ukapirao mozemo slati reference koje se pamte u memoriji i mogu da se korsite kao fje kasnije :D