function log(message) {
    console.log('>' + message)
}

/*APP*/
const cards = document.querySelectorAll('.card') //peguei os cards
const dropzone = document.querySelectorAll('.dropzone') //peguei o lugar aonde os cards seram soltos 

//começo do click e arrasto do card

cards.forEach(card=> {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart () { //criando a ação que ao clicar ele registre
//log('card: start dragging')
    dropzone.forEach(dropzone => dropzone.classList.add('hightight')) //quando eu clicar ele vai adcionar o texto a classe
    this.classList.add('is-dragging')
}
function drag () {
//log ('card: im dragging')  //criando a ação que ao cmovimentar ele registre
}
function dragend () {
//log('card; stop dragging')   //criando a ação que ao parar ele registre
    dropzone.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

//fim do click e arrast

//area aonde vamos soltar o card = dropzone

dropzone.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter (){
//log ('dropzone:ENTER IN ZONE')
}

function dragover() {
    // this = dropzone
    this.classList.add('over')

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this = dropzone
    this.appendChild(cardBeingDragged)
}
    
function dragleave (){
//log ('dropzone:leave')
//this =dropzone
    this.classList.remove('over')
}
function drop (){
// log ('dropzone:drop')
this.classList.remove('over')
}