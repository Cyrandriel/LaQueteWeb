function demarrage() {
    document.getElementById("mon_titre").innerHTML = "J'ai modifié le titre";
    document.getElementById("premier_paragraphe").innerHTML = "5*3="+(5*3);
}


function togg(){
    var div = document.getElementById("d1");
    if(div.style.display != "none"){
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
};

let x = 0;
function add(){
    x = x+1;
    alert(x);
}


function verif(){
  let test = document.querySelector('input').value;

  if(test == ""){
    alert("intr");
  }else{
    alert("fun");
  }

}
  
