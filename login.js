function login(){
  const nameEl = document.querySelector("#name");
  localStorage.setItem('userName', nameEl);
  window.location.href= 'home.html';
}