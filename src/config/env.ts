import 'dotenv/config'

export const ENV = {
  SMTP_HOST: process.env.SMTP_HOST || "localhost",
  SMTP_PORT: Number(process.env.SMTP_PORT) || 1025,
  PORT: process.env.PORT || 8080
};
