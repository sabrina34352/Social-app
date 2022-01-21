import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import { comments } from '../../public/data.json';
import { users } from '../../public/data.json';
const app = express();

app.use(bodyParser.json());



app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'shhhh, very secret',
  })
);

app.post('/api/posting/add-comment', (req, res) => {
  const { username, tagname, heading, text } = req.body;

  comments.push({ username, tagname, heading, text });
  res.status(200).send(comments);
});

app.get('/api/posting/add-comment', (req, res) => {
  res.status(200).send(comments);
  res.status(200).send(req.body);
});


//for users to log in
app.post('/api/home/login', (req, res) => {

  const { tagname, username, email } = req.body;
  var hasMatch = false;

  for (var index = 0; index < users.length; ++index) {

    var oldUser = users[index];

    if (oldUser.tagname === tagname) {
      hasMatch = true;
      break;
    }
  }

  function newUserAddition() {
    users.push({ tagname, username, email });
    res.status(200).send(users);
  }

  hasMatch
    ? res.status(422).send('sorry! this tag is already being used! try another tagname')
    : newUserAddition();

});

app.get('/api/home/login', (req, res) => {
  var tagnames = [];
  users.forEach(user => {
    tagnames.push(user.tagname)
  });
  res.status(200).send(tagnames);
});

app.listen(8000, () => console.log('listening on port 8000'));
