
fillUser();
Bookshelf();

//create notebook object

function fillUser(){
  const userEl = document.querySelector("#userData");
  userEl.textContent = "User: " + this.getUser();
}
function getUser(){
  return localStorage.getItem('userName') ?? 'Hackerz';
}
function loadNotebook(){
  //populate an html project doc as a notebook
}
function startNotebook(){
  const inputTxt = document.querySelector(".newNotebook");
  inputTxt.innerHTML = 
  `<input type="text" placeholder="Title" id="notebookTitle"/>
          <input type="text" placeholder="Notebook description..." id="Description"/>
          <button class="btn btn-primary" onClick="Bookshelf.addNotebook">Create</button>`
  

  //find ids, make elements visible
  //make a div or card visible so input may be received for making a new note.
}
//implement a function to populate a notebook page:
//title of notebook added to the link bar
//notes in notebook populateed from data



class Notebook{
  title;
  description;
  notes = [];
  constructor(title, description){
    this.title = title;
    this.description = description;
  }
  addNote(){
    //need to receive input of a note title
  //need to receive input of a note body
  //receive base content for what the note is on?
  //input of what notebook to add to
  }

  loadNotebook(){
    //populate an html project doc as a notebook
  }
}
class Bookshelf{
  num_notebooks; //counter of notebooks
  notebooks = []; //array containing notebook items

  constructor(){
    num_notebooks = 0;
  }

  addNotebook(){
  const notebookName = document.querySelector("#noteTitle");
  const notebookDescription = document.querySelector("#note");
  nb = new Notebook(notebookName,notebookDescription);
  num_notebooks += 1;
  this.notebooks.push(nb);
  localStorage.setItem('notebook')
  localStorage.setItem('toLoad', nb); //place notebook in storage
  window.location.href= "project.html"; //load notebook
}
}