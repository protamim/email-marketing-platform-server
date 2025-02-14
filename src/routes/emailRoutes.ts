import express, { Request, Response} from "express";
import { sendEmail } from "../services/emailService";
import { emailSchema } from "../validators/emailValidator";
import { z } from "zod";

const router = express.Router();

router.post("/send-email", async (req: Request, res: Response) => {
  try {
    // Validate the request body
    const validatedData = emailSchema.parse(req.body);

    // If validation passes, proceed with sending email
    const messageId = await sendEmail(validatedData);
    res.json({ success: true, messageId });
  } catch (error) {
    console.error(error);

    // Handle validation errors from Zod
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  }
});

export default router;
