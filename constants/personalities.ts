import { Personalities } from "@/enums";
import {
  FaClipboardCheck,
  FaFire,
  FaHourglassHalf,
  FaScaleBalanced,
} from "react-icons/fa6";

export const personalities = {
  [Personalities.Procrastinator]: { Icon: FaHourglassHalf },
  [Personalities.Crammer]: { Icon: FaFire },
  [Personalities.Balanced]: { Icon: FaScaleBalanced },
  [Personalities.Responsible]: { Icon: FaClipboardCheck },
};
