function judgeme(){
  if(document.getElementById("cake").checked){
    alert("Cake is pretty good.");
  }
  else if(document.getElementById("pie").checked){
    alert("Thanksgiving.");
  }
  else if(document.getElementById("ic").checked){
    alert("BORING.");
  }
  else if(document.getElementById("cheese").checked){
    alert("The Cheesecake Factory is boomb.");
  }
  else if(document.getElementById("souffle").checked){
    alert("Mais oui, un souffle est delicieux.");
  }
  else if(document.getElementById("parfait").checked){
    alert("Too healthy for me.");
  }
  else if(document.getElementById("mousse").checked){
    alert("Fluffy.");
  }
  else if(document.getElementById("brownies").checked){
    alert("Only Devin's Mom...'s.");
  }
  else if(document.getElementById("panna").checked){
    alert("Okay, fancypants.");
  }
  else if(document.getElementById("none").checked){
    alert("Why are you even here?");
  }
  else{
    alert("Please choose a dessert.");
  }
}
