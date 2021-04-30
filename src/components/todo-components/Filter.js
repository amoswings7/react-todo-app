const Filter = ({setFilter}) => {

    function filterHandler(e){
        setFilter(e.target.value)
    }

    return ( 
        <select onChange={filterHandler} className='filter'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
        </select>
     );
}
 
export default Filter;