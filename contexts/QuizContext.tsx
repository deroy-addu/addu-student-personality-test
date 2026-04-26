"use client";

import React from "react";
import { choices, questions } from "@/data";

const QuizContext = React.createContext<{
  quiz: {
    /**
     * All of the questions asked in this quiz. This array is
     * in parallel with `choices`.
     */
    questions: string[];

    /**
     * All of the choices for the question. This array is in
     * parallel with `questions`.
     */
    choices: string[][];

    current: {
      /**
       * The current question.
       */
      question: string;

      /**
       * The choices for the current question.
       */
      choices: string[];

      /**
       * The chosen choice index for the current question.
       */
      answer: number;
    };
  };
  page: {
    /**
     * The current page number;
     */
    current: number;

    /**
     * Total number of pages.
     */
    max: number;
  };

  /**
   * The chosen choice indices. This array is in parallel with `questions`
   * and `choices`.
   */
  answers: number[];

  /**
   * Moves to the previous question.
   */
  previous: () => void;

  /**
   * Moves to the next question.
   */
  next: () => void;

  /**
   * Registers an answer to a question.
   */
  answer: (index: number) => void;
} | null>(null);

export default function QuizProvider({ children }: React.PropsWithChildren) {
  const [current, setCurrent] = React.useState<number>(0);
  const [answers, setAnswers] = React.useState<number[]>([]);

  const previous = () => {
    setCurrent((p) => {
      if (p > 0) {
        return p - 1;
      }

      return p;
    });
  };

  const next = () => {
    setCurrent((p) => {
      if (p < questions.length - 1) {
        return p + 1;
      }

      return p;
    });
  };

  const answer = (index: number) => {
    setAnswers((p) => {
      // Create a new reference to force a re-render.
      const next = [...p];

      next[current] = index;

      return next;
    });
  };

  return (
    <QuizContext
      value={{
        quiz: {
          questions,
          choices,
          current: {
            question: questions[current],
            choices: choices[current],
            answer: answers[current],
          },
        },
        page: {
          current: current + 1,
          max: questions.length,
        },
        answers,
        previous,
        next,
        answer,
      }}
    >
      {children}
    </QuizContext>
  );
}

export function useQuizContext() {
  const context = React.useContext(QuizContext);

  if (!context) {
    throw new Error(
      `${useQuizContext.name} must be used within a ${QuizProvider.name}`,
    );
  }

  return context;
}
