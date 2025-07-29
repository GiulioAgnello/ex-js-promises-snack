// RECUPERO IL TITOLO DEL POST

const getPostTitle = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => resolve(post))
      .catch(reject);
  });
};

getPostTitle(1)
  .then((post) => console.log("titolo del post =", post.title))
  .catch((error) => console.error(error));

// RECUPERO I DATI DELL'AUTORE

const getPost = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        resolve(post);
      })
      .catch(reject);
  });
};

const autorGet = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((autor) => resolve(autor))
      .catch(reject);
  });
};

getPost(1)
  .then((post) => {
    post;
    return autorGet(post.userId).then((autor) => {
      autor;

      console.log("Post:", post, "Autore:", autor);
    });
  })
  .catch((error) => console.error(error));
