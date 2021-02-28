const cpf = "12345678909";

function verificação(a) {
    const array = a.split('');
    if (array.length != 11) {
        return console.log("cpf inválido não tem 11 digitos");
    }

    if (!todosiguais(array)) {
        if (calculoVerificador1(array) == array[9]) {
            if (calculoVerificador2(array) == array[10]) {
                return console.log("cpf valido")
            } else {
                console.log("segundo digito verificador invalido")
            }
        } else {
            return console.log("primeiro digito verificador invalido")
        }
    } else {
        return console.log("cpf inválido, todos os valores são iguais");
    }
}

function todosiguais(a) {
    const filtrado = a.filter(function(elem, pos, arr) {
        return arr.indexOf(elem) == pos;
    })
    if (filtrado.length == 1) {
        return true;
    } else {
        return false;
    }
}

function calculoVerificador1(a) {
    const mult = (a[0] * 1 + a[1] * 2 + a[2] * 3 + a[3] * 4 + a[4] * 5 + a[5] * 6 + a[6] * 7 + a[7] * 8 + a[8] * 9) % 11;
    if (mult == 10) {
        return 0
    }
    return mult
}

function calculoVerificador2(a) {
    const mult = (a[0] * 0 + a[1] * 1 + a[2] * 2 + a[3] * 3 + a[4] * 4 + a[5] * 5 + a[6] * 6 + a[7] * 7 + a[8] * 8) % 11;
    if (mult == 10) {
        return 0
    }
    return mult
}

verificação(cpf);