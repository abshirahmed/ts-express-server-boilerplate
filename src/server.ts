import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helloWorld from './routes/helloWorld';

const app = express();
export const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/', helloWorld);

export default app;
