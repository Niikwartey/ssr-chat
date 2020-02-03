import posts from '../../../seed/posts.json';

export default (req, res) => {
  const { id } = req.query;
  const post = posts.find(post => post.id == id);

  if (post) {
    res.status(200).json(post);
  }
  
}