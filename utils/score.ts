import { Characteristics, Personalities } from "@/enums";

/**
 * Converts answer counts into percentage distribution per personality type.
 */
export function personalityScore(
  answerCounts: Record<Personalities, number>,
  totalQuestions: number,
): Record<Personalities, number> {
  const percentages = {} as Record<Personalities, number>;

  const entries = Object.entries(answerCounts) as [Personalities, number][];

  for (const [personality, count] of entries) {
    const ratio = count / totalQuestions;
    const percentage = ratio * 100;

    percentages[personality] = percentage;
  }

  return percentages;
}

/**
 * Computes characteristic scores based on personality percentages and weights.
 */
export function characteristicScore(
  personalityPercentages: Record<Personalities, number>,
  weightsByCharacteristic: Record<
    Characteristics,
    Record<Personalities, number>
  >,
): Record<Characteristics, number> {
  const results = {} as Record<Characteristics, number>;

  const characteristicEntries = Object.entries(weightsByCharacteristic) as [
    Characteristics,
    Record<Personalities, number>,
  ][];

  for (const [characteristic, weightsPerPersonality] of characteristicEntries) {
    let weightedSum = 0;

    const personalityEntries = Object.entries(personalityPercentages) as [
      Personalities,
      number,
    ][];

    for (const [personality, percentage] of personalityEntries) {
      const weight = weightsPerPersonality[personality];
      const contribution = percentage * weight;

      weightedSum += contribution;
    }

    const normalizedScore = weightedSum / 100;

    results[characteristic] = normalizedScore;
  }

  return results;
}
