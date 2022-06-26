import cors from 'cors';
import express from 'express';
import session from 'express-session';
import router from './src/routes/index.js';

import default_session from './src/config/session.js';
import { mySession } from './src/config/session.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(mySession));
app.use(default_session);
app.use(router);


app.listen(process.env.PORT, () => {
   console.log(`Le serveur en ligne`);
});