/** abaixo foi substituido pelo array 'controle'
 const subtrair = document.querySelector("#subtrair");
 const somar = document.querySelector("#somar");
 */

const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica");
//console.log(estatistica) //teste

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((item)=>{    
        item.addEventListener("click",(e)=>{
            manipulaDados(e.target.dataset.controle,e.target.parentNode) //dataset.controle é o data-controle
            // console.log(e.target.textContent,e.target.parentNode)
            //textContent é o texto da tag
           atualizaEstatistica(e.target.dataset.peca); //dataset.peca é o data-peca
        
        }) 
    
})

// controle[1].addEventListener("click",()=>{manipulaDados('somar')})
// controle[0].addEventListener("click",()=>{manipulaDados('subtrair')})

function manipulaDados (operacao,controle) {
    const peca = controle.querySelector("[data-contador]");
    if (operacao === '-') {
        peca.value < 1 ? peca.value = 0: peca.value--
    }else{
        peca.value++
    }
}

function atualizaEstatistica(peca) {
    //console.log(pecas[peca])
    //textContent é o texto da tag
    estatistica.forEach((e)=>{
        e.textContent = parseInt(e.textContent) + pecas[peca][e.dataset.estatistica]
    })
}

function trocaImagem(cor){
   const trocarCor = document.querySelector(".robo");
   trocarCor.src="/img/Robotron 2000 - " + cor + "/robotron.png";
}