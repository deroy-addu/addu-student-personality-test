"use client";

import { links } from "@/constants";
import { useQuizContext } from "@/contexts/QuizContext";
import { cn } from "@/utils";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegCircle,
  FaRegCircleDot,
} from "react-icons/fa6";

export default function QuizPage() {
  return (
    <>
      <div className="grid grid-cols-[auto_minmax(0,1500)_auto] place-items-center">
        <div />
        <div className="mx-auto w-full space-y-12">
          <Question />
        </div>
        <div />
      </div>
      <Progress />
    </>
  );
}

function Progress() {
  const {
    page: { current, max },
  } = useQuizContext();

  const progress = (current / max) * 100;

  return (
    <div className="fixed bottom-0 w-full text-center">
      <p className="font-semibold text-gray-900">
        {current} of {max}
      </p>
      <div className="mt-2 h-4 overflow-hidden bg-gray-200">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-gray-900"
        />
      </div>
    </div>
  );
}

function Question() {
  return (
    <article className="space-y-12 rounded-md">
      <Question.Text />
      <Question.Choices />
      <Question.Navigator />
    </article>
  );
}

const Text = () => {
  const {
    quiz: {
      current: { question },
    },
  } = useQuizContext();

  return <h1 className="text-center font-serif text-4xl">{question}</h1>;
};

const Choices = () => {
  const {
    quiz: { current },
    answer,
  } = useQuizContext();

  return (
    <ul className="space-y-4">
      {current.choices.map((choice, i) => (
        <li
          key={i}
          className={cn(
            "rounded-md shadow-md/5 outline outline-gray-300",
            current.answer === i && "bg-blue-50 outline-2 outline-blue-500",
          )}
        >
          <button
            onClick={() => answer(i)}
            className="flex w-full items-center gap-4 px-8 py-4 text-start"
          >
            {current.answer === i ? (
              <FaRegCircleDot className="text-blue-500" />
            ) : (
              <FaRegCircle />
            )}
            {choice}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Navigator = () => {
  const {
    page: { current, max },
    previous,
    next,
  } = useQuizContext();
  const router = useRouter();
  const isLastQuestion = current === max;

  return (
    <div className="flex justify-between">
      <button
        onClick={previous}
        className="flex items-center gap-2 rounded-md px-4 py-2 text-gray-500 hover:bg-gray-100"
      >
        <FaArrowLeft />
        Back
      </button>
      <button
        onClick={() => {
          if (isLastQuestion) {
            router.push(links.results.path);
          } else {
            next();
          }
        }}
        className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white"
      >
        {isLastQuestion ? "Finish Quiz" : "Next Question"}
        <FaArrowRight />
      </button>
    </div>
  );
};

Question.Text = Text;
Question.Choices = Choices;
Question.Navigator = Navigator;
