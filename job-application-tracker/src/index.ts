import { transition } from './process.js';
import type { ApplicationState } from './types.js';

let state: ApplicationState = {
  state: 'drafting',
  jobId: 'J101',
  company: 'TechCorp',
  role: 'junior',
};

state = transition(state, {
  type: 'SUBMIT_APPLICATION',
  applicationId: 'A101',
  submittedAt: new Date(),
});

state = transition(state, {
  type: 'START_INTERVIEW',
  scheduledAt: new Date(),
});

state = transition(state, {
  type: 'INTERVIEW_ROUND',
  round: 1,
  scheduledAt: new Date(),
  feedback: 'Good',
});

state = transition(state, {
  type: 'RECEIVE_OFFER',
  offerDetails: {
    salary: 80_000,
    position: 'junior',
  },
});

state = transition(state, {
  type: 'ACCEPT',
  acceptedAt: new Date(),
});

console.log(state);
