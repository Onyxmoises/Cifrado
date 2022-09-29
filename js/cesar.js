const cifCesar = () => {
    const mensaje = document.getElementById('menCesar').value;
    const clave = document.getElementById('claveCesar').value;
    const newMen = cifrar(mensaje, clave);
    document.getElementById('newMenCesar').value = newMen;
}
const desCesar = () => {
    const mensaje = document.getElementById('menCesar').value;
    const clave = document.getElementById('claveCesar').value;
    const newMen = descifrar(mensaje, clave);
    document.getElementById('newMenCesar').value = newMen;
}

const abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const cifrar = (texto, numero) => {
    let nuevoTexto = "";
    texto = texto.toUpperCase();
    let caracter = 0;
    for (let i = 0; i < texto.length; i++) {
        caracter = texto.charAt(i)
        let pos = abc.indexOf(caracter);
        if(pos == -1){
            nuevoTexto += caracter;
        }else{
            for(let j = 0; j < numero; j++){
                if(pos == 26){
                    pos = -1;
                    pos += 1;
                }else{
                    pos += 1;
                }
            }
            nuevoTexto += abc.charAt(pos);
        }
    }
    return nuevoTexto;
}
const descifrar = (texto, numero) => {
    let nuevoTexto = "";
    let caracter = 0;
    for (let i = 0; i < texto.length; i++) {
        caracter = texto.charAt(i)
        let pos = abc.indexOf(caracter);
        if(pos == -1){
            nuevoTexto += caracter;
        }else{
            for(let j = 0; j < numero; j++){
                if(pos == 0){
                    pos = 27;
                    pos -= 1;
                }else{
                    pos -= 1;
                }
            }
            nuevoTexto += abc.charAt(pos);
        }
    }
    return nuevoTexto;
}

