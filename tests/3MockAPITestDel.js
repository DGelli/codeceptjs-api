Feature('MockAPI');


Scenario('Teste metodo Delete ', async ({ I }) => {
    let vg = require('./1MockAPITestGet').getVar()
    let vp = require('./2MockApiTestPost').getVar()
    response = await I.sendDeleteRequest('/Teste/' + vg.id + '/contatos/' + vp.idContato);

    // Valida sucesso, faixa de 200 a 299
    I.seeResponseCodeIsSuccessful();

    // Tabalha os dados do response
    I.assertEqual(response.data.id, vp.idContato)
    I.assertEqual(response.data.TesteId, vg.id)

    // Validar schema
    I.assertJsonSchema(response.data, require('../schemas/mokePost-schema.json'));
}).tag('@del');