import React,{useContext} from 'react';
import {inforData} from '../DataContext'



const Todo = ({todo,id,setTodos,todos}) => {

    const [todoss,setTodoss,setFilter,filter]=useContext(inforData);

    function deleter(e){
        setTodos(todos.filter(todo =>{
            return todo.id !== id
        }))
        localStorage.setItem('data',JSON.stringify(todos))
    }

    function completed(e){
        let state = false
        if(e.target.style.color !=='green'){
            setTodos(todos.map(ele =>{
                if(ele.id === id){
                    console.log()
                ele.state=true;
                state=ele.state;
                return ele                
             }
             return ele
         }))  

        }else if(e.target.style.color ==='green'){
            setTodos(todos.map(ele =>{
                if(ele.id === id){
                ele.state=false;
                state=ele.state;
                return ele                
             }
             return ele
         }))

        }

    if(state){
        e.target.style.color='green'
    }else{
        e.target.style.color='black'
    }
    }
    return ( 
        <li key={todo.id} className='todo'><span style={todo.state?{color: 'rgb(250,250,250,0.8)',textDecoration: 'line-through'}:{color: 'rgb(250,250,250,1.0)',textDecoration: 'none'}}>{todo.text}</span>
          <button onClick={completed} ><i className="fas fa-check-circle fa-lg"></i></button>
          <button onClick={deleter} className='trash-btn'><i className="fas fa-trash-alt fa-lg"></i></button>
        </li>
    );
}
 
export default Todo;