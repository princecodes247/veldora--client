import { IAnimeQuote, IPricing } from "@/interfaces";
import { z } from "zod";
import integrationIcon from "@/public/icons/integration_icon.json";
import interfaceIcon from "@/public/icons/interface_icon.json";
import supportIcon from "@/public/icons/support_icon.json";
import securityIcon from "@/public/icons/security_icon.json";
import analyticsIcon from "@/public/icons/analytics_icon.json";
import submissionIcon from "@/public/icons/submission_icon.json";
import { InAppLinks } from "./nav";
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

export const appData = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "Veldora",
  slogan: "Simplify, Optimize, with Veldora",
  socials: {
    phone: "",
    email: "",
    linkedIn: "",
    instagram: "",
  },
};

export const companySocials = {
  phone: "",
  email: "",
  linkedIn: "",
  instagram: "",
};

export const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Veldora";

export const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL ?? "localhost:3000";
export const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3050/api/v1";

export const openApiUrl =
  process.env.NEXT_PUBLIC_OPEN_API_URL ?? "http://localhost:3050/api/v1/g";

export const submissionApiUrl =
  process.env.NEXT_PUBLIC_SUBMISSION_API_URL ??
  "http://localhost:3050/api/v1/g/buckets";

export const docsUrl =
  process.env.NEXT_PUBLIC_DOCS_URL ?? "https://docs.veldora.io";

export const featuresList = [
  {
    icon: integrationIcon,
    title: "Seamless Integrations",
    description: "Plug Veldora into your workflows like a well-oiled machine.",
  },
  {
    icon: analyticsIcon,
    title: "Data Analytics",
    description:
      "Discover insights and patterns through Veldora's powerful tools.",
  },
  {
    icon: submissionIcon,
    title: "Form Submission",
    description: "Create custom forms to collect the data your business needs.",
  },
  {
    icon: securityIcon,
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
    answer:
      "Not at all! Veldora's user-friendly interface allows anyone to dive into data management without prior backend knowledge.",
  },
  {
    question: "Are my forms and data secure?",
    answer:
      "Absolutely. Veldora is built on a foundation of strong security practices to ensure your data's safety.",
  },
];

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
];

export const displayErrorMessages = {
  GET_BUCKETS_FAILURE: {
    title: "Well, this is awkward.",
    body: "The form buckets went on strike demanding better working conditions. We're negotiating a fair deal with them",
  },
  INVALID_BUCKET: {
    title: "Oops! It seems like this bucket got lost in the cloud.",
    body: "We're sorry, we tried our best, but we can't find this bucket. You can check out others",
  },

  UNKNOWN_ERROR: {
    title: "Something unexpected happened.",
    body: "...",
  },
};

export const pricingPlans: IPricing[] = [
  {
    name: "Free",
    price: "0.00",
    disabled: false,
    features: [
      "5 API buckets",
      "100 submissions limit",
      "Basic Form Validation",
      "Rate Limiting",
      "Whitelisting",
      // "No file upload",
      // "No collaborators",
      // "No integrations",
      // "100 event emits",
    ],
    cta: {
      link: InAppLinks.GetStarted,
      text: "Get Started",
    },
  },
  {
    name: "Basic",
    price: "5.99",
    disabled: true,
    features: [
      "20 API buckets",
      "10,000 submissions limits",
      "Advanced Form Validation",
      "Rate Limiting",
      "Whitelisting",
      "Custom Redirect",
      "5GB file upload",
      "2 collaborators",
      // "+100 event emits",
    ],
    cta: {
      link: InAppLinks.GetStarted,
      text: "Get Started",
    },
  },
  {
    name: "Pro",
    price: "19.99",
    disabled: true,
    features: [
      "100 API buckets",
      "Unlimited submissions limits",
      "Advanced Form Validation",
      "Custom Redirect",
      "50GB file upload",
      "Rate Limiting",
      "Whitelisting",
      "2 collaborators",
      "Active Support/Consultation",
      "Custom Domain",
    ],
    cta: {
      link: InAppLinks.GetStarted,
      text: "Get Started",
    },
  },
];
