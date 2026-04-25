"use client";

import { useQuizContext } from "@/contexts/QuizContext";

export default function QuizPage() {
  return (
    <main>
      <Progress />
      <Question />
    </main>
  );
}

function Progress() {
  const {
    page: { current, max },
  } = useQuizContext();

  const progress = (current / max) * 100;

  return (
    <div>
      <span>
        Question {current} of {max}
      </span>
      <div>
        <div style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

function Question() {
  return (
    <article>
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

  return <h1>{question}</h1>;
};

const Choices = () => {
  const {
    quiz: {
      current: { choices },
    },
    answer,
  } = useQuizContext();

  return (
    <ul>
      {choices.map((choice, i) => (
        <li key={i}>
          <button onClick={() => answer(i)}>{choice}</button>
        </li>
      ))}
    </ul>
  );
};

const Navigator = () => {
  const { previous, next } = useQuizContext();

  return (
    <div>
      <button onClick={previous}>Back</button>
      <button onClick={next}>Next Question</button>
    </div>
  );
};

Question.Text = Text;
Question.Choices = Choices;
Question.Navigator = Navigator;
