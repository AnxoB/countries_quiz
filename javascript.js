let contador = 1;

function next() {
    document.getElementById(contador).classList.add('d-none');
    contador++;
    document.getElementById(contador).classList.remove('d-none');
}

function previous() {
    document.getElementById(contador).classList.add('d-none');
    contador--;
    document.getElementById(contador).classList.remove('d-none');
}

