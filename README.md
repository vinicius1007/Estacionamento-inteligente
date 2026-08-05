# Smart Parking

MVP de uma aplicação web responsiva para monitoramento de vagas de um
estacionamento inteligente. O painel apresenta, de forma visual, quais vagas
estão disponíveis ou ocupadas, além de exibir um resumo atualizado da ocupação.

## Objetivo

Este projeto acadêmico tem como objetivo demonstrar a interface de um sistema
de estacionamento inteligente. Nesta primeira versão, os dados são simulados
no JavaScript. Futuramente, a aplicação poderá receber informações de sensores
e atualizar o estado das vagas em tempo real.

## Funcionalidades

- visualização de oito vagas numeradas;
- identificação por cores das vagas disponíveis e ocupadas;
- cards com total de vagas, vagas disponíveis e vagas ocupadas;
- horário da última atualização;
- layout responsivo para computadores, tablets e celulares;
- elementos das vagas gerados dinamicamente a partir de uma lista simulada.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript puro (Vanilla JavaScript).

O projeto não utiliza frameworks, bibliotecas externas ou processo de build.

## Como executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/vinicius1007/Estacionamento-inteligente.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Estacionamento-inteligente
   ```

3. Abra o arquivo `index.html` em um navegador moderno.

Como alternativa, use uma extensão de servidor local, como o Live Server, ou
execute um servidor HTTP local na pasta do projeto.

## Como testar

1. Confirme que o painel mostra oito vagas e que os três cards contabilizam os
   estados corretamente.
2. Confira se as vagas disponíveis aparecem em verde e as ocupadas em vermelho.
3. Altere os valores `available` no arquivo `script.js`, atualize a página e
   confirme que o mapa e os totais acompanham os novos estados.
4. Redimensione a janela ou use o modo de dispositivos do navegador para testar
   o layout em telas de computador e celular.

## Estrutura de arquivos

```text
Estacionamento-inteligente/
├── index.html  # Estrutura e conteúdo da página
├── style.css   # Estilos, cores e responsividade
├── theme.css   # Temas claro e escuro
├── script.js   # Dados simulados e renderização dinâmica
└── README.md   # Documentação do projeto
```
