import { characteristics, choicePersonalityLookup } from "@/data";
import { Characteristics, Personalities } from "@/enums";

export function computePersonalityScore(
  answers: number[],
  totalQuestions: number,
) {
  const personalityCounts = {
    [Personalities.Procrastinator]: 0,
    [Personalities.Crammer]: 0,
    [Personalities.Balanced]: 0,
    [Personalities.Responsible]: 0,
  };

  for (const answer of answers) {
    personalityCounts[choicePersonalityLookup[answer]] += 1;
  }

  if (totalQuestions <= 0) {
    throw new Error("Total questions must be greather than 0.");
  }

  const personalityScore = {} as PersonalityScore;

  for (const personalityKey of Object.values(Personalities)) {
    personalityScore[personalityKey] =
      personalityCounts[personalityKey] / totalQuestions;
  }

  return personalityScore;
}

export function computeCharacteristicScore(
  personalityScore: Record<Personalities, number>,
) {
  const characteristicScore = {} as CharacteristicScore;

  for (const characteristicKey of Object.values(Characteristics)) {
    let weightedSum = 0;

    for (const personalityKey of Object.values(Personalities)) {
      weightedSum +=
        personalityScore[personalityKey] *
        characteristics[characteristicKey][personalityKey];
    }

    characteristicScore[characteristicKey] = weightedSum;
  }

  return characteristicScore;
}
