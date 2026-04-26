import AdduImage from "@/assets/addu.png";
import { links, personalities } from "@/constants";
import { Personalities } from "@/enums";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaRegClock, FaShieldHalved } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <div className="mt-20 space-y-16 pt-16">
      <Header />
      <TypesOfPersonalities />
      <PrivacyAndLogistics />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="capped-width">
      <div />
      <div className="grid grid-cols-2 gap-12">
        <div>
          <Image
            src={AdduImage}
            alt="Addu Image"
            className="w-full rounded"
          />
        </div>
        <div className="space-y-4 self-center">
          <hgroup className="space-y-4">
            <h1 className="font-serif text-4xl">
              Discover Your Learning Style.
            </h1>
            <p className="text-text-secondary">
              Take our comprehensive 5-minute personality test to find out what
              kind of student you really are. Optimize your study habits based
              on your unique profile.
            </p>
          </hgroup>
          <div className="flex items-center gap-4">
            <Link
              href={links.quiz}
              className="primary-action"
            >
              Start Quiz
            </Link>
            <small className="text-text-secondary flex items-center gap-1 text-sm">
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
    <section className="capped-width bg-bg-secondary py-12">
      <div />
      <div>
        <hgroup className="space-y-4 text-center">
          <h1 className="font-serif text-4xl">
            Four Types of Student Personalities
          </h1>
          <p className="text-text-secondary">
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
                className="rounded bg-white p-12 shadow-md/5"
              >
                <div
                  className={`${color} ${bgSubtle} w-fit rounded-full p-4 text-xl`}
                >
                  <Icon />
                </div>
                <h2 className="mt-4 text-lg font-semibold">
                  The {personality}
                </h2>
                <p className="text-text-secondary mt-2">{description}</p>
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
    <section className="capped-width">
      <div />
      <div className="mx-auto w-fit space-y-4 rounded border border-slate-200 bg-slate-50 p-12">
        <hgroup className="flex items-center gap-4 text-xl">
          <FaShieldHalved className="text-2xl" />
          <h1 className="font-serif">Privacy & Logistics</h1>
        </hgroup>
        <ul className="text-text-secondary space-y-2">
          {privacyAndLogistics.map(({ title, statement }, i) => (
            <li
              key={i}
              className="flex items-center gap-2"
            >
              <FaCheck className="text-accent-green" />
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

function Footer() {
  return (
    <footer className="bg-bg-tertiery capped-width h-full">
      <div />
      <div className="text-text-tertiery py-4 text-center">
        &copy; 2026{" "}
        <a
          href="https://www.addu.edu.ph/"
          target="_blank"
          className="hover:underline"
        >
          Ateneo de Davao University
        </a>
        . All rights reserved.
      </div>
      <div />
    </footer>
  );
}
