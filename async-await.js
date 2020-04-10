async function registration(){
  try{
    let userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }
  

  let response = await fetch('https://5e902f612810f4001648ab6d.mockapi.io/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })

  let result = await response.json()
  
  console.log(result)
  } 
  catch(error) {
    console.log(`Anda gagal registrasi dengan error ${error.message}`)
  }
}

