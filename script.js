//Mudando a cor e adicionando a class selecionado.
const itemLista = [...document.getElementsByTagName('ol')]
itemLista.forEach(elemento => {
    elemento.addEventListener('click', () => {
        elemento.classList.toggle('selecionado')
    })
});


//Transferindo itens.

const primeiraLista = document.querySelector('.primeira');
const segundaLista = document.querySelector('.segunda');
function transferir(){
    //Organizo um array com os itens que foram selecionados.
    const primeiraListaSelecionados = [...primeiraLista.querySelectorAll('.selecionado')];
    const segundaListaSelecionados = [...segundaLista.querySelectorAll('.selecionado')];
    //itens selecionados na primeira lista.
    primeiraListaSelecionados.forEach( (elemento)=>{
        
       elemento.classList.remove('selecionado')
       
       segundaLista.appendChild(elemento)
    })
    //itens selecionados na segunda lista.  
    segundaListaSelecionados.forEach( (elemento)=>{
        
        elemento.classList.remove('selecionado')

        primeiraLista.appendChild(elemento)
    })
};