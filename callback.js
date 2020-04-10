const posts = [
  {
    id: 1,
    title: "makan ayam",
    body: "lorem"
  },
  {
    id: 2,
    title: "makan ikan",
    body: "lorem"
  },
  {
    id: 3,
    title: "makan rendang",
    body: "lorem"
  }
]

function showPost(){
  let output = ''

  setTimeout(() => {
    posts.forEach(post => {
      output += `<li>${post.title}</li>`

      document.body.innerHTML = output
    })
  }, 500)
}

function createPost(input, callback){
  setTimeout(() => {
    posts.push(input)

     callback()
  }, 1000)
}



createPost({id: 4, title: 'Makan nasgor', body: 'lorem'}, showPost)


