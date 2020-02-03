import users from '../../../seed/users.json';
import posts from '../../../seed/posts.json';

export default (req, res) => {
  res.status(200).json({users, posts});
}