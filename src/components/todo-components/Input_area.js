import React, { useEffect, useState } from 'react';


const Input_area = ({todos,setTodos}) => {

    const [text,setText]=useState('');
    let count=()=>{
        let num = 0;
        for(let todo of todos){
            if(todo.id>=num){
                num=todo.id
            }
        }
        return num
    };

    function inputBtn(e){
        setText(e.target.value);
    }
    function addBtn(){
        if(text.length !==0){
            setTodos([{text:text,id:count()+1,state:false},...todos]);
            setText('')   
        }
    }

    useEffect(()=>{
        if(todos.length !==0){
            localStorage.setItem('data',JSON.stringify(todos))
        }
    },[todos])

    return (
        <div className='input-area'>
            <input value={text} onChange={inputBtn} type='text' className='input'/>
            <button onClick={addBtn} className='add-btn'><i className="fas fa-plus-circle fa-2x"></i></button>
        </div>
     );
}
 
export default Input_area;