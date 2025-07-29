// RECUPERO IL TITOLO DEL POST

const getPostTitle = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((obj) => resolve(obj))
      .catch(reject);
  });
};

getPostTitle(1)
  .then((obj) => console.log("titolo del post =", obj.title))
  .catch((error) => console.error(error));

// RECUPERO I DATI DELL'AUTORE

const getPost = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((obj) => resolve(obj))
      .catch(reject);
  });
};

getPost(1)
  .then((obj) => console.log(obj))
  .catch((error) => console.error(error));
