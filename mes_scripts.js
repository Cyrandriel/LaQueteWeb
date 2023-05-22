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


function load(){
  if (document.getElementById('combat').style.display == 'none'){
    document.getElementById('combat').style.display = 'block';
    document.getElementById('jeu').style.display = 'none';
  }
  else{
    document.getElementById('combat').style.display = 'none';
    document.getElementById('jeu').style.display = 'block';
  }
}
// LES DEPLACEMENTS
var salle = 2; // 1->gauche 2->centre 3->droite
function dep_gauche(){
  if(salle === 2 || salle === 3){
    salle = salle -1;
    gcd(salle);
    load();
  }else
    alert("Deplacement impossible")
}

function dep_droite(){
  if(salle === 1 || salle === 2){
    salle = salle +1;
    gcd(salle);
    load();
  }else
    alert("Deplacement impossible")
    
}

function gcd(salle){
  if(salle === 1)
    document.getElementById("pos_salle").innerHTML = "gauche";
  if(salle === 2)
    document.getElementById("pos_salle").innerHTML = "centre";
  if(salle === 3)
    document.getElementById("pos_salle").innerHTML = "droite";
}

var etage=1; //1,2,3,4,5
function dep_haut(){
  if(etage<5){
    etage = etage +1;
    document.getElementById("pos_etage").innerHTML = etage;
    
    load();
    //window.location.href = "./quest_regles.html";
  }else
    alert("Deplacement impossible")
}

function dep_bas(){
  if(etage>1){
    etage = etage -1;
    document.getElementById("pos_etage").innerHTML = etage;
    load();
  }else
    alert("Deplacement impossible")
}

function aleatoire() {
  return Math.floor(Math.random() * 5)+1;
}

var niveau;
function getNiveau(){
  load();
  var niveau = aleatoire();
  document.getElementById("niveau").innerHTML = niveau;
  return niveau;
}

function combat(niveau) {
  document.getElementById("attaque").innerHTML = "Vous attaquez";
  loading();
}
function loading(){
  if (document.getElementById('attaque').style.display == 'none'){
    document.getElementById('attaque').style.display = 'block';
  }
  else{
    document.getElementById('attaque').style.display = 'none';
  }
}
