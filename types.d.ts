/**
 * Shows how much of a personality the respondent is.
 */
type PersonalityScore = Record<Personalities, number>;

/**
 * Shows how much of a characteristic the respondent possess.
 */
type CharacteristicScore = Record<Characteristics, number>;

/**
 * The quiz results data that is stored in the storage.
 */
interface QuizResults {
  score: {
    /**
     * The personality score result.
     */
    personality: PersonalityScore;

    /**
     * The characteristic score result.
     */
    characteristic: CharacteristicScore;
  };

  quiz: {
    /**
     * Questions used on the quiz. In parallel with `choices`.
     */
    questions: string[];

    /**
     * Choices for the questions. In parallel with `questions`.
     */
    choices: string[][];

    /**
     * Chosen indices for choices. In parallel with `choices`.
     */
    answers: number[];
  };
}
