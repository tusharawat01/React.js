
import React, {useEffect, useState} from 'react'

function LocalStorage() {

const [count, setCount] = useState(0)


useEffect(() => {
    // Retrieve count from local storage when the component mounts
    const storedCount = localStorage.getItem('count');
    if (storedCount !== null) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

const add = () => {
    setCount(prev => prev + 1);
}

const minus = () => {
    setCount(prev => prev - 1)
}

useEffect(() => {
    localStorage.setItem('count', count);
},[count]);


  return (
    <>
      <p className='text-5xl mb-5'>Count : {count}</p>
      <div className='flex m-2 justify-center'>
      <button onClick={add} className='bg-blue-600 px-6 py-1 rounded-md m-4'>+</button>
      <button onClick={minus} className='bg-blue-600 px-6 py-1 rounded-md m-4'>-</button>
      </div>
    
    </>
  )
}

export default LocalStorage

