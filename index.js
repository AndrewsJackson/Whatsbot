// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(informações)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(8000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá '+ name.split(" ")[0] + ' ,já conhece o Botox?\n\n1 - Sim\n2 - Não, gostaria de mais informações\n3 - Outras perguntas'); //Primeira mensagem de texto
       
    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(6000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(6000);
        await client.sendMessage(msg.from, 'Que ótimo que já conhece!\n\nEstamos com uma promoção especial para você passar as festas de fim de ano bem nas fotos. 🥰\n\n10x R$ 69,90, face completa, incluso retoque com 15 dias e quantas unidades você precisar para travar as ruguinhas por completo');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Marcas utilizadas:\nDysport e Allergan\n\nNossos endereços:\nUnidade do Cabral: Av. Anita Garibaldi, 850\n\nUnidade Portão: Av. República Argentina, 2275');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Podemos agendar uma avaliação, é gratuita.\n\nLá você pode tirar todas as suas dúvidas e caso queira, pode aplicar logo em seguida.\n\nVamos agendar um horário?');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(6000);
        await client.sendMessage(msg.from, 'Vou passar mais informações:\n\nO Botox é utilizado para suavizar rugas e linhas de expressão.\n\nEle funciona relaxando temporariamente os músculos da face, o que impede que eles se contraiam e formem marcas, especialmente em áreas como a testa, entre as sobrancelhas e ao redor dos olhos (pés de galinha).\n\nO procedimento é rápido, praticamente indolor, e os resultados começam a aparecer em poucos dias. Tem durabilidade nas primeiras aplicações de em média 6 meses.\n\nInclui a aplicação de botox nessas regiões: Testa, sorriso, glabela, queixo, marionetes, calda da sombrancelha, abaixo dos olhos nas olheiras, bigode chinês  e código de barras.');

        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Veja um dos nossos resultados\n\nhttps://www.instagram.com/reel/C5qopEYr0Ql/?igsh=YmthYTR6MzR2YnU5');   
        

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Estamos com uma promoção especial para você passar as festas de fim de ano bem nas fotos. 🥰\n\n10x R$ 69,90 face completa, incluso retoque com 15 dias e quantas unidades você precisar para travar as ruguinhas por completo.\n\nSeria esse seu interesse?');
    
    }
    
    

    

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Qual seria sua dúvida?');
       

    }









});