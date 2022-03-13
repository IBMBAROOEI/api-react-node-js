import { React,Fragment,useState,useEffect} from "react"
import axios from 'axios';
import EditTodo from './EditTodo';
const ListTodo =() =>{
     const [names,setnames]=useState([]);
     
    
useEffect(() => {
 axios.get('http://localhost:5000/api/get').then(response =>{
    setnames(response.data)
    
  }).catch(er =>{
   console.log(er)
  })
 },[])


  const deletetodo =(id) =>{
      axios.delete(`http://localhost:5000/api/del/${id}` )
      setnames(names.filter(na => na.id !== id));
       
  }
    return (
    <Fragment>
    <h1 classNameName="text-center mt-5">Todoslist </h1>

                    <table className="table">
                     <thead>
                       <tr>
                     
                         <th scope="col">name</th>
                         <th scope="col">del</th>
                         <th scope="col">edit</th>
                       </tr>
                     </thead>
                     <tbody>

                      {names.map(na => (
                        <tr key={na.id}>
                         <td>{na.name}</td>
                         <td>
                         <button type="button" className="btn btn-danger" onClick={()=>deletetodo(na.id)}
                         
                         >delete</button>
                         </td>
                         <td>
                         <EditTodo na={na}/>
                         </td>
                       </tr>                                                           
                      ))}
                     </tbody>
                    </table>

                  </Fragment>

    )
};

export default ListTodo