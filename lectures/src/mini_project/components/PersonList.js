

function PersonList(props){



    return (<div>
        <p>Pusi ga</p>
        <ul className="list-group list-group-flush">
                {props.users.map((user)=>(
                    <li className="list-group-item" key={user.id} id={user.id}>
                        <p>Username :{user.username}</p>
                        <p>Age : {user.age}</p>
                    </li>
                ))
            }
            </ul>

    </div>)


}

export  default PersonList


{

    /*
    Da ne bi morali da sve ubacujemo u jedan div jer ce kasnije da se nagomilaju
    mozemo da iskoristimo caku da napravimo komponentu i da return bude 
    props.children jer onda sv sto je izmedju tagova te komponente ona ce davrati
    sto znaci da smo zaobisli ugnezdavanje div-ova 

    React ima svoje vrappere <> </> moze ovako ili React.Fragment
    
    Da ne bi zatrpavali kod i renderovanje strane npr neke stvari koje se pojavlju
    kao neki dash prozor ili neka obavestenja mozemo da ih povezemo negde drugde
    zato kroistimo React port  u index.html napravimo div neki sa id
    kansije u nekom daljem radu kreiramo komponentu  i stavimo ReactDom.createPortal
    itd ali bitno da se te komponente ne renderejuju u dubini nekoj kode vec se linkuju
    i po potrebi se kreiraju :D


    mozemo da imamo ref na neke iinput elemente i jednostavno mozemo da kada
    treba da submit forme da samo uzmemo red.curren.value i tjt to je uncontrolled

    a kada koristimo sa state onda je controlled

    
    
    */
}