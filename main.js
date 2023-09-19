function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const Lista = document.querySelectorAll('.tecla');

let Contador = 0;

//enquanto-condiçao
while (Contador < lista.length) {
    //acessando um elemento da lista
    Lista[Contador].onclick = function () {
        Tocar('#som_tecla_toim')
    }

    const classe = Lista[Contador].classList[1];
    console.log(classe);
    Contador = Contador + 1;
    console.log(Contador);


}