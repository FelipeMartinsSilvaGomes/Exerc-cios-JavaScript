function obterMedia(){
    var n1 = document.getElementById("nota1").value;
    var n2 = document.getElementById("nota2").value;

    var media = (parseFloat(n1)+parseFloat(n2))/2;

    document.getElementById("resultado").innerText=media;
}