function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora}h`
    if(hora >= 0 && hora < 12){
        img.src = './fotos/amanhecer.png'
        document.body.style.background = "#f23a02"
    }else if (hora >= 12 && hora <= 18){
        img.src = './fotos/entardecer.png'
        document.body.style.background = "#fc7a00"
    }else{
        img.src = './fotos/anoitecer.png'
        document.body.style.background = "#1a4770"
    }
}