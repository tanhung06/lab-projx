import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import { studentRouter } from './students/student-router';

const expressApp = express();
expressApp.use(express.json());
expressApp.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Expires', '0');
    next();
});

expressApp.use('/xapi/students', studentRouter);

export const xapi = onRequest(expressApp);
