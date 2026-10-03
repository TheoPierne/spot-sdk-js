/** Base exception. */
export class OrbitError extends Error {
    constructor(message: any);
}
/** The client is not authenticated properly. */
export class UnauthenticatedClientError extends OrbitError {
    constructor(message?: string);
}
/** The webhook signature could not be verified. */
export class WebhookSignatureVerificationError extends OrbitError {
}
