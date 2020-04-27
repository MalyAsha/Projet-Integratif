var btnRetour = document.getElementById("btnRetour")
var allAnimaux = document.getElementsByTagName("li")

var infoJeu = {
    requin : {
        explore : false,
        valide : false,
        html : "requin.html"
    },
    baleine : {
        explore : false,
        valide : false,
        html : "baleine.html"
    },
    raie : {
        explore : false,
        valide : false,
        html : "raie.html"
    },
    pieuvreAB : {
        explore : false,
        valide : false,
        html : "pieuvreAB.html"
    },
    poissonClown : {
        explore : false,
        valide : false,
        html : "poissonClown.html"
    },
    crocodile : {
        explore : false,
        valide : false,
        html : "crocodile.html"
    },
    dauphin : {
        explore : false,
        valide : false,
        html : "dauphin.html"
    },
    tortueDeMer : {
        explore : false,
        valide : false,
        html : "tortueDeMer.html"
    },
    phoque : {
        explore : false,
        valide : false,
        html : "phoque.html"
    }
}
function init(){
    btnRetour.addEventListener('click', function(){
        window.location = "./menu.html"
    })

    for(item of allAnimaux){
        let nomAnimal = item.id
        let exploreLabel = item.getElementsByTagName('label').explore
        let valideLabel = item.getElementsByTagName('label').valide
        infoJeu[nomAnimal].explore = localStorage.getItem(nomAnimal + "Explore")
        infoJeu[nomAnimal].valide = localStorage.getItem(nomAnimal + "Valide")
        if(infoJeu[nomAnimal].explore == "true")
        {
            exploreLabel.style.backgroundColor = "#4f6e88"
        }
        else {exploreLabel.style.backgroundColor = "#914d4d"}

        if(infoJeu[nomAnimal].valide == "true")
        {
            valideLabel.style.backgroundColor = "#4f6e88"
        }
        else {valideLabel.style.backgroundColor = "#914d4d"}

        item.addEventListener('click', function(){
            window.location = infoJeu[nomAnimal].html
        })
    }
}