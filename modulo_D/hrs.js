var tempo = new Date()
var hr = tempo

console.log(hr);

if (hr > 12){
    console.log("bom dia");
}else if(hr >= 18){
    console.log('boa tarde');
}else if (hr >= 23 ) {
    console.log("boa noite");
}else if(hr > 6){
    console.log("boa madrugada");
}