import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { randomScrambleForEvent } from "cubing/scramble";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Cubing Test Server');
});

app.get('/scramble', async (req: Request, res: Response) => {
    const scramble = await randomScrambleForEvent("333");
    scramble.log();
    res.send(scramble.toString());
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});