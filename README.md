# Gerador de CNPJ

Este é um script para gerar números de CNPJ aleatórios, útil para testar APIs no Postman.

## Como usar

1. Copie o conteúdo deste script.
2. Abra o Postman e vá para a aba "Pre-request Script" do seu request.
3. Cole o script na caixa de texto.
4. Adicione a variável `{{CNPJ}}` no seu request, onde desejar utilizar o CNPJ gerado.

A cada solicitação que você fizer, o script será executado antes de enviar a solicitação, gerando um novo CNPJ em cada solicitação.

## Observações

- Este script gera números de CNPJ aleatórios e não representa números de CNPJ reais.
- Certifique-se de que o endpoint da API aceita CNPJs gerados aleatoriamente para fins de teste.

Sinta-se à vontade para personalizar o script de acordo com suas necessidades específicas.
