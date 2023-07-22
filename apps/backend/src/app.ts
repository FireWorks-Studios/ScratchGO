import express, { Request, Response } from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is your backend server!');
});

// Create the server and keep a reference to it
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});