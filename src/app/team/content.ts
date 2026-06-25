import type { ITeamMember } from "./types"

export const PRESIDENTS: ITeamMember[] = [
  { name: "Noor Soueid", role: "President - President - President - ", image: '/team/lady.jpg', borderColor: 'var(--primary)', quote: "i'm the pres or something idk" },
  { name: "Dana Hommos", role: "Vice President - Vice President - ", image: '/team/lady.jpg', borderColor: 'var(--primary)', quote: "i'm the vp or something idk" },
];

export const HEADS: ITeamMember[] = [
  { name: "Lana Alkasiy", role: "Lead of the Operations Team - ", image: '/team/lady.jpg', borderColor: 'linear-gradient(to right, #e803fc, #e7b3f2)', quote: "i'm the head of operations or something idk" },
  { name: "Mohamed", role: "Lead of the Event Planning Team - ", image: '/team/lady.jpg', borderColor: 'linear-gradient(to top right, #67fa4d, #c2f29b)', quote: "i'm the head of event planning or something idk" },
  { name: "Abdelhakim Akhadkhou", role: "Lead of the Technical Team - ", image: '/team/big.jpeg', borderColor: 'linear-gradient(to top right, #fa4d4dff, #f29b9bff)', quote: "67" },
]

export const PAST_PRESIDENTS: Record<string, ITeamMember[]> = {
  "2025": [
    { name: "Anas Rustom", role: "President - President - President - ", image: '/team/lady.jpg', borderColor: 'var(--primary)', quote: "i'm the past pres or something idk" },
    { name: "Noor Soueid", role: "Vice President - Vice President - ", image: '/team/lady.jpg', borderColor: 'var(--primary)', quote: "i'm the pres or something idk" },
  ],
  "2024": [
    { name: "Muhammad Khan", role: "President - President - President - ", image: '/team/lady.jpg', borderColor: 'var(--primary)', quote: "i'm the past pres or something idk" },
    { name: "Anas Rustom", role: "Vice President - Vice President - ", image: '/team/lady.jpg', borderColor: 'var(--primary)', quote: "i'm the past pres or something idk" },
    { name: "Sara Metwaly", role: "Vice President - Vice President - ", image: '/team/lady.jpg', borderColor: 'var(--primary)', quote: "i'm the past vp or something idk" },
  ]
}


export const PAST_HEADS: Record<string, ITeamMember[]> = {
  "2025": [
    { name: "Sifna Nasar", role: "Lead of the Public Relations Team - ", image: '/team/lady.jpg', borderColor: 'linear-gradient(to right, #e803fc, #e7b3f2)', quote: "i'm the past head of pr or something idk" },
    { name: "Amna Bushra", role: "Lead of the Creative Team - ", image: '/team/lady.jpg', borderColor: 'linear-gradient(to top right, #84e0fa, #c0e1fc)', quote: "i'm the past head of creative or something idk" },
    { name: "Sham Alkhais", role: "Lead of the Event Planning Team - ", image: '/team/lady.jpg', borderColor: 'linear-gradient(to top right, #67fa4d, #c2f29b)', quote: "i'm the past head of event planning or something idk" },
    { name: "Moaz Jemmieh", role: "Lead of the Event Planning Team - ", image: '/team/moaz.jpg', borderColor: 'linear-gradient(to top right, #67fa4d, #c2f29b)', quote: "i'm the past head of event planning or something idk" },
    { name: "Mohamed Al-Ansary", role: "Lead of the Technical Team - ", image: '/team/mohamed.jpg', borderColor: 'linear-gradient(to top right, #fa4d4dff, #f29b9bff)', quote: "i'm the past head of technical or something idk" },
  ],

  "2024": [
    { name: "Faseeh Nawaz", role: "Lead of the Creative Team - ", image: '/team/lady.jpg', borderColor: 'linear-gradient(to top right, #84e0fa, #c0e1fc)', quote: "i'm the past head of creative or something idk" },
    { name: "Hunzalah Hassan", role: "Lead of the Technical Team - ", image: '/team/mohamed.jpg', borderColor: 'linear-gradient(to top right, #fa4d4dff, #f29b9bff)', quote: "i'm the past head of technical or something idk" },
  ]
}
