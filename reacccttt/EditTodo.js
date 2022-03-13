import { React,Fragment,useState} from "react"
import axios from 'axios';

 const EditTodo =({na})=>{
    const [name,setname]=useState(na.name);
    


    const updatevalue = (event) =>{
        event.preventDefault(); 
        axios.put(`http://localhost:5000/api/put/${na.id}`, {
            name:name
          })
      
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))

    }
      
     return(

<Fragment>

<div>


<button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${na.id}`}>
 edit 
</button>


<div className="modal fade" id={`id${na.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <input type="text" className="form-control" value={name}   onChange={(e) => setname(e.target.value)} />
      </div>
      <div className="modal-footer">
        
        <button type="button"
                  className="btn btn-warning w-100 btn-block"
                  onClick={(event)=>updatevalue(event)}
          >edit</button>
      </div>
    </div>
  </div>
</div>

</div>
</Fragment>

)
     }

     export default EditTodo


