import type { ITeamMember, Year } from "./types"

const GRADIENTS = {
  "president": "var(--primary)",
  "events": "linear-gradient(to top right, #67fa4d, #c2f29b)",
  "creative": "linear-gradient(to top right, #84e0fa, #c0e1fc)",
  "operations": "linear-gradient(to right, #e803fc, #e7b3f2)",
  "technical": "linear-gradient(to top right, #fa4d4dff, #f29b9bff)",
}

export const PRESIDENTS: ITeamMember[] = [
  { name: "Noor Soueid", role: "President - President - President - ", image: '/team/lady.jpg', borderColor: GRADIENTS.president },
  { name: "Dana Hommos", role: "Vice President - Vice President - ", image: '/team/lady.jpg', borderColor: GRADIENTS.president },
];

export const HEADS: ITeamMember[] = [
  { name: "Lana Alkasiy", role: "Lead of the Operations Team - ", image: '/team/lana.jpg', borderColor: GRADIENTS.operations, quote: "404: quote not found" },
  { name: "Abdelhakim Akhadkhou", role: "Lead of the Technical Team - ", image: '/team/elmiko.jpeg', borderColor: GRADIENTS.technical, quote: "67" },
  { name: "Omair Nawaz", role: "Lead of the Events Team - ", image: '/team/omair.jpeg', borderColor: GRADIENTS.events },
]

export const PAST_PRESIDENTS: Record<Year, ITeamMember[]> = { // Record is basically a dictionary/object/hashmap type
  "2025": [
    { name: "Anas Rustom", role: "President - President - President - ", image: '/team/anas2.jpg', borderColor: GRADIENTS.president, quote: "Alhamdulillah, it was a memorable experience, but I wish the ACs in our meetings had Vora.qa" },
    { name: "Noor Soueid", role: "Vice President - Vice President - ", image: '/team/lady.jpg', borderColor: GRADIENTS.president },
  ],
  "2024": [
    { name: "Muhammad Khan", role: "President - President - President - ", image: '/team/lady.jpg', borderColor: GRADIENTS.president },
    { name: "Anas Rustom", role: "Vice President - Vice President - ", image: '/team/anas.jpg', borderColor: GRADIENTS.president },
    { name: "Sara Metwaly", role: "Vice President - Vice President - ", image: '/team/lady.jpg', borderColor: GRADIENTS.president },
    { name: "Dania Al-Batany", role: "Secretary - Secretary - Secretary - ", image: '/team/lady.jpg', borderColor: GRADIENTS.president },
    { name: "Mohamed Ali", role: "Treasurer - Treasurer - Treasurer - ", image: '/team/lady.jpg', borderColor: GRADIENTS.president },
  ]
}


export const PAST_HEADS: Record<Year, ITeamMember[]> = {
  "2025": [
    { name: "Sifna Nasar", role: "Lead of the Public Relations Team - ", image: '/team/lady.jpg', borderColor: GRADIENTS.operations},
    { name: "Amna Bushra", role: "Lead of the Creative Team - ", image: '/team/lady.jpg', borderColor: GRADIENTS.creative},
    { name: "Sham Alkhais", role: "Lead of the Event Planning Team - ", image: '/team/lady.jpg', borderColor: GRADIENTS.events},
    { name: "Moaz Jemmieh", role: "Lead of the Event Planning Team - ", image: '/team/moaz.jpg', borderColor: GRADIENTS.events},
    { name: "Mohamed Al-Ansary", role: "Lead of the Technical Team - ", image: '/team/mohamed.jpg', borderColor: GRADIENTS.technical},
  ],

  "2024": [
    { name: "Faseeh Nawaz", role: "Lead of the Creative Team - ", image: '/team/lady.jpg', borderColor: GRADIENTS.creative },
    { name: "Abdullah Mahran", role: "Lead of the Events Team - ", image: '/team/lady.jpg', borderColor: GRADIENTS.events },
    { name: "Hunzalah Hassan", role: "Lead of the Technical Team - ", image: '/team/lady.jpg', borderColor: GRADIENTS.technical },
  ]
}
