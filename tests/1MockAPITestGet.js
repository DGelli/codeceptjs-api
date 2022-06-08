Feature('MockAPI');

let nome, id

const getVar = () => {
    return ({ nome, id })
};
exports.getVar = getVar;


Scenario('Teste metodo GET', async ({ I, D, U, conf }) => {
    console.log(conf)
    // to use class Utils
    console.log(U.getNumber())
    // to use massa de dados
    id = D.user.id
    // realizar chamada
    response = await I.sendGetRequest('/Teste');
    // Valida sucesso, faixa de 200 a 299
    I.seeResponseCodeIsSuccessful();
    // Tabalha os dados do response
    for (let obj of response.data) {
        console.log(obj.id)
        I.assertEqual(obj.id, '1')
        nome = obj.name
        id = obj.id
        if (obj.id === '1') break;
    }
    // Validar schema
    I.assertJsonSchema(response.data, require('../schemas/mokeGet-schema.json'));
}).tag('@get');