import { Characteristics, Personalities } from "@/enums";

/**
 * Characteristics and their weights for each personality type.
 */
export const characteristics = {
  [Characteristics.TimeManagement]: {
    [Personalities.Procrastinator]: 0.1,
    [Personalities.Crammer]: 0.3,
    [Personalities.Balanced]: 0.7,
    [Personalities.Responsible]: 1,
  },
};
