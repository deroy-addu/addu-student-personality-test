import { personalities } from "@/constants";
import { Personalities } from "@/enums";
import CapWidth from "@/layouts/CapWidth";
import { BiSolidZap } from "react-icons/bi";
import {
  FaBookOpen,
  FaBrain,
  FaChartPie,
  FaCheck,
  FaPeopleGroup,
} from "react-icons/fa6";

export default function ResultsPage() {
  return (
    <div className="space-y-16">
      <CapWidth>
        <PersonalitySummary />
      </CapWidth>
      <CapWidth>
        <div className="grid grid-cols-2 gap-12">
          <TraitBreakdown />
          <KeyStrengths />
        </div>
      </CapWidth>
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
  const { Icon, color, bg, bgSubtle } =
    personalities[personalitySummary.personality];

  return (
    <section className="flex items-center justify-center gap-12">
      <div className={`relative rounded-full p-12 ${bgSubtle}`}>
        <Icon className={`text-5xl ${color}`} />
        <span
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-semibold whitespace-nowrap text-white ${bg}`}
        >
          Type{" "}
          {Object.keys(personalities).indexOf(personalitySummary.personality) +
            1}
        </span>
      </div>
      <hgroup>
        <p className="text-gray-500">Your profile match</p>
        <h1 className="mt-1 font-serif text-4xl font-semibold">
          {personalitySummary.title}
        </h1>
        <p className="mt-2 text-gray-500">{personalitySummary.description}</p>
      </hgroup>
    </section>
  );
}

const traitBreakdown = [
  {
    type: "Time Management",
    percentage: 85,
    style: {
      backgroundColor: "bg-balanced",
    },
  },
  {
    type: "Adaptability",
    percentage: 72,
    style: {
      backgroundColor: "bg-responsible",
    },
  },
  {
    type: "Stress Tolerance",
    percentage: 90,
    style: {
      backgroundColor: "bg-crammer",
    },
  },
  {
    type: "Procrastination",
    percentage: 25,
    style: {
      backgroundColor: "bg-procrastinator",
    },
  },
];

function TraitBreakdown() {
  return (
    <section className="space-y-4 rounded-md bg-white p-8 shadow-md/5 outline outline-gray-300">
      <hgroup className="flex items-center gap-2 text-lg">
        <FaChartPie className="text-gray-900" />
        <h1 className="font-semibold">Trait Breakdown</h1>
      </hgroup>
      <div className="space-y-4">
        {traitBreakdown.map(({ type, percentage, style }, i) => (
          <div key={i}>
            <div className="flex items-center justify-between">
              <p>{type}</p>
              <p className="text-sm font-semibold text-gray-900">
                {percentage}%
              </p>
            </div>
            <div className="mt-2 h-2 overflow-hidden bg-gray-200">
              <div
                style={{ width: `${percentage}%` }}
                className={`h-full ${style.backgroundColor}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const keyStrengths = [
  {
    description: "Consistent Pacing",
    statement: "You rarely need to pull all-nighters.",
    style: {
      Icon: FaCheck,
      textColor: "text-blue-500",
      backgroundColor: "bg-blue-100",
    },
  },
  {
    description: "Clear Priorities",
    statement: "You know when to study and when to rest.",
    style: {
      Icon: FaBrain,
      textColor: "text-blue-500",
      backgroundColor: "bg-blue-100",
    },
  },
  {
    description: "Group Facilitator",
    statement: "Great at keeping team projects on track.",
    style: {
      Icon: FaPeopleGroup,
      textColor: "text-blue-500",
      backgroundColor: "bg-blue-100",
    },
  },
  {
    description: "Holistic Learning",
    statement: "You absorb concepts rather than memorizing.",
    style: {
      Icon: FaBookOpen,
      textColor: "text-blue-500",
      backgroundColor: "bg-blue-100",
    },
  },
];

function KeyStrengths() {
  return (
    <section className="rounded-md bg-white p-8 shadow-md/5 outline outline-gray-300">
      <hgroup className="flex items-center gap-2 text-lg">
        <BiSolidZap className="text-gray-900" />
        <h1 className="font-semibold">Key Strengths</h1>
      </hgroup>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {keyStrengths.map(
          (
            {
              description,
              statement,
              style: { Icon, textColor, backgroundColor },
            },
            i,
          ) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-md border border-gray-200 p-4"
            >
              <div
                className={`w-fit rounded-md p-4 text-xl ${backgroundColor}`}
              >
                <Icon className={`${textColor}`} />
              </div>
              <div>
                <h2 className="font-semibold">{description}</h2>
                <p className="text-sm text-gray-500">{statement}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
