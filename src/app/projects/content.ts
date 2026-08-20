import type { IProject } from "./types";

export const TITLE = "Our Projects";
export const DESCRIPTION = "Tools built by our members for QU students. Open source and open to contributions.";

export const PROJECTS:IProject[] = [
  {
    name: "CSEWiki",
    description: "A community wiki for Computer Science and Engineering students at Qatar University. Course guides, study resources, and advice, all in one place.",
    image: "/projects/csewiki.png",
    link: "https://csewiki.qu.acm.org",
    repo: "https://github.com/acm-qu/Enhanced-CSE"
  },
  {
    name: "Better.Schedule",
    description: "Paste your schedule text from myQU or myBanner and get a clean weekly timetable. Customize it, then export it as a PDF or JPEG.",
    image: "/projects/better-schedule.png",
    link: "https://better-schedule.qu.acm.org",
    repo: "https://github.com/acm-qu/better-schedule"
  }
]
