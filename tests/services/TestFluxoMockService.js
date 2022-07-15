const { I, data, utils, faker } = inject();

module.exports = {
    async makeRequestGet() {
        I.haveRequestHeaders({})
        I.amBearerAuthenticated()
        response = await I.sendGetRequest('/Teste');

        // Valida sucesso, faixa de 200 a 299
        I.seeResponseCodeIsSuccessful();

        // Trabalha os dados do response
        for (let obj of response.data) {
            console.log(obj.id)
            I.assertEqual(obj.id, '1')
            nome = obj.name
            id = obj.id
            if (obj.id === '1') break;
        }

        // Validar schema
        I.assertJsonSchema(response.data, require('../schemas/mokeGet-schema.json'));
    },

    async makeRequestPost() {
        I.haveRequestHeaders({})
        I.amBearerAuthenticated()
        response = await I.sendPostRequest('/Teste/' + id + '/contatos', {
            "fone": "55 11 99999-4444",
            "fone2": "55 11 99999-5555"
        });

        // Valida sucesso, faixa de 200 a 299
        I.seeResponseCodeIsSuccessful();

        // Trabalha os dados do response
        idContato = response.data.id

        // Validar schema
        I.assertJsonSchema(response.data, require('../schemas/mokePost-schema.json'));
    },

    async makeRequestDelete() {
        I.haveRequestHeaders({})
        I.amBearerAuthenticated()
        response = await I.sendDeleteRequest('/Teste/' + id + '/contatos/' + idContato);

        // Valida sucesso, faixa de 200 a 299
        I.seeResponseCodeIsSuccessful();

        // Tabalha os dados do response
        I.assertEqual(response.data.id, idContato)
        I.assertEqual(response.data.TesteId, id)

        // Validar schema
        I.assertJsonSchema(response.data, require('../schemas/mokePost-schema.json'));
    }
}
