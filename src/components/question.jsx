import React, { useCallback, useMemo } from "react";
import { randomFromArr, shuffleArray } from "../function/function";
import { useAppContext } from "../context/context";
import { INFO, MARKETING, PROGRAMMING,SEO } from "../data/constant";



function Question({ num }) {
  const cache = new Map();
  const {questions,setSelectedQuesion,currentId} = useAppContext();
  console.log("questions",questions);
  const finalQuestions = useMemo(()=> {
    let newArr = shuffleArray(questions)
    let count = 4;
    let index = 3;
    let result = [];
    let categories = [PROGRAMMING,INFO,SEO,MARKETING];

    while (count > 0) {
      let item;
      const category = categories[index];
       item = newArr.find(ele => ele.category === category);
      if (!item) {
        categories.pop();
        --index;
        --count;
        item = newArr[newArr.length - 1];
      } else {
        --index;
        --count;
      }
      result.push(item);
    }
    
    return result;
  },[questions,num])
 
  return (
    <div className="w-full mt-8 max-w-[1500px] mx-auto px-20 justify-center text-slate-800 items-center grid grid-cols-2 gap-5 flex-wrap  ">
      {finalQuestions.map((ele, index) => {
        const isActive = currentId === ele.id;
        return (
          <div
            style={{ letterSpacing: "0.5px" }}
            id={ele.id}
            onClick={()=> setSelectedQuesion(ele.id)}
            className={`${!isActive ? "" :" border-orange-600 border-[5px] "} bg-white text-black cursor-pointer  rounded-[40px] py-5  text-lg font-semibold  focus:text-orange-500 focus:border-orange-500`}
          >
            {index} .{ele.question}
          </div>
        );
      })}
    </div>
  );
}

export default Question;
