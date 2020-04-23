var btnAqua = document.getElementById("btnAqua")
var btnTerr = document.getElementById("btnTerr")
var btnGrandQ = document.getElementById("btnGrandQ")
var divMil = document.getElementById("divMil")
var allBtn = [btnGrandQ, btnTerr, btnAqua]

function init()
{
    if ((typeof(Storage) !== "undefined")){ // Verifie si le navigateur supporte le stockage local
        btnAqua.addEventListener('click', function menuAquatique(){
            window.location = "./aquatique.html"
        })
    
        btnTerr.addEventListener('click', function menuTerrestre(){
            window.location = "./terrestre.html"
        })
        if(localStorage.getItem("grandQuizzDebloque") == "true")
        {
            activerBouton(btnGrandQ, 'rgb(153, 0, 0)')
            btnGrandQ.addEventListener('click', function menuGrandQuizz(){
                window.location = "./grandQuizz.html"
            })
        }

    } 
    else{ // Cache les boutons et affiche un message si le navigateur n'est pas compatible
        allBtn.forEach(elm => {
            elm.style.display = "none"
        });

        divMil.innerHTML = `<p style="font-weight : bolder;">Pas de support de stockage web, merci de l'activer sinon vous ne pourrez pas jouer au Quizz Biologie</p> <br> <p style='font-weight : bolder;'>Sur Chrome :</p><br><p>Parametres > Confidentialité et Securité > Parametre des sites (ou a cette url : "chrome://settings/content")</p><p> Verifiez que les cookies sont activé et qu'ils ne soient pas bloqué`
    }
}

/** Cette fonction permet d'"activer" un bouton de base, elle rajoute les couleurs et l'animation lorsque l'on passe la souris au dessus du bouton en question.
 * 
 * @param {element} element L'element du bouton qu'on veut "activer"
 * @param {string} color La couleur que l'on veut donner au bouton
 */
function activerBouton(element, color)
{
    element.style.cursor = "pointer"
    element.style.border = "1px solid"
    element.style.borderColor = color
    element.style.color = "black"
    element.style.backgroundColor = "rgb(0,0,0,0)"

    function mouseOverBtn(){
        element.style.transform = "scale(0.98)"
        element.style.boxShadow = "0 0 0.2em " + color + " inset"
        /* old style
        element.style.backgroundColor = color
        element.style.color = "white"
        */
    }
    
    function mouseOutBtn(){
        
        element.style.transform = "scale(1)"
        element.style.boxShadow = "none"
        /*
        element.style.cursor = "pointer"
        element.style.border = "2px solid" + color
        element.style.color = "black"
        element.style.backgroundColor = "rgb(0,0,0,0)"
        */
    }

    element.addEventListener("mouseover",mouseOverBtn)

    element.addEventListener("mouseout", mouseOutBtn)
}

function verifSauvegarde()
{
    if(localStorage.getItem("grandQuizzDebloque") == "undefined"){
        localStorage.setItem("grandQuizzDebloque", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("requinExplore") == "undefined"){
        localStorage.setItem("requinExplore", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("requinValide") == "undefined"){
        localStorage.setItem("requinValide", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("baleineExplore") == "undefined"){
        localStorage.setItem("baleineExplore", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("baleineValide") == "undefined"){
        localStorage.setItem("baleineValide", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("raieExplore") == "undefined"){
        localStorage.setItem("raieExplore", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("raieValide") == "undefined"){
        localStorage.setItem("raieValide", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("pieuvreABExplore") == "undefined"){
        localStorage.setItem("pieuvreABExplore", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("pieuvreABValide") == "undefined"){
        localStorage.setItem("pieuvreABValide", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("poissonClownExplore") == "undefined"){
        localStorage.setItem("poissonClownExplore", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("poissonClownValide") == "undefined"){
        localStorage.setItem("poissonClownValide", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("crocodileExplore") == "undefined"){
        localStorage.setItem("crocodileExplore", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("crocodileValide") == "undefined"){
        localStorage.setItem("crocodileValide", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("dauphineExplore") == "undefined"){
        localStorage.setItem("dauphineExplore", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("dauphineValide") == "undefined"){
        localStorage.setItem("dauphineValide", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("tortueDeMerExplore") == "undefined"){
        localStorage.setItem("tortueDeMerExplore", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("tortueDeMerValide") == "undefined"){
        localStorage.setItem("tortueDeMerValide", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("phoqueExplore") == "undefined"){
        localStorage.setItem("phoqueExplore", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
    if(localStorage.getItem("phoqueValide") == "undefined"){
        localStorage.setItem("phoqueValide", "false") //Sert a stocker l'information de facon permanente, permet de garder une sauvegarde
    }
}