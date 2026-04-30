import { Characteristics, Personalities } from "@/enums";
import {
  FaClipboardCheck,
  FaFire,
  FaHourglassHalf,
  FaScaleBalanced,
} from "react-icons/fa6";

export const personalityStyles = {
  [Personalities.Procrastinator]: {
    Icon: FaHourglassHalf,
    color: "text-procrastinator",
    bg: "bg-procrastinator",
    bgSubtle: "bg-procrastinator-subtle",
  },
  [Personalities.Crammer]: {
    Icon: FaFire,
    color: "text-crammer",
    bg: "bg-crammer",
    bgSubtle: "bg-crammer-subtle",
  },
  [Personalities.Balanced]: {
    Icon: FaScaleBalanced,
    color: "text-balanced",
    bg: "bg-balanced",
    bgSubtle: "bg-balanced-subtle",
  },
  [Personalities.Responsible]: {
    Icon: FaClipboardCheck,
    color: "text-responsible",
    bg: "bg-responsible",
    bgSubtle: "bg-responsible-subtle",
  },
};

export const characteristicStyles = {
  [Characteristics.TimeManagement]: {
    bg: "bg-blue-500",
  },
  [Characteristics.Discipline]: {
    bg: "bg-indigo-500",
  },
  [Characteristics.Consistency]: {
    bg: "bg-purple-500",
  },
  [Characteristics.Focus]: {
    bg: "bg-violet-500",
  },
  [Characteristics.StressHandling]: {
    bg: "bg-pink-500",
  },
  [Characteristics.PlanningAbility]: {
    bg: "bg-cyan-500",
  },
  [Characteristics.MotivationStability]: {
    bg: "bg-teal-500",
  },
  [Characteristics.Accountability]: {
    bg: "bg-green-500",
  },
  [Characteristics.WorkEthic]: {
    bg: "bg-emerald-500",
  },
  [Characteristics.Adaptability]: {
    bg: "bg-lime-500",
  },
  [Characteristics.Prioritization]: {
    bg: "bg-yellow-500",
  },
  [Characteristics.Efficiency]: {
    bg: "bg-amber-500",
  },
  [Characteristics.SelfControl]: {
    bg: "bg-orange-500",
  },
  [Characteristics.LearningSpeed]: {
    bg: "bg-red-500",
  },
  [Characteristics.Reliability]: {
    bg: "bg-rose-500",
  },
  [Characteristics.GoalOrientation]: {
    bg: "bg-sky-500",
  },
  [Characteristics.Resilience]: {
    bg: "bg-fuchsia-500",
  },
  [Characteristics.AttentionToDetail]: {
    bg: "bg-slate-500",
  },
  [Characteristics.Independence]: {
    bg: "bg-gray-500",
  },
  [Characteristics.DecisionMaking]: {
    bg: "bg-zinc-500",
  },
};
