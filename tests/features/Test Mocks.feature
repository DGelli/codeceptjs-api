# language: pt
@Mocks
Funcionalidade: Test Mocks
Eu como usuario gostaria de validar o login

  @CT01
  Cenario: [Fluxo] Teste Fluxo Mock
    Dado que consulto os dados do usuario
    Quando incluo um cadastro
    E deleto o cadastro
    Entao os dados do usuario são exibido
