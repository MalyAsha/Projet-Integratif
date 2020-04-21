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
        let explore = item.getElementsByTagName('label').explore
        let valide = item.getElementsByTagName('label').valide

        if(infoJeu[nomAnimal].explore)
        {
            explore.style.backgroundColor = "#4f6e88"
        }
        else {explore.style.backgroundColor = "#914d4d"}

        if(infoJeu[nomAnimal].valide)
        {
            valide.style.backgroundColor = "#4f6e88"
        }
        else {valide.style.backgroundColor = "#914d4d"}

        item.addEventListener('click', function(){
            window.location = infoJeu[nomAnimal].html
        })
    }
}