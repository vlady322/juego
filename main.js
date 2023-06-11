function resetearValores() {
    document.getElementById('apu').value = 0000000000000; 
    document.getElementById('num').value = 0000000000000;
}
function ale() 
{
    var num1 = parseInt(Math.random() * 10);
    document.getElementById("num1").innerHTML = num1;

    var num2 = parseInt(Math.random() * 10);
    document.getElementById("num2").innerHTML = num2;

    var num3 = parseInt(Math.random() * 10);
    document.getElementById("num3").innerHTML = num3;

    var monto = parseInt(document.getElementById('apu').value);
    monto = monto * 2;
    var num = parseInt(document.getElementById('num').value);
    var c = 0;

    if (num === num1) {
        c = c + 1;
        if (num === num2) {
            c = c + 1;
            if (num === num3) {
                c = c + 1;
            }
        }
        else {
            if (num === num3) {
                c = c + 1;
            }
        }
    }
    else {
        if (num === num2) {
            c = c + 1;
            if (num === num3) {
                c = c + 1;
            }
        }
        else {
            if (num === num3) {
                c = c + 1;
            }
        }
    }
    var cad;
    switch (c) {
        case 0:
            cad = "Perdiste todo :(";
            break;
        case 1:
            cad = "No ganaste nada. vuelve a apostar si quieres ganar algo";
            break;
        case 2:
            cad = "Puedes retirar tu monto y volver a apostar";
            break;
        case 3:
            cad = `Ganaste ${monto} Bs y un auto suzuki 0km`;
            break;
    }
    document.getElementById("arg").innerHTML = cad;
}
function resetearPagina() {
    alert("Vuelva a ingresar el monto de dinero y el numero");
    location.reload();
    resetearValores();

}

