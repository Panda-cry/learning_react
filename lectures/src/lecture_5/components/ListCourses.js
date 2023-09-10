

function ListCourses(props){


    function getIdOnClick(event){
        console.log(event.target.id)
        props.deleteWithID(event.target.id)
    }
    return (
        <div>
            <ul className="list-group list-group-flush">
                {props.courses.map((course)=>(
                    <li className="list-group-item" key={course.id} id={course.id} onClick={getIdOnClick}>
                        {course.title}
                    </li>
                ))
            }
            </ul>
        </div>
    )


}

export default ListCourses;