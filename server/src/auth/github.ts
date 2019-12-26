import { Strategy } from "passport-github2";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_CALLBACK_URL } = process.env;

if (!GITHUB_CLIENT_ID) {
	throw new Error('GITHUB_CLIENT_ID not set');
}
if (!GITHUB_CLIENT_SECRET) {
	throw new Error('GITHUB_CLIENT_SECRET not set');
}
if (!GITHUB_CALLBACK_URL) {
	throw new Error('GITHUB_CALLBACK_URL not set');
}

const strategy = (): Strategy => new Strategy(
    {
        callbackURL: GITHUB_CALLBACK_URL,
        clientSecret: GITHUB_CLIENT_SECRET,
        clientID: GITHUB_CLIENT_ID,
        passReqToCallback: false,
        scope: ["user:email"]
    }, 
    (accessToken, refreshToken, profile, done) =>
        console.log("hello") 
);
