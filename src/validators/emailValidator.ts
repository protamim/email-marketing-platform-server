import { z } from "zod";

// Define the validation schema
export const emailSchema = z.object({
  from: z.object({
    name: z.string().min(1, "Sender name is required"),
    email: z.string().email("Invalid sender email address"),
  }),
  recipients: z
    .array(z.string().email())
    .nonempty({ message: "Recipients must not be empty" }),
  subject: z
    .string()
    .min(1, { message: "Subject is required" })
    .max(100, { message: "Subject must be less than 100 characters" }),
  text: z
    .string()
    .min(1, { message: "Text is required" })
    .max(1000, { message: "Text must be less than 1000 characters" }),
});

// Define TypeScript type for better type safety
export type EmailInput = z.infer<typeof emailSchema>;
