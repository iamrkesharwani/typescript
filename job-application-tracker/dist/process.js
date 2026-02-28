export function transition(current, action) {
    switch (current.state) {
        case 'drafting':
            switch (action.type) {
                case 'SUBMIT_APPLICATION':
                    return {
                        state: 'applied',
                        jobId: current.jobId,
                        company: current.company,
                        role: current.role,
                        applicationId: action.applicationId,
                        submittedAt: action.submittedAt,
                    };
                default:
                    return current;
            }
        case 'applied':
            switch (action.type) {
                case 'START_INTERVIEW':
                    return { ...current, state: 'interviewing', interviewRounds: [] };
                case 'WITHDRAW':
                    return {
                        ...current,
                        state: 'withdrawn',
                        reason: action.reason,
                        withdrawnAt: action.withdrawnAt,
                    };
                default:
                    return current;
            }
        case 'interviewing':
            switch (action.type) {
                case 'INTERVIEW_ROUND':
                    return {
                        ...current,
                        interviewRounds: [
                            ...current.interviewRounds,
                            {
                                round: action.round,
                                scheduledAt: action.scheduledAt,
                                feedback: action.feedback,
                            },
                        ],
                    };
                case 'RECEIVE_OFFER':
                    return {
                        ...current,
                        state: 'offer',
                        offerDetails: action.offerDetails,
                    };
                case 'REJECT':
                    return {
                        ...current,
                        state: 'rejected',
                        reason: action.reason,
                        rejectedAt: action.rejectedAt,
                    };
                case 'WITHDRAW':
                    return {
                        ...current,
                        state: 'withdrawn',
                        reason: action.reason,
                        withdrawnAt: action.withdrawnAt,
                    };
                default:
                    return current;
            }
        case 'offer':
            switch (action.type) {
                case 'ACCEPT':
                    return {
                        ...current,
                        state: 'accepted',
                        acceptedAt: action.acceptedAt,
                    };
                case 'REJECT':
                    return {
                        ...current,
                        state: 'rejected',
                        reason: action.reason,
                        rejectedAt: action.rejectedAt,
                    };
                case 'WITHDRAW':
                    return {
                        ...current,
                        state: 'withdrawn',
                        reason: action.reason,
                        withdrawnAt: action.withdrawnAt,
                    };
                default:
                    return current;
            }
        case 'accepted':
        case 'rejected':
        case 'withdrawn':
            if (action.type === 'RESET') {
                return {
                    state: 'drafting',
                    jobId: current.jobId,
                    company: current.company,
                    role: current.role,
                };
            }
            return current;
        default: {
            const _exhaustive = current;
            return _exhaustive;
        }
    }
}
