export function submitPost(newPost) {
  return fetch('/api/posts', {
    method: 'post',
    body: JSON.stringify(newPost),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .catch(error => console.log(error));
  
}