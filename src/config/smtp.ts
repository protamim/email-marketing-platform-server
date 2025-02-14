import * as nodemailer from "nodemailer";
import { ENV } from "./env";

export const transporter = nodemailer.createTransport({
  host: ENV.SMTP_HOST,
  port: ENV.SMTP_PORT,
  secure: false,
});
