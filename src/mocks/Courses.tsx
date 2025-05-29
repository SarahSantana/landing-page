import { ICourseInfo } from "@/types/Courses";

export const studyAreas = [
  { id: 1, title: "Tecnologia" },
  { id: 2, title: "Inovação" },
  { id: 3, title: "Negócios" },
];

export const coursesInfo = [
  {
    id: 1,
    title: "Tecnologia",
    topics: [
      { title: "Big Data Ecosystem", description: "remoto • live" },
      {
        title: "Creating Dashboards for BI",
        description: "remoto • live",
      },
      {
        title: "Big Data Science - Machine Learning & Data Mining",
        description: "remoto • live + multimídia ",
      },
      { title: "Storytelling", description: "remoto • live" },
    ],
  },
  {
    id: 2,
    title: "Inovação",
    topics: [
      { title: "UX", description: "digital" },
      { title: "UX Writing", description: "live" },
      { title: "Storytelling para Negócios", description: "live" },
      { title: "Chatbots", description: "live" },
    ],
  },
  {
    id: 3,
    title: "Negócios",
    topics: [
      { title: "Agile Culture", description: "digital" },
      { title: "DPO Data Protection Officer", description: "live" },
      { title: "IT Business Partner", description: "live" },
      { title: "Perícia Forense Computacional", description: "live" },
    ],
  },
] as ICourseInfo[];
