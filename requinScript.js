

var btnSuivant = document.getElementById("btnSuivant")
var btnPrecedent = document.getElementById("btnPrecedent")

var epreuve1 = {
    acceuil : document.getElementById('divEp1Acceuil'),
    regles : document.getElementById('divEp1Regles'),
    epreuve : document.getElementById('divEp1Epreuve')
}
var ordre = ["acceuil", "regles", "epreuve"]
var i = 0

function init()
{
    btnPrecedent.style.display = "none"
    epreuve1.acceuil.style.display = "block"
    btnSuivant.addEventListener('click', pageSuivante)
    btnPrecedent.addEventListener('click', pagePrecedente)
}

function pageSuivante()
{
    btnPrecedent.style.display = "block"
    epreuve1[ordre[i]].style.display = "none"
    i++
    epreuve1[ordre[i]].style.display = "block"
}

function pagePrecedente()
{
    btnPrecedent.style.display = "block"
    epreuve1[ordre[i]].style.display = "none"
    i--
    epreuve1[ordre[i]].style.display = "block"
    if(i == 0)
    {
        btnPrecedent.style.display = "none"
    }
}