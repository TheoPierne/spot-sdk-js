/**
 * Client to authenticate to the robot.
 * @extends {BaseClient<AuthServiceClient>}
 */
export class AuthClient extends BaseClient<AuthServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    /**
     * Create an instance of AuthClient's class.
     * @param {?string} name Name of the BaseClient
     */
    constructor(name?: string | null);
    /**
     * Authenticate to the robot with a username/password combo.
     * @param {string} username Username on the robot.
     * @param {string} password Password for the username on the robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<string>} User token from the server as a string.
     * @throws {InvalidLoginError} If username and/or password are not valid.
     */
    auth(username: string, password: string, args?: Object): Promise<string>;
    /**
     * Authenticate to the robot using a previously created user token.
     * @param {string} token A user token previously issued by the robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<string>} A new user token from the server. The new token will generally be valid further in
     * the future than the passed in token. A client can use auth_with_token to regularly
     * re-authenticate without needing to ask for username/password credentials.
     * @throws {InvalidTokenError} If the token was incorrectly formed, for the wrong robot, or expired.
     */
    authWithToken(token: string, args?: Object): Promise<string>;
}
/** General class of errors for AuthResponseError service. */
export class AuthResponseError extends ResponseError {
}
/** Provided username/password is invalid. */
export class InvalidLoginError extends AuthResponseError {
}
/** Provided user token is invalid or cannot be re-minted. */
export class InvalidTokenError extends AuthResponseError {
}
/** User is temporarily locked out of authentication. */
export class TemporarilyLockedOutError extends AuthResponseError {
}
import { AuthServiceClient } from "../../src/bosdyn/api/auth_service_grpc_pb";
import { BaseClient } from "./common";
import { ResponseError } from "./exceptions";
