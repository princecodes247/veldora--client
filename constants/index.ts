import { z } from "zod";

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