import express from "express";
import helmet from "helmet";
import passport from "passport";
import { strategies } from "./auth";

const app = express();
const PORT = 4443;

app.use(helmet());

app.use(passport.initialize());
app.use(passport.session());

passport.use("google", strategies.google());
passport.use("github", strategies.github());
// passport.use("microsoft", strategies.microsoft());
passport.use("twitter", strategies.twitter());
passport.use("facebook", strategies.facebook());

app.listen(PORT);
