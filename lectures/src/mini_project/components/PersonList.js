

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