/*
var cursor = document.querySelector('.cursor')
var body = document.querySelector('body')
console.log(cursor)
document.addEventListener('mousemove', e=>{
    body.style.cursor = 'none'
    cursor.setAttribute('style', 'top:'+(e.pageY)+"px; left:" +(e.pageX)+"px;")
})

document.addEventListener('scroll', e=>{
    cursor.setAttribute('style', 'top:'+(window.scrollY + cursor.offsetTop)+"px; left:" +(cursor.offsetLeft)+"px;")
    console.log(document.documentElement.scrollTop)
    console.log(window.scrollY)

})
*/
var typeWorks = document.querySelector('#TypeWork')
var listWork = document.querySelector('#listWork')

for (var i = 0; i < typeWorks.childElementCount; i++){
    typeWorks.children[i].addEventListener('click', typeWorkClick)
}

function typeWorkClick(){
    for (var i = 0; i < typeWorks.childElementCount; i++){

       if(typeWorks.children[i].className != ""){
        typeWorks.children[i].classList.remove(typeWorks.children[i].className)
        typeWorks.children[i].style.marginRight = '0%'//
       }

    }
    switch(this.children[0].innerHTML.toLowerCase()){
        case 'all':
            this.classList.add('oui')
            break;
        case 'java':
            this.classList.add('red')
            break;
        case 'javascript':
            this.classList.add('yellow')
            break;
        case 'html-css':
            this.classList.add('blue')
            break;
        case 'sql':
            this.classList.add('orange')
            break;
        case 'shell':
            this.classList.add('black')
            break;
        case 'managment':
            this.classList.add('gray')
            break;
        case 'c#':
            this.classList.add('purple')
            break;
        default:
            console.log('erreur')
            break;
    }
    this.style.marginRight = '-35%'//
    WorkOfTypeWorks(this)
}

function WorkOfTypeWorks(e){
    var numWorks = 1;
    for (var i = 0; i < listWork.children.length; i++){
        listWork.children[i].style.display = 'none'
        var langs = listWork.children[i].className.split(' ')
        for(var j = 0; j < langs.length; j++){
            if ((langs[j] == e.children[0].innerHTML || e.children[0].innerHTML == "All" ) ||(langs[j] == 'CSharp' && e.children[0].innerHTML == 'C#')){
                listWork.children[i].style.display = 'block'
                
                if (e.children[0].innerHTML == "All"){
                    if (j==0 ){
                        listWork.children[i].children[0].id = 'Projet'+numWorks
                        
                        if (numWorks%2==0){
                            listWork.children[i].children[0].classList = 'ProjetsDroite'
                        }else{
                            listWork.children[i].children[0].classList = 'ProjetsGauche'
                        }

                        if (listWork.children[i].children[0].children[0].children[0].alt!=undefined){
                            if (numWorks%2!=0){
                                listWork.children[i].children[0].children[0].children[0].classList = 'etudeGauche'
                            }else{
                                listWork.children[i].children[0].children[0].children[0].classList = 'etudeDroite'
                            }
                        }

                        numWorks++
                        showAll.innerHTML = 'Cacher'
                        //Quand clique sur all, voir tout --> cacher
                        //affiche tout (meme voir tout)
                    }
                }else{
                    listWork.children[i].children[0].id = 'Projet'+numWorks

                    if (numWorks%2==0){
                        listWork.children[i].children[0].classList = 'ProjetsDroite'
                    }else{
                        listWork.children[i].children[0].classList = 'ProjetsGauche'
                    }

                    if (listWork.children[i].children[0].children[0].children[0].alt!=undefined){
                        if (numWorks%2!=0){
                            listWork.children[i].children[0].children[0].children[0].classList = 'etudeGauche'
                        }else{
                            listWork.children[i].children[0].children[0].children[0].classList = 'etudeDroite'
                        }
                    }
                    
                    numWorks++
                }
            }
        }

    }
}

var projects = document.querySelectorAll('#listWork img')
projects.forEach(e=>{
    if (e.alt != "etude"){
        e.addEventListener('mouseover', hover)
        e.addEventListener('mouseout', unhover)
    }
})
function hover(){
    //this.previousSibling.id = 'etudeHover'
    if (this.parentNode.previousSibling !=null){
        this.parentNode.previousSibling.id = 'etudeHover'
    }
}
       
function unhover(){
    //this.previousSibling.id = this.alt
    if (this.parentNode.previousSibling !=null){
        this.parentNode.previousSibling.id = this.alt
    }
}

listWork.style.gridTemplateRows+='1fr'
var images = document.querySelectorAll('#listWork img')
images.forEach(e=>{
    if (e.alt == 'Générateur de mot de passe'){
        e.addEventListener('click', mdp)
    }else if (e.alt == 'Quizz'){
        e.addEventListener('click', quizz)
    }else if(e.alt == 'Memories'){
        e.addEventListener('click', memories)
    }else{
        
    }
})

function mdp(){
    window.open("https://sasulg.github.io/GenerateurMdp", "popup");
}
function quizz(){
    window.open("https://sasulg.github.io/Quizz", "popup");
}
function memories(){
    window.open("https://sasulg.github.io/Memories", "popup");
}


var github = document.querySelector('#logo3')
github.addEventListener('click', git)
function git(){
    window.open("https://github.com/SasuLG", "popup");
}
//quand hover recuperer le parent et ajouter .etudeHover
//quand choisLang, modifier en conséquence par rapport au num projet donnée

//erreur quand hover un non etude