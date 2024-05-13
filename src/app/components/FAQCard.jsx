"use client";

import { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

export default function FAQCard({ faq }) {
  const [showAnswer, setShowAnswer] = useState(false);

  // Ensure initial state matches on the client and server
  useEffect(() => {
    setShowAnswer(false);
  }, []);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      className="flex flex-col gap-4 border-b border-gray-400 pt-8 pb-4 w-full lg:w-2/3 xl:w-3/4 mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="flex flex-row items-start justify-between gap-5">
        <button
          className="w-fit text-xl lg:text-2xl xl:text-3xl text-left"
          onClick={toggleAnswer}
        >
          {faq.question}
        </button>
        <button className="text-3xl lg:text-4xl" onClick={toggleAnswer}>
          {showAnswer ? (
            <AiOutlineMinus className="animate__animated animate__rotateIn animate__faster" />
          ) : (
            <GoPlus />
          )}
        </button>
      </div>

      <div
        style={{
          maxHeight: showAnswer ? "1000px" : "0",
          overflow: "hidden",
          transition: showAnswer
            ? "max-height 1s ease-in"
            : "max-height .3s ease-in",
        }}
      >
        <p
          className={`text-clutchBlue-300 lg:text-lg pr-12 overflow-hidden transition-all ${
            showAnswer ? "max-h-fit pb-4" : "max-h-0"
          } `}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
