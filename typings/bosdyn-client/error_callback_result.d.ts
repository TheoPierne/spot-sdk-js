export const ErrorCallbackResult: Readonly<{
    DEFAULT_ACTION: 1;
    RETRY_IMMEDIATELY: 2;
    RETRY_WITH_EXPONENTIAL_BACK_OFF: 3;
    RESUME_NORMAL_OPERATION: 4;
    ABORT: 5;
}>;
