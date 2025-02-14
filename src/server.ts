import express, { Application } from 'express';
import cors from 'cors'
import { ENV } from './config/env';
import bodyParser from 'body-parser'

// imports routes
import homeRoutes from './routes/homeRoutes';
import emailRoutes from './routes/emailRoutes';


// init
const app: Application = express();

// built-in middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())


// routes
app.use('/', homeRoutes);
app.use('/backend-api', emailRoutes);

// listen
app.listen(ENV.PORT, ()=> {
    console.log(`smtp server listening on port: ${ENV.PORT}`)
})


