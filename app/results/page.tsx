import { Personalities } from "@/enums";
import Link from "next/link";

export default function ResultsPage() {
  return (
    <div>
      <PersonalitySummary />
      <div>
        <div>
          <TraitBreakdown />
          <CampusMatches />
        </div>
        <div>
          <KeyStrengths />
          <OptimalStudyHabits />
        </div>
      </div>
    </div>
  );
}

// prettier-ignore
const personalitySummary = {
  title: "The Balanced Scholar",
  description: "You possess a rare equilibrium between academic dedication and personal well-being. You plan ahead but remain adaptable, ensuring assignments are completed without sacrificing your mental health or social life.",
  personality: Personalities.Balanced,
};

function PersonalitySummary() {
  return (
    <section>
      <hgroup>
        <small>Your Profile Match</small>
        <h1>{personalitySummary.title}</h1>
        <p>{personalitySummary.description}</p>
      </hgroup>
    </section>
  );
}

const traitBreakdown = [
  {
    type: "Time Management",
    percentage: 85,
  },
  {
    type: "Adaptability",
    percentage: 72,
  },
  {
    type: "Stress Tolerance",
    percentage: 90,
  },
  {
    type: "Procrastination",
    percentage: 25,
  },
];

function TraitBreakdown() {
  return (
    <section>
      <hgroup>
        <h1>Trait Breakdown</h1>
      </hgroup>
      <div>
        {traitBreakdown.map(({ type, percentage }, i) => (
          <div key={i}>
            <div>
              <p>{type}</p>
              <p>{percentage}%</p>
            </div>
            <div>
              <div style={{ width: `${percentage}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const campusMatches = [
  {
    activity: "Student Council",
    description: "Leverage your organizational skills",
    href: "/error",
  },
  {
    activity: "Peer Tutoring",
    description: "Help others find their balance",
    href: "/error",
  },
  {
    activity: "Debate Club",
    description: "Structured, thoughtful engagement",
    href: "/error",
  },
];

function CampusMatches() {
  return (
    <section>
      <hgroup>
        <h1>CampusMatches</h1>
        <p>Based on your profile, we recommend these activities:</p>
      </hgroup>
      <ul>
        {campusMatches.map(({ activity, description, href }, i) => (
          <Link
            key={i}
            href={href}
          >
            <h2>{activity}</h2>
            <p>{description}</p>
          </Link>
        ))}
      </ul>
    </section>
  );
}

const keyStrengths = [
  {
    description: "Consistent Pacing",
    statement: "You rarely need to pull all-nighters.",
  },
  {
    description: "Clear Priorities",
    statement: "You know when to study and when to rest.",
  },
  {
    description: "Group Facilitator",
    statement: "Great at keeping team projects on track.",
  },
  {
    description: "Holistic Learning",
    statement: "You absorb concepts rather than memorizing.",
  },
];

function KeyStrengths() {
  return (
    <section>
      <hgroup>
        <h1>Key Strengths</h1>
      </hgroup>
      <div>
        {keyStrengths.map(({ description, statement }, i) => (
          <div key={i}>
            <h2>{description}</h2>
            <p>{statement}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const optimalStudyHabits = [
  "Use the Pomodoro technique (25min work, 5min break) to maintain focus.",
  "Schedule specific blocks for assignments early in the week.",
  "Mix group study sessions with independent review time.",
];

function OptimalStudyHabits() {
  return (
    <section>
      <h1>Optimal Study Habits</h1>
      <ul>
        {optimalStudyHabits.map((optimalStudyHabit, i) => (
          <li key={i}>{optimalStudyHabit}</li>
        ))}
      </ul>
    </section>
  );
}
