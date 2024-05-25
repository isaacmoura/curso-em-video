function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 2000 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3){
                img.setAttribute('src', './fotos/bebe_m.png')
            }else if(idade < 10){
                img.setAttribute('src', './fotos/crianca_m.png')
            }else if(idade < 21){
                img.setAttribute('src', './fotos/jovem_menino.png')
            }else if(idade < 50){
                img.setAttribute('src', './fotos/adulto_m.png')
            }else{
                img.setAttribute('src', './fotos/senhor.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
                if (idade >= 0 && idade < 3){
                    img.setAttribute('src', './fotos/bebe_f.png')
                }else if(idade < 10){
                    img.setAttribute('src', './fotos/crianca_f.png')
                }else if(idade < 21){
                img.setAttribute('src', './fotos/jovem_menina.png')
                }else if(idade < 50){
                img.setAttribute('src', './fotos/adulto_f.png')
                }else{
                    img.setAttribute('src', './fotos/senhora.png')
                }
            }
        res.style.textAlign = 'auto'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}