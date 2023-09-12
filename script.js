const itemLista = [...document.getElementsByTagName('ol')]
const selecionados = [...document.getElementsByClassName('.selector')]



itemLista.forEach(elemento => {
    elemento.addEventListener('click', ()=>{
        elemento.classList.toggle('selector')
    })
})

function myFunction() {
    itemLista.getElementsByClassName('selector')
    
}


console.log(itemLista)
console.log(selecionados)