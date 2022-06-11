Feature('MockAPI');

let nome, id

const getVar = () => {
    return ({ nome, id })
};
exports.getVar = getVar;


Scenario('Teste Fluxo', async ({ I, D, U, conf }) => {
    I.haveRequestHeaders({})
    I.amBearerAuthenticated()
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

    I.haveRequestHeaders({})
    I.amBearerAuthenticated()
    response = await I.sendPostRequest('/Teste/' + id + '/contatos', {
        "fone": "55 11 99999-4444",
        "fone2": "55 11 99999-5555"
    });
    I.seeResponseCodeIsSuccessful();
    idContato = response.data.id

    I.haveRequestHeaders({})
    I.amBearerAuthenticated()
    response = await I.sendDeleteRequest('/Teste/' + id + '/contatos/' + idContato);
    I.seeResponseCodeIsSuccessful();
}).tag('@fluxo');