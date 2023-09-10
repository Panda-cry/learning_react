import { useState } from "react";

function CourseForm(props){

    const [course,setCourse] = useState("")

    const [flag, setFlag] = useState(true)

    function courseChangeHandler(event){
        setCourse(event.target.value)
        if (course.trim().length > 0){
            setFlag(true)
        }
    }

    function formEventHandler(event){
        event.preventDefault()
        if (course.trim().length === 0){
            setFlag(false)
            return;
        }

        props.addCourse({
            id : Math.random(300),
            title : course})
    }

    function checkFlag(){
        if (flag === false){
            return <div class="alert alert-danger" role="alert">
            Empty title is not allowed!!!
          </div>
        }

    }
    return (

            <div className="container-fluid">
                
                <form onSubmit={formEventHandler}>
                <div className="col-sm-3">
                <label for="courseForm">Course Goal</label>
                <input type="text" className="form-control" id="courseForm" value={course} placeholder="Learn React!" onChange={courseChangeHandler}/>
                </div>
                {checkFlag()}
                {flag === false && <div class="alert alert-danger" role="alert">
            Empty title is not allowed!!!
          </div>}
                <button type="submit" className="btn btn-primary">Add Course</button>
                </form>
            </div>

    )

}



export default CourseForm;