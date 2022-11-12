if (document.title.indexOf("Student Link Menu") != -1) {
  

  //Creating Elements
  var btn = document.createElement("BUTTON")
  var t = document.createTextNode("CLICK ME");
  var random_text = document.createElement("p")
  random_text.innerText = "LOLOLOLOLOLOLOL"
  document.body.appendChild(random_text);
  btn.appendChild(t);
  //Appending to DOM 
  document.body.appendChild(btn);
}