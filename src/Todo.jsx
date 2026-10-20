import React, { useEffect, useState } from 'react'

const Todo = () => {

   const [details,setDetails] = useState('');
   const  [getTodos,setTodos] = useState([]);
   const [isLoading,setIsLoading] = useState(false);

   const loadLocal = () =>
   {
    const savedTodos = localStorage.getItem("todos");

    if(savedTodos)
    {
        setTodos(JSON.parse(savedTodos));
    }

    setIsLoading(true);
   }


   useState(()=>
{
    loadLocal();
},[])

useEffect(()=>
{
    if(isLoading)
    {
        localStorage.setItem("todos",JSON.stringify(getTodos))
    }
},[getTodos,isLoading])




    const renderTodos = () =>
    {
        console.log("Clicking")
        console.log(getTodos)
        if(details.trim()==='')
        {
            return;
        }
        setTodos([...getTodos,details.trim()])
        setDetails('');
    }


    const deleteDetails = (index) =>
    {
        setTodos(getTodos.filter((ele,i)=> 
        {
            return i!==index;
        }))
    }

    console.log(getTodos)


  return (
    <div className='w-full h-lvh flex items-center'>
        <div className='h-[70%] w-full max-w-5xl mx-auto rounded-2xl bg-black shadow-[3px_3px_6px_black] '>
            <div className='border-2 p-4'>
                <h1 className='text-center font-serif font-bold text-2xl text-red-600 uppercase tracking-widest'>Todo List</h1>
            </div>
            <div className=' flex justify-around mt-10'>
                <input type="text" onChange={(e)=>setDetails(e.target.value)} value={details}  className=' h-full py-2 w-full max-w-75 outline-none font-bold font-serif bg-white rounded-2xl px-2' />
                <button onClick={renderTodos} className='font-bold font-serif border-2 px-4 py-1 rounded-md bg-red-600 cursor-pointer'>Add Todo</button>
            </div>
            {/*This is for Add Todo Page*/}
            <div className='border-2 border-white h-fit'>
                {getTodos.map((ele,index)=>
                (
                    <div key={index}>
                        <div className='text-white font-bold font-serif'>{ele}</div>
                        <button className='border-2 py-2 px-4 rounded-2xl border-red-600 text-white' onClick={()=>deleteDetails(index)}></button>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Todo