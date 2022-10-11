Esse projeto foi desenvolvido por _[Thiago Oliveira]

# Project Weather App

Projeto que simula um app de previsão do tempo, utilizando a API do [weatherApi](https://weatherapi.com/).
Foi desenvolvido com reactjs e styled-components.

## Instalação do projeto localmente:

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:

```javascript
  mkdir weather-app
```

2. Entre no diretório que acabou de criar e depois clone o projeto:

```javascript
  cd weather-app
  git clone git@github.com:thiagolvr/weather-project.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:

```javascript
  cd weather-app
  npm i
```

4. Inicialize a aplicação localmente com comando **npm start** e acesse o endereço **http://localhost:3000**:

```javascript
  npm start
```

<details>
  <summary>
    <strong>💡 Deploy</strong>
  </summary><br>

- Foi utilizado o serviço Netlify para fazer o deploy da aplicação.
- A aplicação está disponível no endereço: https://weather-app-thiagolvr.netlify.app/
</details>

<details>
  <summary>
    <strong>🐳 Rodando no Docker vs Localmente</strong>
  </summary><br>

## Docker

> Rode os serviços `node` com o comando `docker compose up -d`.

- Esse serviço irá inicializar um container chamado `weather-app`.
- A partir daqui você pode rodar o container `weather-app` via CLI ou via um editor de código de sua preferência. Ex: VSCode.
- Lembre-se de verificar se a porta 3000 não está ocupada.
- A aplicação estará disponível em `http://localhost:3000`.
- A flag `-d` roda o container em segundo plano.
- Para parar o container, utilize o comando `docker compose down`.

> Use o comando `docker container exec -it weather-app sh`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
- Você poderá usar esse terminal para executar os comandos do npm (`npm start`, `npm test`, `npm run test`, ...)

> As dependências já foram instaladas durante o processo com o comando `docker compose up -d`.

⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run test, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker container exec` citado acima.

## Localmente

> Instale as dependências com `npm install`

- Para rodar localmente, é preciso ter o node instalado na sua máquina.
- A versão do node precisa ser 16 ou superior.

</details>

<details>
  <summary>
    <strong>🛠 Testes</strong>
  </summary><br>

- Para executar os testes localmente, digite no terminal o comando `npm test`.
- Para executar os testes no Docker, digite no terminal o comando `docker container exec -it weather-app sh` e depois `npm test`.

<details>
  <summary>
    <strong>🛠 Cobertura</strong>
  </summary><br>

- Para executar a cobertura localmente, digite no terminal o comando `npm run test-coverage`.
- Para executar a cobertura no Docker, digite no terminal o comando `docker container exec -it weather-app sh` e depois `npm test-coverage`.

</details>

## Referências

[Documentação Oficial - Docker](https://docs.docker.com)<br>
[Documentação Oficial - React Hooks](https://react-redux.js.org/api/hooks)<br>
[Documentação Oficial - Styled Components](https://styled-components.com/docs)<br>
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)<br>
