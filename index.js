var Leonardo = window.document.getElementById("leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")
var SetaDireita = window.document.getElementById("setadireita")

function rolardireita () {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display: none"
}

function rolaresquerda(){
    Leonardo.style = "display:felx"
    Bruna.style = "display:none"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

