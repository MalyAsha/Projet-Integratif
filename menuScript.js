var btnAqua = document.getElementById("btnAqua")
var btnTerr = document.getElementById("btnTerr")
var btnGrandQ = document.getElementById("btnGrandQ")
var divMil = document.getElementById("divMil")
var allBtn = [btnGrandQ, btnTerr, btnAqua]
var grandQuizzDebloque = false

function init()
{
    if ((typeof(Storage) !== "undefined")){ // Verifie si le navigateur supporte le stockage local
        btnAqua.addEventListener('click', function menuAquatique(){
            window.location = "./aquatique.html"
        })
    
        btnTerr.addEventListener('click', function menuTerrestre(){
            window.location = "./terrestre.html"
        })
    
        if(grandQuizzDebloque)
        {
            activerBouton(btnGrandQ, 'rgb(153, 0, 0)')
            btnGrandQ.addEventListener('click', function menuGrandQuizz(){
                window.location = "./grandQuizz.html"
            })
        }
    } 
    else{ // Cache les bouton et affiche un message si le navigateur n'est pas compatible
        allBtn.forEach(elm => {
            elm.style.display = "none"
        });

        divMil.innerHTML = `<p style="font-weight : bolder;">Pas de support de stockage web, merci de l'activer sinon vous ne pourrez pas jouer au Quizz Biologie</p> <br> <p style='font-weight : bolder;'>Sur Chrome :</p><br><p>Parametres > Confidentialité et Securité > Parametre des sites (ou a cette url : "chrome://settings/content")</p><p> Verifiez que les cookies sont activé et qu'ils ne soient pas bloqué`
    }
}

/** Cette fonction permet d'"activer" un bouton de base, il rajoute les couleurs et l'annimation lorsqu'on passe la souris au dessus.
 * 
 * @param {element} element L'element du bouton qu'on veut "activer"
 * @param {string} color La couleur que l'on veut donner au bouton
 */
function activerBouton(element, color)
{
    element.style.cursor = "pointer"
    element.style.border = "4px solid"
    element.style.borderColor = color
    element.style.color = "black"
    element.style.backgroundColor = "rgb(0,0,0,0)"

    function mouseOverBtn(){
        element.style.backgroundColor = color
        element.style.color = "white"
    }

    function mouseOutBtn(){
        element.style.cursor = "pointer"
        element.style.border = "2px solid" + color
        element.style.color = "black"
        element.style.backgroundColor = "rgb(0,0,0,0)"
    }

    element.addEventListener("mouseover",mouseOverBtn)

    element.addEventListener("mouseout", mouseOutBtn)
}