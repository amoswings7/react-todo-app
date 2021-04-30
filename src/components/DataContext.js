import react,{useState,createContext,useEffect} from 'react'

export const inforData = createContext()

export const DataContext = (props) => {

    const [todos,setTodos]=useState([]);
    const [filter,setFilter]=useState('all');

    useEffect(() => {
       if(localStorage.getItem('data')===null){
           localStorage.setItem('data',JSON.stringify(todos))
       }else{
           setTodos(JSON.parse(localStorage.getItem('data')))
       }
    }, [])

    return (  
        <inforData.Provider value={[todos,setTodos,setFilter,filter]}>
            {props.children}
        </inforData.Provider>
    );
}
