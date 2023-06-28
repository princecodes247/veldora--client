import { IAnimeQuote } from "@/interfaces";
import { z } from "zod";
import integrationIcon from "@/public/icons/integration_icon.json";
import interfaceIcon from "@/public/icons/interface_icon.json";
import supportIcon from "@/public/icons/support_icon.json";
// import integrationIcon from "@/public/icons/integration_icon.json";
// import integrationIcon from "@/public/icons/integration_icon.json";
// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const submissionSchema = z.object({
  _id: z.string().optional(),
  data: z.any(),
});

export type Submisson = z.infer<typeof submissionSchema>;

export const appLinks = {
  appStore: "https://apps.apple.com/app/{appName}/id6445799581",
  playStore: "https://play.google.com/store/apps/details?id=com.{appName}",
};

export const companySocials = {
  phone: "",
  email: "",
  linkedIn: "",
  instagram: "",
};

export const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Veldora";

export const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL ?? "localhost:3000";

export const featuresList = [
  {
    icon: integrationIcon,
    title: "Seamless Integrations",
    description: "Plug Veldora into your workflows like a well-oiled machine.",
  },
  {
    icon: integrationIcon,
    title: "Data Analytics",
    description:
      "Discover insights and patterns through Veldora's powerful tools.",
  },
  {
    icon: integrationIcon,
    title: "Form Submission",
    description: "Create custom forms to collect the data your business needs.",
  },
  {
    icon: integrationIcon,
    title: "Security First",
    description:
      "Safeguard your data with our industry-leading security measures.",
  },
  {
    icon: interfaceIcon,
    title: "Intuitive Interface",
    description: "Effortlessly manage data with our user-friendly dashboard.",
  },
  {
    icon: supportIcon,
    title: "Rapid Support",
    description:
      "Our team's got your back 24/7—come rain, hail, or asteroid attack.",
  },
];

export const faqsList = [
  {
    question: "Do I need backend development skills to get started?",
    answer: "Not at all! Veldora's user-friendly interface allows anyone to dive into data management without prior backend knowledge.",
  },
  {
    question: "Are my forms and data secure?",
    answer: "Absolutely. Veldora is built on a foundation of strong security practices to ensure your data's safety.",
  },
]

export const animeQuotes: IAnimeQuote[] = [
  {
    body: "Believe in the me that believes in you!",
    author: "Kamina",
  },
  {
    body: "Sometimes the best way to solve your own problems is to help someone else",
    author: "Uncle Iroh, ATLA",
  },
  {
    body: "In this world, wherever there is light, there are also shadows.",
    author: "Ryuk, Death Note",
  },
  {
    body: "Hard work betrays none, but dreams betray many.",
    author: "Hachiman Hikigaya",
  },
  {
    body: "No matter how deep the night, it always turns to day, eventually.",
    author: "Simon, Gurren Lagann",
  },
  {
    body: "The true measure of a shinobi is not how he lives, but how he dies.",
    author: "Jiraiya, Naruto",
  },
  {
    body: "If you don't give up, you can keep running forever.",
    author: "Katsuki Bakugo, My Hero Academia",
  },
  {
    body: "Hard work is worthless for those that don't believe in themselves.",
    author: "Naruto Uzumaki, Naruto",
  },
  {
    body: "Hard work may not always lead to success, but it will never go unnoticed.",
    author: "Rock Lee, Naruto",
  },
  {
    body: "In order to achieve your dreams, you must embrace the challenges that come your way.",
    author: "Yuno Gasai, Future Diary",
  },
    {
    body: "No matter how hard or impossible it is, never lose sight of your goal.",
    author: "Edward Elric, Fullmetal Alchemist",
  },
  
]


export const displayErrorMessages = {
  GET_BUCKETS_FAILURE: {
    title: "Well, this is awkward.",
    body: "The form buckets went on strike demanding better working conditions. We're negotiating a fair deal with them"
  }, 
  INVALID_BUCKET: {
    title: "Oops! It seems like this bucket got lost in the cloud.",
    body: "We're sorry, but we can't find this bucket."
  }
}









