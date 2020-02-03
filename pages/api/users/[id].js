import users from '../../../seed/users.json';

export default (req, res) => {
  const { id } = req.query;
  const user = users.find(user => user.id == id);

  if (user) {
    res.status(200).json(user);
  }
}
