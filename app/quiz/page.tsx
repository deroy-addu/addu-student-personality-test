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
    <main className="capped-width grid min-h-screen place-items-center">
      <div />
      <div className="mx-auto w-full space-y-12">
        <Question />
        <Progress />
      </div>
      <div />
    </main>
  );
}

function Progress() {
  const {
    page: { current, max },
  } = useQuizContext();

  const progress = (current / max) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full text-center">
      <p className="text-text-primary font-semibold">
        {current} of {max}
      </p>
      <div className="mt-2 h-4 overflow-hidden bg-slate-200">
        <div
          style={{ width: `${progress}%` }}
          className="bg-text-primary h-full"
        />
      </div>
    </div>
  );
}

function Question() {
  return (
    <article className="space-y-12 rounded">
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
            "outline-border rounded shadow-md/5 outline",
            current.answer === i && "outline-accent-blue bg-blue-50 outline-2",
          )}
        >
          <button
            onClick={() => answer(i)}
            className="flex w-full items-center gap-4 px-8 py-4 text-start"
          >
            {current.answer === i ? (
              <FaRegCircleDot className="text-accent-blue" />
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
        className="ghost-action btn-with-icon"
      >
        <FaArrowLeft />
        Back
      </button>
      <button
        onClick={() => {
          if (isLastQuestion) {
            router.push(links.results);
          } else {
            next();
          }
        }}
        className="primary-action btn-with-icon"
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
