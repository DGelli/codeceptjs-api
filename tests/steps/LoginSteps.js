const fluxo = require('../services/TestFluxoMockService')


Given('que consulto os dados do usuario', async () => {
    await fluxo.makeRequestGet()
});

When('incluo um cadastro', async () => {
    await fluxo.makeRequestPost()
});

When('deleto o cadastro', async () => {
    await fluxo.makeRequestDelete()
});

Then('os dados do usuario são exibido', async () => {
    await fluxo.makeRequestGet()
});





