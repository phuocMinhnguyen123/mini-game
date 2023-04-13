import React, { useCallback } from "react";
import { randomFromArr } from "../function/function";

const questionArr = [
  "Take or show a picture of your nearest park",
  "take a picture of your favorite food",
  "Is there anything that most people find cute that creeps you out?",
  "What is the last thing that you totally overreacted to?",
  "In emergency situations, how do you react?",
  "Make a compliment of one of your co-worker",
  "What do you consider the best decision you've made thus far in your life?",
  "What's the best compliment you ever received?",
  "What do you find extremely difficult that most people find simple?",
  "sing a line in your favorite song ",
  "describe your morning routine",
  "Write a motivation letter for weekend",
  "What law have you broken the most in your life?",
  "What do you love most about where you grew up?",
  "Is there a part of Viet Nam culture that you don't like?",
  "Draw your favorite Pet",
  "If each person had a warning label, what would yours say?",
  "Who is the best family member to you",
  "Do some Drawing of your window",
];

function Question({ num }) {
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
    <div className="w-full mt-8 px-20 justify-center text-slate-800 items-center flex flex-col flex-wrap  gap-10">
      {Array.from({ length: num }, callback).map((ele, index) => {
        return (
          <div
            style={{ letterSpacing: "0.5px" }}
            className="w-4/5  text-xl rounded-xl focus:text-orange-500 focus:border-orange-500"
          >
            {index} .{ele}
          </div>
        );
      })}
    </div>
  );
}

export default Question;
