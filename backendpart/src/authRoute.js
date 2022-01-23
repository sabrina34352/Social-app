import {users} from '../../public/data.json';
import Router from 'express'
const router = new Router();

//for users to log in
router.post('/login', (req, res) => {
  try {
    var hasMatch = false;
    function newUserAddition() {
      users.push({ tagname, username, email });
      res.status(200).json(users);
    }
    const { tagname, username, email } = req.body;
    for (var index = 0; index < users.length; ++index) {
      var oldUser = users[index];

      if (oldUser.tagname === tagname) {
        hasMatch = true;
        break;
      }
    }
    hasMatch
      ? res
          .status(422)
          .send('sorry! this tag is already being used! try another tagname')
      : newUserAddition();
  } catch (error) {
    res.send(error);
  } 
});

router.get('/login', (req, res) => {
  try {
    var tagnames = [];
    users.forEach(user => {
      tagnames.push(user.tagname);
    });
    res.status(200).json(tagnames);
  } catch (error) {
    res.send(error);
  }
});

export default router;
