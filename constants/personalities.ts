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
    textColor: "text-procrastinator",
    bgColor: "bg-procrastinator-subtle",
  },
  [Personalities.Crammer]: {
    Icon: FaFire,
    textColor: "text-crammer",
    bgColor: "bg-crammer-subtle",
  },
  [Personalities.Balanced]: {
    Icon: FaScaleBalanced,
    textColor: "text-balanced",
    bgColor: "bg-balanced-subtle",
  },
  [Personalities.Responsible]: {
    Icon: FaClipboardCheck,
    textColor: "text-responsible",
    bgColor: "bg-responsible-subtle",
  },
};
