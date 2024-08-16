function calcularMedia(formulario){
    n1 = parseFloat(formulario.primeira.value);
    n2 = parseFloat(formulario.segunda.value);
    n3 = parseFloat(formulario.terceira.value);
    n4 = parseFloat(formulario.quarta.value);

    media = (n1 + n2 + n3 + n4) / 4;

    if(media<4){
        res = "reprovado!";
    }
    else if(media>=4 && media<6){
        res = " de IFA!";
    }
    else{
        res = "aprovado!";
    }
    document.getElementById("situacao").innerHTML = "A média do aluno(a) é " + media.toFixed(2) + ", portanto o aluno(a) está " + res;
}