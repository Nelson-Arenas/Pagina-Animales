function validaciones(rut) {
    if (rut.toString().trim() != '' && rut.toString().indexOf('-') > 0) {
        var caracteres = new Array();
        var serie = new Array(2, 3, 4, 5, 6, 7);
        var dig = rut.toString().substr(rut.toString().length - 1, 1);
        rut = rut.toString().substr(0, rut.toString().length - 2);

        for (var i = 0; i < rut.length; i++) {
            caracteres[i] = parseInt(rut.charAt((rut.length - (i + 1))));
        }

        var sumatoria = 0;
        var k = 0;
        var resto = 0;

        for (var j = 0; j < caracteres.length; j++) {
            if (k == 6) {
                k = 0;
            }
            sumatoria += parseInt(caracteres[j]) * parseInt(serie[k]);
            k++;
        }

        resto = sumatoria % 11;
        dv = 11 - resto;

        if (dv == 10) {
            dv = "K";
        } else if (dv == 11) {
            dv = 0;
        }

        if (dv.toString().trim().toUpperCase() == dig.toString().trim().toUpperCase())
            return true;
        else
            return false;
    } else {
        return false;
    }
}

function onRutBlur(obj) {
    if (VerificaRut(obj.value))
        alert("Rut correcto");
    else
        alert("Rut incorrecto");
};

function checkRut(rut) {
    
    var valor = rut.value.replace('.', '');
    
    valor = valor.replace('-', '');

    
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();

    
    rut.value = cuerpo + '-' + dv

    
    if (cuerpo.length < 7) {
        rut.setCustomValidity("RUT Incompleto");
        return false;
    }

    
    suma = 0;
    multiplo = 2;

    
    for (i = 1; i <= cuerpo.length; i++) {

        
        index = multiplo * valor.charAt(cuerpo.length - i);

        
        suma = suma + index;

        
        if (multiplo < 7) {
            multiplo = multiplo + 1;
        } else {
            multiplo = 2;
        }

    }

    
    dvEsperado = 11 - (suma % 11);

    
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;

    
    if (dvEsperado != dv) {
        rut.setCustomValidity("RUT Inválido");
        return false;
    }

    
    rut.setCustomValidity('');
}