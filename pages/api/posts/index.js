import posts from '../../../seed/posts.json'

export default (req, res) => {
  if (req.method === 'POST') {
    const lastPost = posts[posts.length -1];
    const newPost = { id: lastPost.id + 1,  ...req.body }
    const allPosts = [...posts, newPost]

    res.status(200).json(allPosts);
  } 
  else {
    res.status(200).json(posts);
  }
  
}