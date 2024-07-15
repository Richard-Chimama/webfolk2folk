import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { AttachmentLike } from "nodemailer/lib/mailer";
import { Readable } from "stream";

dotenv.config();

interface TransportProps {
  host: string;
  port?: number;
  secure?: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

interface SendOption {
  from: string;
  to: string;
  subject: string;
  html: string | Buffer | Readable | AttachmentLike | undefined;
}

const EmailSender = () => {
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 456;

  const transporter = (props: TransportProps) => {
    return nodemailer.createTransport({
      host: props.host,
      port: PORT,
      secure: props.secure || true,
      auth: {
        user: props.auth.user,
        pass: props.auth.pass,
      },
    });
  };

  const setOptions = (props: SendOption): SendOption => {
    return {
      from: props.from,
      to: props.to,
      subject: props.subject,
      html: props.html,
    };
  };

  const sendMail = async (transporterProps: TransportProps, mailOptions: SendOption) => {
    try {
      const transport = transporter(transporterProps);
      const options = setOptions(mailOptions);
      const info = await transport.sendMail(options);
      console.log("Email sent: " + info.response);
    } catch (error) {
      console.error("Error sending email: ", error);
    }
  };

  return { transporter, setOptions, sendMail };
};

export default EmailSender;
