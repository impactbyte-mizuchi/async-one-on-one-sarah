const myHeartBeating = false


const myPromise = new Promise((resolve, reject) => {
  if(myHeartBeating === true){
    resolve('Aku mencintaimu')
  } else {
    reject('Gue meninggal')
  }
})

console.log(myPromise)

myPromise
  .then(result => console.log(`${result} hingga akhir hayat`))
  .catch(error => console.log(`${error} langsung`))
  .finally(() => console.log('kamu tetap mencintaiku'))


console.log('satu')


// ========= Ngambil data dari API

// GET DATA 

function getUsersData(){
  fetch('https://5e902f612810f4001648ab6d.mockapi.io/users')
    .then(response => response.json()) // nampilin semua
    .then(result => console.log(result)) // nampilin semua
    .catch(error => console.log(error))
}

getUsersData()

function registration(){
  let userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }

  fetch('https://5e902f612810f4001648ab6d.mockapi.io/users', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData) // ngubah userData dari object ke JSON
  })
    .then(response => response.json()) // ngubah response dari JSON ke bukan JSON
    .then(result => alert('Anda berhasil registrasi'))
    .catch(error => alert('Gagal registrasi'))
}


function deleteData(){
  fetch('https://5e902f612810f4001648ab6d.mockapi.io/users/2', {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json()) 
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

deleteData()

function getUserMovie(){
  fetch('https://5e902f612810f4001648ab6d.mockapi.io/movie')
    .then(response => response.json()) // nampilin semua list movie
    .then(results => console.log(results.filter(result => {
      return result.userid === 1
    }))) // nampilin satu movie saja
    .catch(error => console.log(error))
}

getUserMovie()



