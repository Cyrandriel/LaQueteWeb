var tour = 1

function load(){
  document.getElementById('tour').innerHTML = tour;
  if (document.getElementById('combat').style.display == 'none'){
    document.getElementById('combat').style.display = 'block';
    document.getElementById('jeu').style.display = 'none';
    document.getElementById('attaque').style.display = 'none';
  }
  else{
    if(tour === 21){
      window.location.href = "./quest_echec.html";
    }
    document.getElementById('combat').style.display = 'none';
    document.getElementById('jeu').style.display = 'block';
    document.getElementById('attaque').style.display = 'none';
    document.getElementById("quefaire").style.display = 'block';
  }
}
// LES DEPLACEMENTS
var salle = 2; // 1->gauche 2->centre 3->droite
function dep_gauche(){
  if(salle === 2 || salle === 3){
    salle = salle -1;
    gcd(salle);
    getNiveau();
  }else
    alert("Deplacement impossible")
}

function dep_droite(){
  if(salle === 1 || salle === 2){
    salle = salle +1;
    gcd(salle);
    
    getNiveau();
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
    
    getNiveau();
  }else
    alert("Deplacement impossible")
}

function dep_bas(){
  if(etage>1){
    etage = etage -1;
    document.getElementById("pos_etage").innerHTML = etage;
    
    getNiveau();
  }else
    alert("Deplacement impossible")
}

function aleatoire() {
  return Math.floor(Math.random() * 5)+1;
}

var etage_tresor = Math.floor(Math.random() * 5)+1;
var salle_tresor = Math.floor(Math.random() * 3)+1;

var niveau_monstre;
var tresor_trouve = false
function getNiveau(){
  tour = tour + 1;
  load();
  niveau_monstre = aleatoire();
  document.getElementById('niveau').innerHTML = niveau_monstre;
  
}

function combat() {
  document.getElementById('attaque').style.display = 'block';
  document.getElementById('quefaire').style.display = 'none';
  document.getElementById('niveau').innerHTML = niveau_monstre;
  var de = Math.floor(Math.random() * 6)+1;
  document.getElementById('lance_de').innerHTML = de;
  if(de >= niveau_monstre){
    document.getElementById('resultat_combat').innerHTML = 'Vous gagnez';
    if(salle == salle_tresor && etage == etage_tresor){
      tresor_trouve = true;
      window.location.href = "./quest_victoire.html";
    }
  }else{
    document.getElementById('resultat_combat').innerHTML = 'Vous perdez';
  }
}