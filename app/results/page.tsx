"use client";

/**
 * @fileoverview
 *
 * ⚠️ WIP - NOT PRODUCTION READY
 *
 * This module is unfinished and contains known issues, including hydration problems
 * and doesn't follow writing standards.
 */

import CapWidth from "@/layouts/CapWidth";
import { characteristicStyles, personalityStyles } from "@/constants";
import { Characteristics, Personalities } from "@/enums";
import { FaChartPie } from "react-icons/fa6";
import { StorageKeys } from "@/data/storage";
import { useLocalStorage } from "@/hooks";

// Todo: Fix hydration issues.
export default function ResultsPage() {
  const [quizResult] = useLocalStorage<QuizResults>(StorageKeys.QuizResults);

  if (!quizResult) {
    return null;
  }

  return (
    <div className="space-y-16">
      <CapWidth>
        <PersonalitySummary scores={quizResult.score.personality} />
      </CapWidth>
      <CapWidth>
        <TraitBreakdown scores={quizResult.score.characteristic} />
      </CapWidth>
    </div>
  );
}

// prettier-ignore
export function PersonalitySummary({ scores }: { scores: PersonalityScore}) {
  return (
    <section className="space-y-6 rounded-md bg-white p-8 shadow-md/5 outline outline-gray-300">
      <hgroup className="flex items-center gap-2 text-lg">
        <h1 className="font-semibold">Personality Breakdown</h1>
      </hgroup>

      <div className="space-y-4">
        {Object.entries(scores).map(([key, value]) => {
          const personality = key as Personalities;
          const percentage = Math.round(value * 100);

          const { Icon, bg, color } = personalityStyles[personality];

          return (
            <div key={personality}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className={`${color}`} />
                  <p className="font-medium">{personality}</p>
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  {percentage}%
                </p>
              </div>

              <div className="mt-2 h-2 overflow-hidden bg-gray-200">
                <div
                  className={`h-full ${bg}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TraitBreakdown({ scores }: { scores: CharacteristicScore }) {
  return (
    <section className="space-y-4 rounded-md bg-white p-8 shadow-md/5 outline outline-gray-300">
      <hgroup className="flex items-center gap-2 text-lg">
        <FaChartPie className="text-gray-900" />
        <h1 className="font-semibold">Trait Breakdown</h1>
      </hgroup>

      <div className="space-y-4">
        {Object.entries(scores).map(([key, value]) => {
          const type = key as Characteristics;
          const percentage = Math.round(value * 100);

          return (
            <div key={type}>
              <div className="flex items-center justify-between">
                <p>{type}</p>
                <p className="text-sm font-semibold text-gray-900">
                  {percentage}%
                </p>
              </div>

              <div className="mt-2 h-2 overflow-hidden bg-gray-200">
                <div
                  style={{ width: `${percentage}%` }}
                  className={`h-full ${characteristicStyles[type].bg}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
