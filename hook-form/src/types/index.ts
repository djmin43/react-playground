import { z } from "zod";
import { memberSchema } from "../components/main-app";

export type Member = z.infer<typeof memberSchema>;

export type Reservation = {
  id: string;
  name: string;
  phoneNumber: string;
  isTermsAgreed: boolean;
  isResolved: boolean;
  createdAt: Date;
  lastModifiedAt: Date;
};
