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
    Olá, [Cliente],

    Esperamos que você esteja tão animado quanto nós, pois na CarStore, estamos prontos para fazer seus sonhos de ter um carro novo se tornarem realidade! Temos promoções incríveis que você não vai querer perder.

    O Carro do Ano 2023:
    Eleito por especialistas, o Honda HR-V é a estrela do momento. Com seu design imponente, alto desempenho com baixo consumo de combustível, amplo espaço interno e conectividade de ponta, ele proporciona uma experiência única.

    Carros Mais Vendidos:
    Para tornar sua escolha ainda mais fácil, aqui está uma lista dos carros mais vendidos do momento:

    Fiat Strada
    Volkswagen Polo
    Chevrolet Onix
    Hyundai HB20
    Condições Incríveis:

    Financiamento Flexível: Oferecemos opções de financiamento com taxas altamente competitivas.
    Valorização do seu Usado: Se você tem um veículo usado, aceitamos como parte do pagamento e garantimos a melhor avaliação do mercado.
    Garantia Estendida: Todos os nossos veículos incluem uma garantia estendida para garantir sua tranquilidade total.
    Estamos à sua disposição para agendar um test drive, responder a qualquer pergunta que você possa ter ou ajudá-lo a escolher o veículo perfeito para você. Não perca esta oportunidade de adquirir um carro novo e emocionante!

    Mas lembre-se, essas promoções são por tempo limitado. Marque já a sua visita à CarStore e dê o próximo passo em direção ao carro dos seus sonhos.

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
