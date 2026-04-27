// prettier-ignore
export const questions = [
  "If you are given a written report due in 7 days, how do you usually plan and execute the work from start to finish?",
  "When preparing for a major exam covering multiple chapters, what specific study method do you typically use?",
  "How would you describe your usual weekday study routine in terms of time, structure, and consistency?",
  "When working on a group project with 4-5 members, what is your typical behavior from planning to submission?",
  "When you encounter a lesson topic that you do not understand after the first explanation, what steps do you take?",
  "On the night before a submission deadline at 11:59 PM, what does your workflow usually look like?",
  "Over a typical school week, how often do you intentionally revisit previous lessons or notes, and how do you do it?",
  "While studying in a noisy or distracting environment, what specific actions do you take to stay focused?",
  "If you have 3 different assignments due within the same week, how do you organize and prioritize them?",
  "What concrete factor or situation most consistently pushes you to start studying or completing school tasks?",
  "When you realize you are behind in multiple subjects, what exact steps do you take to catch up?",
  "How closely do you follow a planned study schedule (if you create one), and what causes you to stick or deviate?",
  "When you have 2-3 hours of free time on a weekday, how do you usually decide whether to study or rest?",
  "How do you divide your time between academic responsibilities and personal or leisure activities in a typical week?",
  "When assigned a complex project with unclear instructions, what is your first concrete action?",
  "Before an unexpected quiz announced at the start of class, how do you usually prepare within a short time frame?",
  "How consistent are you in completing homework assignments on the exact day they are assigned?",
  "When a teacher returns graded work with comments, how do you typically process and act on that feedback?",
  "How do you physically or digitally organize your notes, files, and study materials for different subjects?",
  "In general, how do you approach academic responsibilities in terms of urgency, discipline, and long-term planning?",
];

/**
 * Each subarray index elements corresponds to a personality type.
 *
 * - `0` - Procrastinator
 * - `1` - Crammer
 * - `3` - Balanced
 * - `4` - Responsible
 */
// prettier-ignore
export const choices = [
  [
    "I wait for several days before starting, then write everything in one or two rushed sessions close to the deadline.",
    "I start only when pressure builds, usually 1-2 days before due date, and try to finish everything quickly.",
    "I start within the first few days, divide the report into sections, and work on it gradually until completion.",
    "I immediately break down requirements on day one, create an outline, and finish early with time for revision.",
  ],
  [
    "I only reread notes the night before the exam and try to memorize key points quickly.",
    "I study by rereading the entire module repeatedly a few days before the exam without structured planning.",
    "I create summaries or reviewers per chapter and study them over several days leading up to the exam.",
    "I use spaced repetition (daily or every other day), practice questions, and active recall consistently before the exam period.",
  ],
  [
    "I do not have a fixed study routine and study only when I feel like or when deadlines are near.",
    "I study irregularly, usually in long sessions only when workload becomes heavy.",
    "I study a few times a week with some planning, but I sometimes skip sessions depending on mood or workload.",
    "I follow a consistent daily or near-daily schedule with set study hours and planned subjects.",
  ],
  [
    "I let others assign tasks to me and usually contribute only near the final submission stage.",
    "I participate minimally and complete only the parts assigned to me right before deadlines.",
    "I complete my assigned tasks steadily and communicate occasionally with the group.",
    "I actively help plan tasks, track progress, coordinate with members, and ensure timely completion.",
  ],
  [
    "I stop working and avoid the topic, hoping to understand it later or skip it if possible.",
    "I rely on memorization or shortcuts without fully understanding the concept.",
    "I review notes, search online explanations, or ask classmates when I do not understand.",
    "I break the topic into smaller parts, revisit fundamentals, and practice related problems until I understand.",
  ],
  [
    "I start working only a few hours before midnight and rush everything without reviewing.",
    "I stay up very late finishing everything in one continuous session with little rest.",
    "I review what I have completed, fix errors, and finalize work in a structured way before submission.",
    "I usually finish earlier and only use the night before for final proofreading and minor adjustments.",
  ],
  [
    "I rarely review past lessons unless there is an upcoming exam.",
    "I only review when I feel I have forgotten something important or when prompted by deadlines.",
    "I review once or twice a week using notes or summaries.",
    "I regularly review past lessons using spaced repetition or scheduled review sessions.",
  ],
  [
    "I get distracted easily and usually stop studying until the environment becomes quiet.",
    "I try to continue but often lose focus and take long breaks due to distractions.",
    "I use basic strategies like moving to a quieter place or using headphones to maintain focus.",
    "I actively eliminate distractions (phone off, workspace setup) and maintain strict focus routines.",
  ],
  [
    "I choose one assignment randomly and work on it only when the deadline becomes urgent.",
    "I focus on the easiest task first and delay harder ones until later.",
    "I create a simple list and work through assignments based on due dates.",
    "I prioritize based on difficulty and due date, break tasks into steps, and schedule completion times.",
  ],
  [
    "I only start studying when I feel extreme pressure or fear of failing.",
    "I am motivated mainly when deadlines are very close or when grades are at risk.",
    "I am motivated when I see improvement in my performance or understanding.",
    "I am motivated by personal discipline, goals, and long-term academic achievement.",
  ],
  [
    "I try to cram everything quickly once I realize I am behind.",
    "I pick only urgent tasks and ignore others until they become critical.",
    "I create a catch-up list and slowly work through missed lessons over several days.",
    "I immediately reorganize my schedule, prioritize backlog tasks, and systematically recover missed work.",
  ],
  [
    "I rarely stick to any study schedule I create and often abandon it after a few days.",
    "I follow my schedule only when I am highly motivated or under pressure.",
    "I follow my schedule most of the time but occasionally shift sessions due to workload.",
    "I consistently follow my schedule and adjust it intentionally when needed without losing structure.",
  ],
  [
    "I usually choose rest or entertainment over studying unless deadlines are very near.",
    "I study only if I feel guilty or pressured, otherwise I spend free time on leisure activities.",
    "I balance free time between rest and light reviewing depending on my workload.",
    "I intentionally allocate part of my free time for review or study even without deadlines.",
  ],
  [
    "I often mix schoolwork and personal time without planning, leading to overlap and stress.",
    "I focus heavily on one side (either school or personal time) and neglect the other.",
    "I try to separate study and personal time but occasionally lose balance during busy weeks.",
    "I maintain a structured schedule that clearly separates study time and personal time.",
  ],
  [
    "I ignore unclear instructions and wait until others explain what to do.",
    "I guess what is required and start working without fully understanding the task.",
    "I ask clarification from classmates or teacher before starting the project.",
    "I carefully analyze instructions, break them down, and create a plan before starting.",
  ],
  [
    "I do not prepare and rely on whatever I remember during the quiz.",
    "I quickly skim notes right before class starts without structured review.",
    "I review key points or summaries for a short time before the quiz.",
    "I maintain regular study habits so I am already prepared even without last-minute review.",
  ],
  [
    "I frequently submit homework late or incomplete due to poor time management.",
    "I complete homework but often close to or past the deadline.",
    "I usually complete homework on time but occasionally delay difficult tasks.",
    "I consistently complete homework on the day it is assigned or well before the deadline.",
  ],
  [
    "I read feedback but do not make changes to my work or study habits.",
    "I understand feedback but rarely apply it consistently.",
    "I try to apply feedback to future tasks but sometimes forget or ignore parts of it.",
    "I actively revise my approach based on feedback and track improvements over time.",
  ],
  [
    "My notes are scattered across different notebooks or files without clear structure.",
    "I keep notes in one place but they are not well organized or labeled.",
    "I organize notes by subject but sometimes have difficulty finding older materials.",
    "I use a structured system (folders, labels, or digital tools) to keep everything organized and accessible.",
  ],
  [
    "I treat academic work as something to do only when required or unavoidable.",
    "I rely heavily on urgency and pressure to complete academic tasks.",
    "I balance urgency and planning depending on workload and deadlines.",
    "I consistently plan ahead, manage deadlines early, and maintain disciplined academic habits.",
  ],
];
