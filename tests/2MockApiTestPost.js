Feature('MockAPI');

let idContato

const getVar = () => {
    return ({ idContato })
};
exports.getVar = getVar;

Scenario('Teste metodo POST ', async ({ I }) => {
    let v = require('./1MockAPITestGet').getVar()
    response = await I.sendPostRequest('/Teste/' + v.id + '/contatos', {
        "fone": "55 11 99999-4444",
        "fone2": "55 11 99999-5555"
    });

    // Valida sucesso, faixa de 200 a 299
    I.seeResponseCodeIsSuccessful();

    // Tabalha os dados do response
    idContato = response.data.id

    // Validar schema
    I.assertJsonSchema(response.data, require('../schemas/mokePost-schema.json'));
}).tag('@post');

