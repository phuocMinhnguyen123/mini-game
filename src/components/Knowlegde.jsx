import React from 'react'
import { useAppContext } from '../context/context'
import parse from "html-react-parser"
const Knowlegde = () => {
    const {currentId,questions} = useAppContext();
    const currentQuiz = questions.find(ele => ele.id === currentId);
    if (!currentQuiz?.info?.length > 0 || !currentQuiz?.info) return null;
  return (
    <div className='bg-white min-h-[500px] mx-auto mt-20 w-1/2 p-6 rounded-[40px] flex'>
        <div className="text-3xl text-black ">Answer:<br/>
        <p className='text-2xl mt-5'>

        {parse(currentQuiz.info)}
        </p>
        </div>
    </div>
  )
}

export default Knowlegde