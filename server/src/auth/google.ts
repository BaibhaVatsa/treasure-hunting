import { Strategy } from "passport-google-oauth20";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL} = process.env;

if (!GOOGLE_CLIENT_ID) {
	throw new Error('GOOGLE_CLIENT_ID not set');
}
if (!GOOGLE_CLIENT_SECRET) {
	throw new Error('GOOGLE_CLIENT_SECRET not set');
}
if (!GOOGLE_CALLBACK_URL) {
	throw new Error('GOOGLE_CALLBACK_URL not set');
}

const strategy = () => new Strategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        callbackURL: GOOGLE_CALLBACK_URL,
        clientSecret: GOOGLE_CLIENT_SECRET,
        passReqToCallback: false,
        scope: ["profile"]
    },
    (accessToken, refreshToken, profile, done) =>
        console.log("hello")
);