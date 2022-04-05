import express from 'express';
import { MongoClient } from 'mongodb';
// import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ErrorDetected } from './api-errors';
import { body, validationResult } from 'express-validator';
import { comments } from '../../public/data.json';
import registration from './registration';
const app = express();
const client = new MongoClient(
  'mongodb+srv://sabrina:Acceleration12@clusterfortwitter.l5klj.mongodb.net/twitterOzbe?retryWrites=true&w=majority'
);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const start = async () => {
  try {
    await client.connect();
    console.log('Connected to twitterOzbe');
  } catch (err) {
    console.log(err);
  }
};
start();

//{not in frontend}
app.use('/auth/', registration);

//{not in the frontend}
app.post(
  '/api/posting/add-comment',
  body('heading').notEmpty().withMessage('must not be empty'),
  body('text').not().trim().escape(),
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.status(400).send(err.array());
    } else {
      try {
        const { heading, text } = req.body;

        comments.push({ heading, text });
        res.status(200).send(comments);
      } catch (e) {
        next(e);
      }
    }
  }
);

app.get('/api/posting/add-comment', (req, res) => {
  res.status(200).send(comments);
  res.status(200).send(req.body);
});

app.use(ErrorDetected);

app.listen(8000, () => console.log('listening on port 8000'));
