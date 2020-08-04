import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3334, () => console.log('🚀 Users service running on port 3334'));
