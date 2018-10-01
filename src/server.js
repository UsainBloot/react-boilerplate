import express from 'express';
import requestHandler from './server/requestHandler';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'))

app.get('/', requestHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;