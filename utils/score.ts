import { characteristics } from "@/data";
import { Characteristics, Personalities } from "@/enums";

export function computePersonalityScore(
  personalityCounts: Record<Personalities, number>,
  totalQuestions: number,
) {
  if (totalQuestions <= 0) {
    throw new Error("Total questions must be greather than 0.");
  }

  const personalityScore = {} as PersonalityScore;

  for (const personalityKey of Object.values(Personalities)) {
    personalityScore[personalityKey] =
      (personalityCounts[personalityKey] / totalQuestions) * 100;
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

    characteristicScore[characteristicKey] = weightedSum / 100;
  }

  return characteristicScore;
}
