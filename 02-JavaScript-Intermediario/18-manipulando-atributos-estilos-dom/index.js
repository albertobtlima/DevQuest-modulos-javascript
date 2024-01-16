function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');
    let primeiroPost = posts[0];

    console.log(posts);

    primeiroPost.style.backgroundColor = 'red';
}

function aumentarFonteSegundoPost() {
    let textPost = document.getElementsByClassName('texto-post');

    textPost[1].classList.add('fonte-grande');

    console.log(textPost[1].classList);
}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('genero-feminino')

    if (genero === 'M') {
        radioMasculino.checked = true;
    } else if (genero === 'F') {
        radioFeminino.checked = true;
    }
}
