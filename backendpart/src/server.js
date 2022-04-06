import express from 'express';
// import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ErrorDetected } from './api-errors';
import { body, validationResult } from 'express-validator';
import registration from './registration';
import start, { client } from './database';
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//{not in frontend}
app.use('/auth/', registration);

start();
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

        async function AddingComments() {
          const newComment = client.db().collection('comments');
          await newComment.insertOne({ heading: heading, text: text });
          res.status(200).send("Comment added successfully");
        }
        AddingComments();
      } catch (e) {
        next(e);
      }
    }
  }
);

app.get('/api/posting/add-comment', (req, res) => {
  client
    .db()
    .collection('comments')
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(JSON.stringify(result));
      }
    });
});

app.use(ErrorDetected);

app.listen(8000, () => console.log('listening on port 8000'));
