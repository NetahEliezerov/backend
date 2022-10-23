import express from 'express';
import bodyParser from 'body-parser';
import ownidApi from './routers/OwnID_API';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import user_pool from './user_pool';

const app = express();
app.use(cors({origin: (origin, callback) => callback(null, true), credentials: true}));
app.options('*', cors());
app.use(bodyParser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/api', ownidApi);

app.get('/getAll', (req, res) => {
    res.send(user_pool.getAll());
});


app.listen(5000, () => {
    console.log("running");
});