import React,{Fragment} from 'react';
import './App.css';


import InputTodo  from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
 
    <Fragment>
      <div className='container mt-5'>
     <InputTodo/>
     <ListTodo/>
   
     </div>
    </Fragment>
  );
}

export default App;
