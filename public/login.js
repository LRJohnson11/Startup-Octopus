(async () => {
  let authenticated = false;
  const userName = localStorage.getItem('userName');
  if (userName) {
    const nameEl = document.querySelector('#userName');
    nameEl.value = userName;
    const user = await getuser(nameEl.value);
    authenticated = user?.authenticated;
  }
  if (authenticated){
    play();
  }
});

function proceed(){
  window.location.href = "home.html";
}

async function login(){
  loginOrCreate('/api/auth/login')
}
async function newUser(){
  loginOrCreate('/api/auth/create')
}

async function loginOrCreate(endpoint){
  const userName = document.querySelector('#userName')?.value; //get username
  const password = document.querySelector('#userPassword')?.value; //get password
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),//pass username and password as an argument to be found or set
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    proceed();
  } else {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
  }
}