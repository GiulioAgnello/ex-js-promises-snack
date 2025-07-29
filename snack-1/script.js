function getTitle(id){
    return new Promise =(resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(title => resolve(title))
        .catch(reject)
    }
}


getTitle(1)
.then(title => console.log(title))
.catch(error => console.error(error));
