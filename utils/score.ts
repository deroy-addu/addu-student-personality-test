/**
 * @remarks Computation is done by AI.
 */

import { Characteristics, Personalities } from "@/enums";

/**
 * Converts answer counts into percentage per personality.
 *
 * ```text
 * For each personality:
 *
 *   percentage =
 *     (number of answers for that personality / total number of questions)
 *     * 100
 *
 * All percentages combined should add up to 100%.
 * ```
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
 * Computes characteristic scores using personality percentages and weights.
 *
 * ```text
 * For each characteristic:
 *
 *   1. Multiply each personality percentage by its weight
 *   2. Add all those values together
 *   3. Divide the total by 100
 *
 * Formula:
 *
 *   characteristic_score =
 *     sum(personality_percentage * weight) / 100
 *
 * Notes:
 * - Weights usually range from 0 to 1
 * - Final score will also be between 0 and 1
 * ```
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
