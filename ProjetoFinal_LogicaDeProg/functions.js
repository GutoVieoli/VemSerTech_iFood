const enviarEmail = require("./envia-email");


function getDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    return daysOfWeek[dayIndex];
}
  
function createEmailBody() {
    const emailSubject = ` Grandes Promoções de Carros na CarStore - Não perca esta oportunidade!`
    const emailBody = `
      Olá,
  
      Esperamos que você esteja tão empolgado quanto nós, porque na CarStore, estamos prontos para tornar seus sonhos de carro novo realidade!
      Temos promoções incríveis que você não vai querer perder.

      O Carro do Ano 2023: Porsche 911 S/T

      Oferta Especial de Financiamento: Financie seu carro em até 60 meses com parcelas que cabem no seu bolso!

      Carros Mais Vendidos: Porsche 911, BMW M3, Ford Mustang, Porsche Taycan e Jaguar F-Type.

      Não espere! Estas promoções são por tempo limitado. Marque já a sua visita à CarStore e dê o próximo passo em direção ao carro dos seus sonhos.


      Atenciosamente,
      Leonardo S.
      CarStore
    `;
    return {emailSubject, emailBody};
}

function sendToList(emails){
    emails.forEach(e => {
        if(e.receive == true)
            sendEmails(e.email);
    });
}

function sendEmails(email) {
    try {
        const corpoEmail = createEmailBody();
        subject = corpoEmail.emailSubject;
        body = corpoEmail.emailBody;
        const result = enviarEmail(email, subject, body)
        if (result.status == "Error"){
            throw new Error(result.message)
        }
        console.log(result)
        return result

    } catch (error) {
        console.error(`Houve um erro ao tentar enviar o e-mail: "${error.message}"`)
    }
}


module.exports =  {getDayOfWeek,  sendToList};