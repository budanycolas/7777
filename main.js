function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const Lista = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto-condiçao
while (Contador < lista.length) {
    const classe = Lista[contador].classList[1];


    const idSom = `#som_${classe}`;
    //console.log(idosom)
    
    //acessando um elemento da lista
    Lista[contador].onclick = function () {
        Tocar(idSom)
    }

    Contador = Contador + 1;
    console.log(classe);
    console.log(contador);
    

}