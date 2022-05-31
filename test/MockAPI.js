Feature('MockAPI');
const massa = require('../resources/data/' + process.env.env + '/massa.json')

let nome, id, idContato

Scenario('Teste metodo GET', async ({ I }) => {
    const response = await I.sendGetRequest('/Teste');

    // Valida sucesso, faixa de 200 a 299
    I.seeResponseCodeIsSuccessful();

    // Tabalha os dados do response
    for (let obj of response.data) {
        console.log(obj.id)
        I.assertEqual(obj.id, '1')
        nome = obj.name
        // id = obj.id
        id = massa.user.id
        if (obj.id === '1') break;
    }

    // Validar schema
    I.assertJsonSchema(response.data, require('../schemas/mokeGet-schema.json'));
}).tag('@get');


Scenario('Teste metodo POST ', async ({ I }) => {
    const response = await I.sendPostRequest('/Teste/' + id + '/contatos', {
        "fone": "55 11 99999-4444",
        "fone2": "55 11 99999-5555"
    });

    // Valida sucesso, faixa de 200 a 299
    I.seeResponseCodeIsSuccessful();

    // Tabalha os dados do response
    console.log(response.data)
    idContato = response.data.id

    // Validar schema
    I.assertJsonSchema(response.data, require('../schemas/mokePost-schema.json'));
}).tag('@post');


Scenario('Teste metodo Delete ', async ({ I }) => {
    const response = await I.sendDeleteRequest('/Teste/' + id + '/contatos/' + idContato);

    // Valida sucesso, faixa de 200 a 299
    I.seeResponseCodeIsSuccessful();

    // Tabalha os dados do response
    console.log(response.data)
    I.assertEqual(response.data.id, idContato)
    I.assertEqual(response.data.TesteId, id)

    // Validar schema
    I.assertJsonSchema(response.data, require('../schemas/mokePost-schema.json'));
}).tag('@del');