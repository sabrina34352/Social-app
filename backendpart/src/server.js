import express from 'express';
// import session from 'express-session';
import bodyParser from 'body-parser';
import { comments } from '../../public/data.json';
import {authRoute} from './authRoute';
const app = express();
app.use(express.json());
app.use(bodyParser.json());



// app.use(express.urlencoded({ extended: false }));

// app.use(
//   session({
//     resave: false, // don't save session if unmodified
//     saveUninitialized: false, // don't create session until something stored
//     secret: 'shhhh, very secret',
//   })
//   );
  
app.use("/auth", authRoute);

app.post('/api/posting/add-comment', (req, res) => {
  const { username, tagname, heading, text } = req.body;

  comments.push({ username, tagname, heading, text });
  res.status(200).send(comments);
});

app.get('/api/posting/add-comment', (req, res) => {
  res.status(200).send(comments);
  res.status(200).send(req.body);
});



app.listen(8000, () => console.log('listening on port 8000'));
