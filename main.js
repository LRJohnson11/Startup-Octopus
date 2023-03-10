function fillUser(){
  const userEl = document.querySelector("#userData");
  userEl.textContent = this.getUser();
}
function getUser(){
  return localStorage.getItem('userName') ?? 'Hackerz';
}

function addNote(){
  //get input
}

function newNotebook(){
  //create notebook
}