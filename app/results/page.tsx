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
import { characteristicStyles, links, personalityStyles } from "@/constants";
import { Characteristics, Personalities } from "@/enums";
import { FaChartPie } from "react-icons/fa6";
import { StorageKeys } from "@/data/storage";
import { useLocalStorage } from "@/hooks";
import { useRouter } from "next/navigation";

// Todo: Fix hydration issues.
export default function ResultsPage() {
  const router = useRouter();
  const [quizResult] = useLocalStorage<QuizResults>(StorageKeys.QuizResults);

  if (!quizResult) {
    router.push(links.quiz.path);
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
      <CapWidth>
        <section className="space-y-6 rounded-md bg-white p-8 shadow-md/5 outline outline-gray-300">
          <p>
            A <span className="text-lg font-bold">crammer</span> is a student
            who studies at the last minute, trying to absorb as much as possible
            right before an exam. While this can sometimes work, it relies on
            managing energy, focus, and timing. This means students with intense
            study bursts, taking brief rests or naps to help retention, and
            avoiding distractions right before sleep so information sticks
            better. However, sudden changes in routine or unhealthy habits can
            hurt one&apos;s performance more than help.
          </p>
          <p>
            To make this approach more effective, combine it with{" "}
            <a
              href="https://hubstaff.com/blog/pareto-principle/"
              className="text-blue-600 underline"
            >
              High-Priority Planning (the 80/20 Rule)
            </a>
            . Focus on the most important topics that are most likely to appear
            on the exam instead of trying to cover everything. Pair this with
            short, focused study sessions and quick rest periods to maximize
            both efficiency and memory.
          </p>
        </section>
      </CapWidth>
      <CapWidth>
        <section className="space-y-6 rounded-md bg-white p-8 shadow-md/5 outline outline-gray-300">
          <p>
            A <span className="text-lg font-bold">balanced</span> student is one
            who manages academics alongside their physical, emotional, and
            social well-being instead of focusing only on schoolwork. This type
            of student understands that good performance isn&apos;t just about
            studying more—it also depends on proper sleep, healthy habits,
            relationships, and time for rest and activities. When students are
            overly tired, stressed, or neglect other parts of life, their
            learning and performance actually suffer.
          </p>
          <p>
            To support this, a useful study technique is{" "}
            <a
              href="https://lsc.cornell.edu/how-to-study/studying-for-and-taking-exams/guidelines-for-creating-a-study-schedule/"
              className="text-blue-600 underline"
            >
              balanced scheduling
            </a>{" "}
            (work–rest cycles)—plan study time alongside breaks, sleep,
            exercise, and leisure so your energy and focus stay consistent.
            Instead of overloading on study, mix focused sessions with recovery
            time (like hobbies or relaxation), which helps maintain motivation,
            reduce burnout, and improve overall learning efficiency.
          </p>
        </section>
      </CapWidth>
      <CapWidth>
        <section className="space-y-6 rounded-md bg-white p-8 shadow-md/5 outline outline-gray-300">
          <p>
            A <span className="text-lg font-bold">responsible</span> student is
            someone who consistently meets expectations—completing work on time,
            preparing for class, and actively participating. But being
            responsible doesn&apos;t mean being perfect; it also means taking
            initiative when things go wrong—asking for help, communicating with
            teachers, doing partial work instead of nothing, and finding ways to
            stay on track even when struggling. Responsibility is really about
            effort, follow-through, and problem-solving, not just getting
            everything done flawlessly.
          </p>
          <p>
            A helpful study technique for this type is the{" "}
            <a
              href="https://www.todoist.com/productivity-methods/pomodoro-technique"
              className="text-blue-600 underline"
            >
              Pomodoro Technique
            </a>
            —work in short, focused intervals (about 25 minutes), then take a
            5-minute break. This keeps you productive without burning out, makes
            it easier to stay consistent with responsibilities, and helps you
            steadily complete tasks step by step.
          </p>
        </section>
      </CapWidth>
      <CapWidth>
        <section className="space-y-6 rounded-md bg-white p-8 shadow-md/5 outline outline-gray-300">
          <p>
            A <span className="text-lg font-bold">procrastinator</span>{" "}
            isn&apos;t just lazy—they delay tasks to avoid stress, fear, or
            self-doubt, often telling themselves they &quot;work better under
            pressure.&quot; This habit protects their self-esteem but usually
            leads to more anxiety and rushed results. To overcome it, start by
            understanding why you procrastinate, then break tasks into small,
            manageable steps and begin with something easy to build momentum.
          </p>
          <p>
            Use simple study techniques like short timed sessions (e.g., 10–25
            minutes), the{" "}
            <a
              href="https://hubstaff.com/blog/swiss-cheese-method/"
              className="text-blue-600 underline"
            >
              Swiss cheese
            </a>{" "}
            method (doing small parts at a time), active learning (asking
            questions, summarizing), and rewarding yourself after progress. Stay
            focused on personal goals instead of fear, study in a
            distraction-free space, and keep expectations realistic—consistent
            small efforts are what actually reduce procrastination over time.
          </p>
        </section>
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
