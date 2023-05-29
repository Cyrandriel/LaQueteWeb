function load(){
  if (document.getElementById('combat').style.display == 'none'){
    document.getElementById('combat').style.display = 'block';
    document.getElementById('jeu').style.display = 'none';
    document.getElementById('attaque').style.display = 'none';
  }
  else{
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
    //window.location.href = "./quest_regles.html";
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

const button = document.getElementById('bouton_attaque');
var niveau_monstre;

function getNiveau(){
  load();
  niveau_monstre = aleatoire();
  document.getElementById('niveau').innerHTML = niveau_monstre;
  afficher_bourse();
}

var gemme_maudite = "maudite";
var gemme_attaque = "attaque";

var liste_bourse = [gemme_maudite, gemme_maudite, gemme_maudite, gemme_maudite, gemme_attaque, gemme_attaque, gemme_attaque];

function combat() {
  document.getElementById('attaque').style.display = 'block';
  document.getElementById('quefaire').style.display = 'none';
  document.getElementById('niveau').innerHTML = niveau_monstre;
  var nombre = Math.floor(Math.random() * liste_bourse.length)+1;

  document.getElementById('pioche').innerHTML = nombre;
  if(nombre >= niveau_monstre){
    document.getElementById('resultat_combat').innerHTML = 'Vous gagnez';
    liste_bourse.push("attaque");
    afficher_bourse(liste_bourse);
  }else{
    document.getElementById('resultat_combat').innerHTML = 'Vous perdez';
    liste_bourse.unshift("maudite");
    afficher_bourse(liste_bourse);
  }

}


function afficher_bourse(){
  var texte = "";
  liste_bourse.forEach(element => {
    texte = texte + element + ", ";
  });
  document.getElementById("bourse").innerHTML = texte;
}