import React,{useContext,useEffect, useState} from 'react';
import {inforData} from './DataContext'
import Input_area from './todo-components/Input_area'
import Output_area from './todo-components/Output_area'
import Filter from './todo-components/Filter'


const Todo_area = () => {
    const [todos,setTodos,setFilter,filter]=useContext(inforData);
    const [filtered,setfiltered] = useState([])

    useEffect(()=>{

        setfiltered(todos.filter(todo =>{
            if(filter ==='completed'){
                return todo.state  ===true;
            }else if(filter ==='uncompleted'){
                return todo.state ===false
            }else if(filter ==='all'){
                return todo
            }
        }))

    },[filter,todos])


    return ( 
        <div className='todo-area'>
            <Input_area todos={todos} setTodos={setTodos}/>
            <Filter setFilter={setFilter}/>
            <Output_area todos={todos} setTodos={setTodos} filtered={filtered}/>
        </div>
     );
}
 
export default Todo_area;