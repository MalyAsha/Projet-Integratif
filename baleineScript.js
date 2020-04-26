var btnSuivant = document.getElementById("btnSuivant")
var btnPrecedent = document.getElementById("btnPrecedent")
var btnValider = document.getElementById("btnValider")
var Epreuves = [
    epreuve1 = {
        acceuil : document.getElementById('divEp1Acceuil'),
        regles : document.getElementById('divEp1Regles'),
        epreuve : document.getElementById('divEp1Epreuve'),
        resultat : document.getElementById('divEp1Resultat')
    },
    epreuve2 = {
        acceuil : document.getElementById('divEp2Acceuil'),
        regles : document.getElementById('divEp2Regles'),
        epreuve : document.getElementById('divEp2Epreuve'),
        resultat : document.getElementById('divEp2Resultat')
    },
    epreuve3 = {
        acceuil : document.getElementById('divEp3Acceuil'),
        regles : document.getElementById('divEp3Regles'),
        epreuve : document.getElementById('divEp3Epreuve'),
        resultat : document.getElementById('divEp3Resultat')
    },
    epreuve4 = {
        acceuil : document.getElementById('divEp4Acceuil'),
        regles : document.getElementById('divEp4Regles'),
        epreuve : document.getElementById('divEp4Epreuve'),
        resultat : document.getElementById('divEp4Resultat')
    }
]
var ordre = ["acceuil", "regles", "epreuve", "resultat"]
var i = 0
var numEpreuve = 0
var lastScreen = Epreuves[0].acceuil

$(function() {
    $(".pastilles").draggable({snap:".rond", snapMode:"inner"});
    $(".rond").droppable({drop : function(ev, ui){
        pastilleDepose = $(ui.draggable);
        console.log(pastilleDepose)
    }});
  });
  
function init()
{
    var a,b;
    for(a=0, b=0; b < ordre.length; b++)
    {
        Epreuves[a][ordre[b]].style.display = "none" //Utiliser fonction cacherElement
        if(a == 3 && b==3)
        {
            b = 3
        }
        else if(b == 3)
        {
            b = -1;
            a++
        }

    }
    /* Enlever du commentaire et enlever le forEach lorsque toute les epreuves seront implementé
    */
    cacherElement(btnValider) //Utiliser fonction cacherElement
    if (numEpreuve == 0){cacherElement(btnPrecedent)} //Utiliser fonction cacherElement
    afficherElement(Epreuves[0].acceuil) //Utiliser la fonction afficherElement
    btnSuivant.addEventListener('click', pageSuivante)
    btnPrecedent.addEventListener('click', pagePrecedente)
}

function pageSuivante()
{
    switch (i){
        case (0):
            cacherElement(lastScreen)
            afficherElement(btnSuivant) //Utiliser la fonction afficherElement
            cacherElement(btnValider) //Utiliser fonction cacherElement
            if (numEpreuve == 0){cacherElement(btnPrecedent)} //Utiliser fonction cacherElement
            i++
            afficherElement(Epreuves[numEpreuve][ordre[i]])
            break;
        case 1:
            cacherElement(lastScreen)
            cacherElement(btnSuivant) //Utiliser la fonction afficherElement
            afficherElement(btnValider)
            btnValider.addEventListener('click', valider)
            afficherElement(btnPrecedent) //Utiliser la fonction afficherElement
            afficherElement(btnPrecedent) //Utiliser la fonction afficherElement
            i++
            afficherElement(Epreuves[numEpreuve][ordre[i]])
            break;
        case 2:
            cacherElement(lastScreen)
            afficherElement(btnSuivant) //Utiliser fonction cacherElement
            cacherElement(btnValider) //Utiliser fonction cacherElement
            i++
            afficherElement(Epreuves[numEpreuve][ordre[i]])
            break;
        case 3:
            cacherElement(lastScreen)
            afficherElement(btnSuivant) //Utiliser la fonction afficherElement
            cacherElement(btnValider) //Utiliser fonction cacherElement
            afficherElement(btnPrecedent) //Utiliser la fonction afficherElement
            i=0
            numEpreuve++
            afficherElement(Epreuves[numEpreuve][ordre[i]])
            break;
        default:
            break;
    }
    lastScreen = Epreuves[numEpreuve][ordre[i]]
}

function pagePrecedente()
{
    switch (i){
        case (0):
            cacherElement(lastScreen)
            afficherElement(btnSuivant) //Utiliser la fonction afficherElement
            cacherElement(btnValider) //Utiliser fonction cacherElement
            if (numEpreuve == 0){cacherElement(btnPrecedent)} //Utiliser fonction cacherElement
            i=3
            numEpreuve--
            afficherElement(Epreuves[numEpreuve][ordre[i]])
            break;
        case 1:
            cacherElement(lastScreen)
            cacherElement(btnSuivant) //Utiliser la fonction afficherElement
            afficherElement(btnValider)
            btnValider.addEventListener('click', valider)
            afficherElement(btnPrecedent) //Utiliser la fonction afficherElement
            i--
            afficherElement(Epreuves[numEpreuve][ordre[i]])
            break;
        case 2:
            cacherElement(lastScreen)
            afficherElement(btnSuivant) //Utiliser fonction cacherElement
            cacherElement(btnValider) //Utiliser fonction cacherElement
            i--
            afficherElement(Epreuves[numEpreuve][ordre[i]])
            break;
        case 3:
            cacherElement(lastScreen)
            cacherElement(btnSuivant) //Utiliser la fonction afficherElement
            afficherElement(btnValider) //Utiliser fonction cacherElement
            btnValider.addEventListener('click', valider)
            afficherElement(btnPrecedent) //Utiliser la fonction afficherElement
            i--
            afficherElement(Epreuves[numEpreuve][ordre[i]])
            break;
        default:
            break;
    }
    lastScreen = Epreuves[numEpreuve][ordre[i]]
}
var mots = ["cetaces", "trente", "krill", "fanons", "filtres", "deux", "nourrissent", "reproduisent", "event"]
var motsVar = ["cétacés", "trente", "krill", "fanons", "filtres", "deux", "nourrissent", "reproduisent", "évent"]
function valider()
{
    localStorage.setItem("bon", 0)
    localStorage.setItem("mauvais", 0)
    var bon = 0 
    var mauvais = 0
    var motsJoueur = document.querySelectorAll("input.inputMot");
    for(let j = 0; j < motsJoueur.length; j++)
    {
        if((motsJoueur[j].value.toLowerCase() == mots[j])||(motsJoueur[j].value.toLowerCase() == motsVar[j]))
        {
            bon++
        }else(mauvais++)
    }
    localStorage.setItem("bon", bon)
    localStorage.setItem("mauvais", mauvais)
    cacherElement(btnValider) //Utiliser fonction cacherElement
    afficherElement(btnSuivant) //Utiliser la fonction afficherElement
    Epreuves[0].resultat.getElementsByTagName("div").score.innerHTML = bon + "/" + motsJoueur.length
    pageSuivante()
}

function afficherElement(element)
{
    element.style.display = "block"
}

function cacherElement(elem)
{
    elem.style.display = "none"
}