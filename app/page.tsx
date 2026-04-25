import AdduImage from "@/assets/addu.png";
import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Personalities />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <div>
        <Image
          src={AdduImage}
          alt="Addu Image"
        />
      </div>
      <div>
        <hgroup>
          <h1>Discover Your Learning Style.</h1>
          <p>
            Take our comprehensive 5-minute personality test to find out what
            kind of student you really are. Optimize your study habits based on
            your unique profile.
          </p>
        </hgroup>
        <div>
          <Link href={links.quiz}>Start Quiz</Link>
          <small>Takes 5 minutes</small>
        </div>
      </div>
    </header>
  );
}

// prettier-ignore
const personalities = [
  {
    personality: "Procrastinator",
    description: "Thrives under pressure but often sacrifices sleep. You need structured deadlines to perform at your best.",
  },
  {
    personality: "Crammer",
    description: "Master of the all-nighter. You absorb massive amounts of information in short, intense bursts before exams.",
  },
  {
    personality: "Balanced",
    description: "Maintains a healthy work-life mix. You study consistently but know when to close the books and relax.",
  },
  {
    personality: "Responsible",
    description: "Syllabus is your bible. You complete assignments days in advance and never miss a scheduled reading.",
  },
];

function Personalities() {
  return (
    <section>
      <hgroup>
        <h1>Four Types of Student Personalities</h1>
        <p>
          Understanding your category helps tailor your academic approach for
          maximum success.
        </p>
      </hgroup>
      <div>
        {personalities.map(({ personality, description }) => (
          <div key={personality}>
            <h2>The {personality}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      &copy; 2026 Ateneo de Davao University. All rights reserved.
    </footer>
  );
}
