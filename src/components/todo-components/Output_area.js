import React,{useContext} from 'react';
import {inforData} from '../DataContext'
import Todo from './Todo'


const Output_area = ({todos,setTodos,filtered}) => {
//     const [filter,setFilter] = useContext(inforData);
//   console.log(filter)
    return (
        <ul className='output'>
            {filtered.map(todo =>(
               <Todo key={todo.id} todo={todo} id={todo.id} setTodos={setTodos} todos={todos}/>
            ))}
        </ul>
     );
}
 
export default Output_area;