// Ported from ElmikoTheNiceFella/better-schedule (constants.js + functions.js),
// extended with: building names, course codes, myBanner parsing, day-aware Ramadan,
// break computation, and time formatting.

const COLORS = { I10: "#1a8e18", H07: "#8e4f18", H12: "#1a8e18", C11: "#1a8e18", B05: "#55188e", B06: "#8e5f18", I09: "#343a40" };
const DAYS = { Sun: "Sunday", Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday" };
const RAMADAN_HOURS = {
  STT: { "05:00PM": "08:00PM", "06:00PM": "09:00PM", "07:00PM": "10:00PM", "03:30PM": "08:00PM" },
  MW: { "05:00PM": "08:00PM", "06:30PM": "09:30PM", "03:30PM": "08:00PM" }
};

export const TUTORIAL_LINK = "https://youtu.be/8JiQRGCsvWY";

export const DEMO_QU = `Calculus II Spring 2026 - 2025 - 1
MATH 102/ Lecture/ L03 ( Standard Letter )
January 18, 2026 - May 07, 2026
Sun,Tue,Thu 08:00 AM - 09:15 AM
C11- Science Building A012
Globalization Spring 2026 - 2025 - 1
INTA 206/ Lecture/ L04 ( Standard Letter )
January 18, 2026 - May 07, 2026
Mon,Wed 09:30 AM - 10:45 AM
B05- Main Men's Building 0213
Machine Learning Spring 2026 - 2025 - 1
CMPS 460/ Lecture/ L02 ( Standard Letter )
January 18, 2026 - May 07, 2026
Mon,Wed 02:00 PM - 03:15 PM
H07- College of Engineering BL024
Digital Logic Design Spring 2026 - 2025 - 1
CMPE 263/ Lab/ L51 ( Standard Letter )
January 18, 2026 - May 07, 2026
Thu 12:30 PM - 03:10 PM
H07- College of Engineering BL121
Principles of Management Spring 2026 - 2025 - 1
MAGT 101/ Lecture/ L07 ( Standard Letter )
January 18, 2026 - May 07, 2026
Mon,Wed 05:00 PM - 06:15 PM
H08- Business & Econ. Bldg. D207`;

export const DEMO_BANNER = `Arabic Language I | Arabic Language 100 Section L09 | Class Begin: 08/25/2024 | Class End: 12/05/2024
Registered
08/25/2024 -- 12/05/2024   Sunday,Tuesday
S
M
T
W
T
F
S
   03:30 PM - 04:45 PM Type: Class Location: All Building: I09- College of Law Room: A110
Instructor: ElKhrashy, Youssry (Primary)
CRN: 11045
Calculus I | Mathematics 101 Section L01 | Class Begin: 08/25/2024 | Class End: 12/05/2024
Registered
08/25/2024 -- 12/05/2024   Sunday,Tuesday,Thursday
S
M
T
W
T
F
S
   12:00 PM - 12:50 PM Type: Class Location: Male Designated Area Building: BCR- Corridor Room: I111
Instructor: El-Sanfaz, Mustafa (Primary)
CRN: 11333
Calculus I | Mathematics 101 Section B02 | Class Begin: 08/25/2024 | Class End: 12/05/2024
Registered
08/25/2024 -- 12/05/2024   Thursday
S
M
T
W
T
F
S
   01:00 PM - 01:50 PM Type: Lab Location: Male Designated Area Building: BCR- Corridor Room: I110
Instructor: Dabboorasad, Yousef (Primary)
CRN: 11668
History of Qatar | History 121 Section L06 | Class Begin: 08/25/2024 | Class End: 12/05/2024
Registered
08/25/2024 -- 12/05/2024   Sunday,Tuesday,Thursday
S
M
T
W
T
F
S
   05:00 PM - 05:50 PM Type: Class Location: All Building: H08- Business & Econ. Bldg. Room: D107
Instructor: Hayajneh, Raed (Primary)
CRN: 10590
Introduction to Psychology | Education Psychology 201 Section L01 | Class Begin: 08/25/2024 | Class End: 12/05/2024
Registered
08/25/2024 -- 12/05/2024   Monday,Wednesday
S
M
T
W
T
F
S
   03:30 PM - 04:45 PM Type: Class Location: All Building: I10- College of Education Room: C202
Instructor: ElSawaf, Mona
CRN: 12787
Islamic Culture | Dawa 111 Section L05 | Class Begin: 08/25/2024 | Class End: 12/05/2024
Registered
08/25/2024 -- 12/05/2024   Monday,Wednesday
S
M
T
W
T
F
S
   05:00 PM - 06:15 PM Type: Class Location: All Building: H08- Business & Econ. Bldg. Room: D214
Instructor: Laabdi, Mourad (Primary)
CRN: 12009`;

/* ------------- MAIN (myQU) ------------- */

function indexOfSemester(string) {
  if (string.includes("Spring")) return string.indexOf("Spring");
  if (string.includes("Fall")) return string.indexOf("Fall");
  if (string.includes("Summer")) return string.indexOf("Summer");
  if (string.includes("Winter")) return string.indexOf("Winter");
}

function splitLectureAndLab(data) {
  const lines = data.split("\n");
  let newData = "";
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("Lecture") && lines[i].includes("Lab")) {
      let line = lines[i].split("/");
      newData += line.join("/") + "\n";
      newData += lines[i + 4] + "\n" + lines[i + 5] + "\n";
      newData += lines[i - 1] + "\n";
      newData += line.join("/") + "\n";
      newData += lines[i + 2] + "\n" + lines[i + 3] + "\n";
      i += 5;
    } else {
      newData += lines[i] + "\n";
    }
  }
  return newData;
}

function infoCheck(courseData) {
  return courseData.name && courseData.type && courseData.timing && courseData.room && courseData.building;
}

export const getCourseData = (rawData, ramadan = false) => {
  const data = splitLectureAndLab(rawData);
  const regexes = {
    name: /Fall|Spring|Summer|Winter/,
    codeType: /[A-Z]{4,5}\s[0-9]{3}/,
    daysTiming: /(Sun|Mon|Tue|Wed|Thu)(,|\s)/,
    roomBuilding: /([A-Z]{1}[0-9]{2}|[A-Z]{3})-\s/
  };
  let schedule = { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [] };
  let courseDays = [];
  let courseData = {};

  for (let line of data.split("\n")) {
    line = line.trim();
    if (line.length <= 0) continue;
    if (regexes.name.test(line)) {
      if (courseDays.length > 0 && infoCheck(courseData)) {
        const [margin, height] = marginHeightCalculator(courseData.timing);
        courseData.margin = margin;
        courseData.height = height;
        courseData.color = COLORS[courseData.building] ? COLORS[courseData.building] : "#8e1837";
        for (let day of courseDays) schedule[day].push(courseData);
        courseData = {};
      }
      courseData.name = line.substring(0, indexOfSemester(line)).trim();
    } else if (regexes.codeType.test(line)) {
      const parts = line.split("/").map(x => x.trim());
      courseData.code = parts[0];
      courseData.type = parts[1] + (parts.length > 3 ? " | " + parts[2] : "");
      courseData.kind = /lab/i.test(parts[1]) ? "Lab" : "Lecture";
    } else if (regexes.daysTiming.test(line)) {
      const info = line.split(" ");
      courseDays = info[0].trim().split(",").map((x) => DAYS[x]);
      info.shift();
      const formattedTiming = info.join("").split("-").map((x) => toAmPM(x));
      courseData.timing = ramadan ? ramadanTiming(formattedTiming) : formattedTiming;
    } else if (regexes.roomBuilding.test(line)) {
      const info = line.split(" ");
      courseData.building = info[0].substring(0, info[0].length - 1);
      courseData.room = info[info.length - 1];
      courseData.buildingName = info.slice(1, -1).join(" ").trim();
    }
  }
  if (courseDays.length > 0) {
    const [margin, height] = marginHeightCalculator(courseData.timing);
    courseData.margin = margin;
    courseData.height = height;
    courseData.color = COLORS[courseData.building] ? COLORS[courseData.building] : "#8e1837";
    for (let day of courseDays) {
      if (courseData.margin == -1 || courseData.height == -1) continue;
      schedule[day].push(courseData);
    }
    courseData = {};
  }
  return schedule;
};

/* ------------- myBanner ------------- */

export const getBannerCourseData = (rawData, ramadan = false) => {
  const schedule = { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [] };
  const lines = rawData.split("\n").map(l => l.trim()).filter(l => l.length);
  let cur = null, days = [];
  const dayWord = /(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/;
  const commit = () => {
    if (cur && days.length && cur.timing) {
      const [margin, height] = marginHeightCalculator(cur.timing);
      cur.margin = margin;
      cur.height = height;
      cur.color = COLORS[cur.building] ? COLORS[cur.building] : "#8e1837";
      if (margin != -1 && height != -1) for (const d of days) if (schedule[d]) schedule[d].push(cur);
    }
    cur = null; days = [];
  };
  for (const line of lines) {
    if (line.includes("|") && /Section/.test(line)) {
      commit();
      const segs = line.split("|").map(s => s.trim());
      cur = { name: segs[0] };
      const m = (segs[1] || "").match(/^(.*?)\s+Section\s+(\S+)/);
      if (m) { cur.code = m[1]; cur.section = m[2]; }
    } else if (cur && /--/.test(line) && dayWord.test(line)) {
      const dm = line.match(/(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)(,(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday))*/);
      if (dm) days = dm[0].split(",");
    } else if (cur && /\d{1,2}:\d{2}\s?[AP]M\s*-\s*\d{1,2}:\d{2}\s?[AP]M/.test(line)) {
      const tm = line.match(/(\d{1,2}:\d{2})\s?([AP]M)\s*-\s*(\d{1,2}:\d{2})\s?([AP]M)/);
      let timing = [tm[1].padStart(5, "0") + tm[2], tm[3].padStart(5, "0") + tm[4]];
      const ty = line.match(/Type:\s*(\w+)/);
      const word = ty ? ty[1] : "Class";
      cur.kind = /lab/i.test(word) ? "Lab" : "Lecture";
      const typeWord = cur.kind === "Lab" ? "Lab" : "Lecture";
      cur.type = typeWord + (cur.section ? " | " + cur.section : "");
      const b = line.match(/Building:\s*([A-Z0-9]{2,4})-\s*(.*?)\s*Room:\s*(\S+)/);
      if (b) { cur.building = b[1]; cur.buildingName = b[2]; cur.room = b[3]; }
      cur.timing = ramadan ? ramadanTiming(timing) : timing;
    }
  }
  commit();
  return schedule;
};

/* ------------- HELPERS ------------- */

function marginHeightCalculator(timing) {
  if (!timing) return [-1, -1];
  const margin = timingToNum(timing[0]);
  const height = timingToNum(timing[1]) - margin;
  return [margin, height];
}

export function timingToNum(timing) {
  timing = toAmPM(timing);
  let hours = +timing.split(":")[0];
  let minutes = +timing.split(":")[1].substring(0, 2) / 60;
  if (timing.substring(timing.length - 2, timing.length) == "PM" && hours != 12) hours += 12;
  return hours + minutes;
}

export const toAmPM = (timing) => {
  if (timing.length > 5) return timing;
  let hours = +timing.substring(0, 2);
  let suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours -= (hours > 12 ? 12 : 0);
  }
  return String(hours).padStart(2, '0') + timing.substring(2, timing.length) + suffix;
};

function convertTo24Hour(time) {
  let [, hours, minutes, period] = time.match(/(\d{2}):(\d{2})(AM|PM)/);
  hours = parseInt(hours);
  minutes = parseInt(minutes);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return [hours, minutes];
}

function convertTo12Hour(hours, minutes) {
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  let formattedMinutes = String(minutes).padStart(2, "0");
  return `${hours}:${formattedMinutes}${period}`;
}

function calculateMinutesBetween(startTime, endTime) {
  let [startHours, startMins] = convertTo24Hour(startTime);
  let startMinutes = startHours * 60 + startMins;
  let [endHours, endMins] = convertTo24Hour(endTime);
  let endMinutes = endHours * 60 + endMins;
  return Math.abs(endMinutes - startMinutes);
}

const ramadanDuration = (mins) => mins > 75 ? 170 : mins;

export const ramadanTiming = (timing, day) => {
  const STT = ["Sunday", "Tuesday", "Thursday"];
  const key = STT.includes(day) ? "STT" : "MW";
  const duration = calculateMinutesBetween(timing[0], timing[1]);
  const isLab = duration > 75;
  if (RAMADAN_HOURS[key][timing[0]] && (isLab) == (timing[0] == "03:30PM")) {
    const startTime = RAMADAN_HOURS[key][timing[0]];
    let [hours, minutes] = convertTo24Hour(startTime);
    let totalMinutes = hours * 60 + minutes + ramadanDuration(duration);
    let newHours = Math.floor(totalMinutes / 60);
    let newMinutes = totalMinutes % 60;
    const endTime = convertTo12Hour(newHours, newMinutes);
    return [startTime, endTime];
  }
  return timing;
};

// Day-aware Ramadan remap (STT vs MW tables are decided per day, not globally).
export function applyRamadan(schedule) {
  const out = {};
  for (const day of Object.keys(schedule)) {
    out[day] = schedule[day].map(c => {
      const timing = ramadanTiming(c.timing, day);
      const [margin, height] = marginHeightCalculator(timing);
      return { ...c, timing, margin, height };
    });
  }
  return out;
}

/* ------------- Breaks + formatting ------------- */

export function computeBreaks(schedule, minGapMins = 15) {
  const out = {};
  for (const day of Object.keys(schedule)) {
    const sorted = [...schedule[day]].filter(c => c.margin >= 0).sort((a, b) => a.margin - b.margin);
    out[day] = [];
    for (let i = 0; i < sorted.length - 1; i++) {
      const start = sorted[i].margin + sorted[i].height;
      const gap = sorted[i + 1].margin - start;
      const mins = Math.round(gap * 60);
      if (mins >= minGapMins) out[day].push({ margin: start, height: gap, mins });
    }
  }
  return out;
}

export function breakLabel(mins) {
  const h = Math.floor(mins / 60), m = mins % 60;
  const mm = m + (m === 1 ? " min" : " mins");
  if (h && m) return h + "h and " + mm + " break";
  if (h) return h + "h break";
  return mm + " break";
}

export function formatTime(t, fmt24) {
  const m = String(t).match(/(\d{1,2}):(\d{2})\s*([AP]M)/i);
  if (!m) return t;
  let h = +m[1];
  if (fmt24) {
    const p = m[3].toUpperCase();
    if (p === "PM" && h !== 12) h += 12;
    if (p === "AM" && h === 12) h = 0;
    return String(h).padStart(2, "0") + ":" + m[2];
  }
  return h + ":" + m[2] + " " + m[3].toUpperCase();
}

export function hourLabel(num, fmt24) {
  let h = num;
  if (fmt24) return String(h).padStart(2, "0") + ":00";
  let suffix = "AM";
  if (h >= 12) { suffix = "PM"; if (h > 12) h -= 12; }
  if (h === 0) h = 12;
  return h + " " + suffix;
}

export function detectSemester(text) {
  const m = text.match(/(Spring|Fall|Summer|Winter)\s+\d{4}/);
  if (m) return m[0];
  const d = text.match(/(\d{2})\/\d{2}\/(\d{4})/);
  if (d) {
    const mo = +d[1];
    const season = mo >= 8 ? "Fall" : mo >= 5 ? "Summer" : "Spring";
    return season + " " + d[2];
  }
  return null;
}
