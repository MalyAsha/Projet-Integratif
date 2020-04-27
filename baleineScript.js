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
var bullesBaleines = {
    tactile : {identif : false, lien : true, reprodu : false, territoire : false, hierarchie : false, rencontre : false, danger : false, chasse : false, infos : false},
    sonore : {identif : true, lien : false, reprodu : true, territoire : true, hierarchie : false, rencontre : false, danger : true, chasse : false, infos : true},
    visuel : {identif : false, lien : false, reprodu : false, territoire : false, hierarchie : false, rencontre : true, danger : false, chasse : false, infos : false},
    chimique : {identif : false, lien : false, reprodu : false, territoire : false, hierarchie : false, rencontre : false, danger : false, chasse : false, infos : false}
}
var choixJoueur = {
    tactile : {identif : 0 , lien : 0 , reprodu  : 0 , territoire  : 0 , hierarchie  : 0 , rencontre  : 0 , danger  : 0 , chasse  : 0 , infos  : 0 },
    sonore : {identif : 0 , lien : 0 , reprodu  : 0 , territoire  : 0 , hierarchie  : 0 , rencontre  : 0 , danger  : 0 , chasse  : 0 , infos  : 0 },
    visuel : {identif : 0 , lien : 0 , reprodu  : 0 , territoire  : 0 , hierarchie  : 0 , rencontre  : 0, danger  : 0 , chasse  : 0 , infos  : 0 },
    chimique : {identif : 0 , lien : 0 , reprodu  : 0 , territoire  : 0 , hierarchie  : 0 , rencontre  : 0 , danger  : 0 , chasse  : 0 , infos  : 0 }
}
var ordre = ["acceuil", "regles", "epreuve", "resultat"]
var i = 0
var numEpreuve = 0
var lastScreen = Epreuves[0].acceuil
var ratio;
var left;

resize();

$(window).resize(function () {resize();});
setInterval(function(){
    $("#map").css({top : $("#baleineBleu").position().top+200, left : $("#baleineBleu").position().left+250})
},100)
function resize()
{
    ratio = window.innerHeight / $('#fakeBody').innerHeight();
    if (window.innerWidth / $('#fakeBody').innerWidth() < ratio) {
        ratio = window.innerWidth / $('#fakeBody').innerWidth();
    }
    ratio -= .04;
    $('#fakeBody').css('-ms-zoom', ratio);
    $('#fakeBody').css('-moz-transform', 'scale(' + ratio + ')');
    $('#fakeBody').css('-o-transform', 'scale(' + ratio + ')');
    $('#fakeBody').css('-webkit-transform', 'scale(' + ratio + ')');
    $('#fakeBody').css('transform', 'scale(' + ratio + ')');
    left = ($(window).innerWidth() - $('#fakeBody').outerWidth() * ratio) / 2;
    $('#fakeBody').css('left', left);
}

$(function() {
    $("#organe").hide()
    $("#trouver").hide()
    $("#video").hide()
    $("#map").css({top : $("#baleineBleu").position().top+300, left : $("#baleineBleu").position().left+350})
    $("#map").mouseover(function(){
        $("#organe").show()
        $("#trouver").fadeIn(1000, function(){$("#video").delay( 00).fadeIn(2000)})
        afficherElement([btnSuivant])
    })
    $("#map").mouseout(function(){
        $("#organe").hide()
    })
    $("#tablePastilles td").droppable({
        drop : function(ev, ui){
            pastilleDepose = $(ui.draggable).attr("id");
            document.getElementById(pastilleDepose).style.backgroundColor = "rgba(255,255,255,1)"
            dropped = ui.draggable
            droppedOn = $(this)
            $(dropped).detach().css({top : 0, left : 0, margin : '0.5em' , "font-size": "0.8em",}).appendTo(droppedOn)
        }
    })
    $(".pastilles").draggable({
        cursor: "-webkit-grabbing", 
        snap:".rond, #tablePastilles td", 
        snapMode:"inner", 
        tolerance : "fit", 
        start : function(ev, ui){
            pastilleGlissante = this.id
            choixJoueur.tactile[pastilleGlissante] = 0
            choixJoueur.sonore[pastilleGlissante] = 0
            choixJoueur.visuel[pastilleGlissante] = 0
            choixJoueur.chimique[pastilleGlissante] = 0
            document.getElementById(pastilleGlissante).style.backgroundColor = "rgba(255,255,255,1)"
        }
    });
    $(".rond").droppable({
        drop : function(ev, ui){
            pastilleDepose = $(ui.draggable).attr("id");
            rondDepose = ev.target.parentElement.parentElement.id
            isTrue = bullesBaleines[rondDepose][pastilleDepose]
            choixJoueur[rondDepose][pastilleDepose] = 1
            
            dropped = ui.draggable
            droppedOn = $(this)
            $(dropped).detach().css({top : 0, left : 0, margin : 0 , "font-size": "0.8em",}).appendTo(droppedOn)

            if(isTrue)
            {
                document.getElementById(pastilleDepose).style.backgroundColor = "rgba(0,255,0,0.1)"

            }
            else
            {
                document.getElementById(pastilleDepose).style.backgroundColor = "rgba(255,0,0,0.1)"
            }
        }
    });
  });
  
function init()
{
    var a,b;
    for(a=0, b=0; b < ordre.length; b++)
    {
        Epreuves[a][ordre[b]].style.display = "none" 
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
    cacherElement([btnValider]) 
    if (numEpreuve == 0){cacherElement([btnPrecedent])} 
    afficherElement([Epreuves[0].acceuil]) 
    btnSuivant.addEventListener('click', pageSuivante)
    btnPrecedent.addEventListener('click', pagePrecedente)
}

function pageSuivante()
{
    localStorage.setItem("baleineExplore", "true")
    switch (i){
        case (0):
            cacherElement([lastScreen, btnValider])
            afficherElement([btnSuivant, btnPrecedent])
            i++
            afficherElement([Epreuves[numEpreuve][ordre[i]]])
            break;
        case 1:
            cacherElement([lastScreen, btnSuivant])
            afficherElement([btnValider, btnPrecedent])
            switch(numEpreuve){
                case 0 :
                    btnValider.addEventListener('click', validerEp1)
                    break
                case 1 : 
                    btnValider.removeEventListener('click', validerEp1)
                    btnValider.addEventListener('click', validerEp2)
                    break;
                case 2 :
                    btnValider.removeEventListener('click', validerEp1)
                    btnValider.removeEventListener('click', validerEp2)
                    cacherElement([btnValider])
            }
            
            i++
            afficherElement([Epreuves[numEpreuve][ordre[i]]])
            break;
        case 2:
            cacherElement([lastScreen, btnValider])
            afficherElement([btnSuivant, btnPrecedent])
            i++
            afficherElement([Epreuves[numEpreuve][ordre[i]]])
            break;
        case 3:
            cacherElement([lastScreen, btnValider])
            afficherElement([btnSuivant, btnPrecedent])
            i=0
            numEpreuve++
            afficherElement([Epreuves[numEpreuve][ordre[i]]])
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
            cacherElement([lastScreen])
            if(numEpreuve > 0)
            {
                i = 3
                numEpreuve--
                afficherElement([Epreuves[numEpreuve][ordre[i]], btnPrecedent, btnSuivant])
                cacherElement([btnValider])
            }
            break;
        case 1:
            i--
            cacherElement([lastScreen, btnValider])
            afficherElement([btnSuivant, Epreuves[numEpreuve][ordre[i]]])
            if(numEpreuve == 0){cacherElement([btnPrecedent])}
            break;
        case 2:
            i--
            cacherElement([lastScreen, btnValider])
            afficherElement([btnSuivant, btnPrecedent, Epreuves[numEpreuve][ordre[i]]])
            break;
        case 3:
            i--
            cacherElement([lastScreen, btnSuivant])
            afficherElement([btnValider , btnPrecedent, Epreuves[numEpreuve][ordre[i]]])
            switch(numEpreuve){
                case 0 :
                    btnValider.addEventListener('click', validerEp1)
                    btnValider.removeEventListener('click', validerEp2)
                    break;
                case 1 : 
                    btnValider.removeEventListener('click', validerEp1)
                    btnValider.addEventListener('click', validerEp2)
                    break;
            }
            break;
        default:
            break;
    }
    lastScreen = Epreuves[numEpreuve][ordre[i]]
}
var mots = ["cetaces", "trente", "krill", "fanons", "filtres", "deux", "nourrissent", "reproduisent", "event"]
var motsVar = ["cétacés", "trente", "krill", "fanons", "filtres", "deux", "nourrissent", "reproduisent", "évent"]
function validerEp1()
{
    localStorage.setItem("bonEp1", 0)
    localStorage.setItem("mauvaisEp1", 0)
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
    localStorage.setItem("bonEp1", bon)
    localStorage.setItem("mauvaisEp1", mauvais)
    cacherElement([btnValider]) 
    afficherElement([btnSuivant]) 
    Epreuves[0].resultat.getElementsByTagName("div").score.innerHTML = bon + "/" + motsJoueur.length
    pageSuivante()
}
function validerEp2()
{
    localStorage.setItem("bonEp2", 0)
    localStorage.setItem("mauvaisEp2", 0)
    var bon = 0 
    var mauvais = 0
    for(let [key, value] of Object.entries(choixJoueur))
    {
        for(let[key1, value1] of Object.entries(choixJoueur[key]))
        {
            if(choixJoueur[key][key1]==1)
            {
                if(bullesBaleines[key][key1] == true)
                bon++
                else mauvais++
            }
        }
    }
    if (bon == 7 && mauvais == 0)
    {
        cacherElement([btnValider])
        afficherElement([btnSuivant])
        Epreuves[1].resultat.getElementsByTagName("div").score.innerHTML = "Felicitations vous avez reussi l'epreuve 2"
    }
    else{alert('Il vous manques des pastilles a mettre ou vous avez encore des mauvaises reponses !')}
}
function afficherElement(elem)
{
    elem.forEach(item => {
        item.style.display = "block"
    })
}

function cacherElement(elem)
{
    elem.forEach(item => {
        item.style.display = "none"
    })
}