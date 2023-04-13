import React from "react";
import { randomFromArr } from "../function/function";

const questionArr = [
  "What is the most unique cloud you've ever seen in the sky?",
  "What's the best comeback you've ever heard?",
  "Take or show a picture of your nearest park",
  "take a picture of your favorite food",
  "Is there anything that most people find cute that creeps you out?",
  "What is the last thing that you totally overreacted to?",
  "In emergency situations, how do you react?",
  "Make a compliment of one of your co-worker",
  "What do you consider the best decision you've made thus far in your life?",
  "What's the best compliment you ever received?",
  "If each person had a warning label, what would yours say?",
  "Who is the best family member to you",
  "Do some Drawing of your window",
];

function Question() {
  const cache = new Map();
  const callback = (x) => {
    const getRadomWithCache = () => {
      const size = questionArr.length - 1;
      let i = Math.floor(Math.random() * size);
      if (cache.has(i)) return getRadomWithCache();
      cache.set(i, x);
      return i;
    };
    return questionArr[getRadomWithCache()];
  };
  return (
    <div className="w-4/5 justify-center text-white flex flex-wrap  gap-10">
      {Array.from({ length: 4 }, callback).map((ele, index) => {
        return (
          <div className="w-1/5 rounded-xl">
            {index} .{ele}
          </div>
        );
      })}
    </div>
  );
}

export default Question;
