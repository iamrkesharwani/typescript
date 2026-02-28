type OfferDetails = {
  salary: number;
  joiningDate?: Date;
  position: 'senior' | 'junior';
};

type ApplicationBase = {
  jobId: string;
  company: string;
  role: 'junior' | 'senior';
  applicationId: string;
  submittedAt: Date;
};

type Drafting = {
  state: 'drafting';
  jobId: string;
  company: string;
  role: 'junior' | 'senior';
  resume?: boolean;
  coverLetter?: boolean;
};

type Applied = ApplicationBase & { state: 'applied' };

export type Interviewing = ApplicationBase & {
  state: 'interviewing';
  interviewRounds: { round: number; scheduledAt: Date; feedback: string }[];
};

type Offer = ApplicationBase & {
  state: 'offer';
  interviewRounds: Interviewing['interviewRounds'];
  offerDetails: OfferDetails;
};

type Accepted = ApplicationBase & {
  state: 'accepted';
  offerDetails: OfferDetails;
  acceptedAt: Date;
};

type Rejected = ApplicationBase & {
  state: 'rejected';
  reason: string;
  rejectedAt: Date;
};

type Withdrawn = ApplicationBase & {
  state: 'withdrawn';
  reason: string;
  withdrawnAt: Date;
};

export type ApplicationState =
  | Drafting
  | Applied
  | Interviewing
  | Offer
  | Accepted
  | Rejected
  | Withdrawn;

export type Actions =
  | { type: 'SUBMIT_APPLICATION'; applicationId: string; submittedAt: Date }
  | { type: 'START_INTERVIEW'; scheduledAt: Date }
  | { type: 'INTERVIEW_ROUND'; round: number; scheduledAt: Date; feedback: string }
  | { type: 'RECEIVE_OFFER'; offerDetails: OfferDetails }
  | { type: 'ACCEPT'; acceptedAt: Date }
  | { type: 'REJECT'; reason: string; rejectedAt: Date }
  | { type: 'WITHDRAW'; reason: string; withdrawnAt: Date }
  | { type: 'RESET' };
