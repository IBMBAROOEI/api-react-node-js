import { React,Fragment,useState} from "react"
import axios from 'axios';


const InputTodo =() =>{
     const [name,setname]=useState("");



const onSubmitForm = (event) =>{
    event.preventDefault(); 
  
    axios.post("http://localhost:5000/api/register", {
      name:name
    })

.then(res=>console.log(res.data))
.catch(err=>console.log(err))

  }




    return (
    <Fragment>
    
    <form>
    <input type="text" className="form-control" value={name}   onChange={(e) => setname(e.target.value)} />
    <div className="mt-5  text-center">
    <button type="button"
                  className="btn btn-warning w-75 btn-block"
                  onClick={(event)=>onSubmitForm(event)}
          >send</button>
         </div>

 
    </form>

    </Fragment>

    )
}

export default InputTodo