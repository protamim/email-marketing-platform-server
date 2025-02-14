import { transporter } from "../config/smtp";

export interface EmailTypes {
  from: {
    name: string;
    email: string;
  };
  recipients: string[];
  subject: string;
  text: string;
}

export const sendEmail = async ({
  from,
  recipients,
  subject,
  text,
}: EmailTypes): Promise<string[]> => {
  const messageIds: string[] = [];

  // sending multiple emails at a time
  for (const recipient of recipients) {
    const info = await transporter.sendMail({
      from: `"${from.name}" <${from.email}>`,
      to: recipient,
      subject,
      text,
    });

    messageIds.push(info.messageId);
  }

  return messageIds;
};
