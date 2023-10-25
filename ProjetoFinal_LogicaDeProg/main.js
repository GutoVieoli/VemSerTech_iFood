const funcoes = require("./functions");


let emails = [ 
    {
        email: 'gt@gmail.com',
        receive: true
    } ,
    {
        email: 'guzersk@yahoo.com',
        receive: true
    } ,
    {
        email: 'duda@gmail.com',
        receive: false
    } ,
    {
        email: 'titi@yahoo.com',
        receive: false
    } ,
    {
        email: 'claudio@gmail.com',
        receive: true
    } 
];


if(funcoes.getDayOfWeek() == 'Monday'){
    funcoes.sendToList(emails)
}