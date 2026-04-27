import AdduImage from "@/assets/addu.png";
import { links, personalities } from "@/constants";
import { Personalities } from "@/enums";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaRegClock, FaShieldHalved } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <div className="space-y-16">
      <Header />
      <TypesOfPersonalities />
      <PrivacyAndLogistics />
    </div>
  );
}

function Header() {
  return (
    <header className="grid grid-cols-[auto_minmax(0,1500)_auto]">
      <div />
      <div className="grid grid-cols-2 gap-12">
        <div>
          <Image
            src={AdduImage}
            alt="Addu Image"
            className="w-full rounded-md"
          />
        </div>
        <div className="space-y-4 self-center">
          <hgroup className="space-y-4">
            <h1 className="font-serif text-4xl font-semibold">
              Discover your learning style.
            </h1>
            <p className="text-gray-500">
              Take our comprehensive 5-minute personality test to find out what
              kind of student you really are. Optimize your study habits based
              on your unique profile.
            </p>
          </hgroup>
          <div className="flex items-center gap-4">
            <Link
              href={links.quiz.path}
              className="rounded-md bg-gray-900 px-4 py-2 text-white"
            >
              Start Quiz
            </Link>
            <small className="flex items-center gap-1 text-sm text-gray-500">
              <FaRegClock /> Takes 5 minutes
            </small>
          </div>
        </div>
      </div>
      <div />
    </header>
  );
}

// prettier-ignore
const typesOfPersonalities = [
  {
    personality: Personalities.Procrastinator,
    description: "Thrives under pressure but often sacrifices sleep. You need structured deadlines to perform at your best.",
  },
  {
    personality: Personalities.Crammer,
    description: "Master of the all-nighter. You absorb massive amounts of information in short, intense bursts before exams.",
  },
  {
    personality: Personalities.Balanced,
    description: "Maintains a healthy work-life mix. You study consistently but know when to close the books and relax.",
  },
  {
    personality: Personalities.Responsible,
    description: "Syllabus is your bible. You complete assignments days in advance and never miss a scheduled reading.",
  },
];

function TypesOfPersonalities() {
  return (
    <section className="grid grid-cols-[auto_minmax(0,1500)_auto] bg-gray-100 py-12">
      <div />
      <div>
        <hgroup className="space-y-4 text-center">
          <h1 className="font-serif text-4xl">
            Four Types of Student Personalities
          </h1>
          <p className="text-gray-500">
            Understanding your category helps tailor your academic approach for
            maximum success.
          </p>
        </hgroup>
        <div className="my-12 grid grid-cols-4 gap-4">
          {typesOfPersonalities.map(({ personality, description }) => {
            const { Icon, color, bgSubtle } = personalities[personality];

            return (
              <div
                key={personality}
                className="rounded-md bg-white p-12 shadow-md/5"
              >
                <div
                  className={`${color} ${bgSubtle} w-fit rounded-full p-4 text-xl`}
                >
                  <Icon />
                </div>
                <h2 className="mt-4 text-lg font-semibold">
                  The {personality}
                </h2>
                <p className="mt-2 text-gray-500">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div />
    </section>
  );
}

// prettier-ignore
const privacyAndLogistics = [
  {
    title: "100% Anonymous",
    statement: "Your results are entirely private and are not linked to your academic records.",
  },
  {
    title: "Time Commitment",
    statement: "The assessment consists of 20 multiple-choice questions and takes approximately 5 minutes.",
  },
  {
    title: "Actionable Insights",
    statement: "Upon completion, you'll receive a detailed breakdown of your habits and custom study strategies.",
  },
];

function PrivacyAndLogistics() {
  return (
    <section className="grid grid-cols-[auto_minmax(0,1500)_auto]">
      <div />
      <div className="mx-auto w-fit space-y-4 rounded-md border border-gray-200 bg-gray-50 p-12">
        <hgroup className="flex items-center gap-4 text-xl">
          <FaShieldHalved className="text-2xl" />
          <h1 className="font-serif">Privacy & Logistics</h1>
        </hgroup>
        <ul className="space-y-2 text-gray-500">
          {privacyAndLogistics.map(({ title, statement }, i) => (
            <li
              key={i}
              className="flex items-center gap-2"
            >
              <FaCheck className="text-emerald-500" />
              <p>
                <span className="font-semibold">{title}: </span>
                {statement}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div />
    </section>
  );
}
