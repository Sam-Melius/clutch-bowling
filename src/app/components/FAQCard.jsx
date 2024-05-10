"use client";

import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

export default function FAQCard({ faq }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flex flex-col gap-4 border-b border-gray-400 py-8 w-full lg:w-2/3 xl:w-3/4 mx-auto">
      <div className="flex flex-row items-start justify-between gap-5">
        <button
          className="w-fit text-xl lg:text-2xl xl:text-3xl text-left"
          onClick={toggleAnswer}
        >
          {faq.question}
        </button>
        <button className="text-3xl lg:text-4xl" onClick={toggleAnswer}>
          {showAnswer ? <AiOutlineMinus /> : <GoPlus />}
        </button>
      </div>

      {showAnswer && (
        <p className="text-clutchBlue-300 lg:text-lg pr-12">{faq.answer}</p>
      )}
    </div>
  );
}
