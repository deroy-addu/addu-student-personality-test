import { Personalities } from "@/enums";
import {
  FaClipboardCheck,
  FaFire,
  FaHourglassHalf,
  FaScaleBalanced,
} from "react-icons/fa6";

export const personalities = {
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
