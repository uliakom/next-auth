/**
 * These routes are public, do not require authentication
 * @type{string[]}
 */

export const publicRoutes = ["/"];

/**
 * These routes are used for authentication and will reirect user to /settings
 * @type{string[]}
 */

export const authRoutes = ["/login", "/register"];

/**
 * The prefix for APi authentication routs.Routs that start from this prefix are used for API
 * @type{string}
 */

export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 * @type{string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";

