# 🌌 API Star Wars

### Projeto desenvolvido para a comunidade **Front End Fusion**, com foco em aprendizado e colaboração prática usando tecnologias modernas do ecossistema JavaScript/TypeScript.

---

## 📖 Introdução

Esta é uma API RESTful construída com **NestJS** que simula um sistema de dados do universo Star Wars. O objetivo é oferecer uma base sólida para consumir dados de planetas, personagens, sistemas solares e naves, permitindo práticas reais com back-end moderno, autenticação JWT, banco de dados relacional (PostgreSQL) e boas práticas de arquitetura.

Esta API faz parte de um desafio técnico da **comunidade Front End Fusion**, onde os participantes desenvolvem aplicações em conjunto com foco em aprendizado colaborativo.

---

## 🧪 Funcionalidades

- ✅ Autenticação de usuários com JWT  
- 🪐 Cadastro e listagem de planetas  
- 🌌 Cadastro de sistemas solares com relação 1:N (um sistema pode ter vários planetas)  
- 👨‍🚀 Cadastro e listagem de personagens  
- 🚀 Cadastro e listagem de naves  
- 🔐 Rotas protegidas para usuários autenticados  

---

## 🛠️ Tecnologias utilizadas

| Tecnologia     | Função                                     |
|----------------|--------------------------------------------|
| **NestJS**     | Framework backend com suporte a TypeScript |
| **TypeORM**    | ORM para interação com o banco PostgreSQL  |
| **PostgreSQL** | Banco de dados relacional                  |
| **JWT**        | Autenticação segura via token              |
| **dotenv**     | Gerenciamento de variáveis de ambiente     |

---

## 📁 Estrutura de Pastas

src/
├── auth/ # Módulo de autenticação <br>
├── planetas/ # CRUD de planetas<br>
├── sistemas-solares/ # CRUD de sistemas solares<br>
├── personagens/ # CRUD de personagens<br>
├── naves/ # CRUD de naves espaciais<br>
├── user/ # Cadastro e autenticação de usuários<br>
├── database/ # Configurações do banco de dados<br>
├── main.ts # Ponto de entrada da aplicação
<br>
## Instale as Dependências

npm install

## Autenticação

Esta API utiliza o padrão JWT (JSON Web Token) para autenticação, garantindo segurança e facilidade no controle de acesso às rotas protegidas.

Como funciona?
Login:
O usuário envia suas credenciais (e-mail e senha) para a rota /auth/login.

Geração do Token:

Se as credenciais forem válidas, a API gera um token JWT contendo as informações do usuário (payload), assinado com a chave secreta definida em JWT_SECRET.

Envio do Token:

O token é retornado na resposta do login e deve ser armazenado pelo cliente (frontend/mobile), geralmente em armazenamento local seguro (ex: localStorage ou httpOnly cookies).

Acesso às rotas protegidas:
Para acessar rotas que exigem autenticação, o cliente deve enviar o token no header da requisição usando o formato:

Authorization: Bearer <seu_token_jwt>

Validação do Token:

O backend valida o token em cada requisição às rotas protegidas, garantindo que o usuário está autenticado e autorizado.

## 📚 Documentação da API com Swagger

Para facilitar o entendimento e o uso da API, o projeto conta com uma documentação automática gerada pelo Swagger, que descreve todos os endpoints, parâmetros, modelos de dados e respostas possíveis.

Como acessar?
Depois de rodar a aplicação (npm run start:dev), você pode acessar a documentação Swagger pelo navegador no endereço:




Lá você verá uma interface visual onde é possível:

Visualizar todos os recursos disponíveis da API

Testar as rotas diretamente pelo navegador (executar requisições)

Conferir os parâmetros esperados e os exemplos de respostas

Obter descrições claras de cada endpoint e suas funcionalidades

após fazer o clone do répositorio você podera acessar a documentação pelo link http://localhost:4000/api

Benefícios do Swagger
Facilita o desenvolvimento frontend e testes da API

Serve como documentação oficial para desenvolvedores que irão consumir a API

Ajuda a manter o contrato da API atualizado e claro durante o desenvolvimento

link de acesso a API: <br>

https://star-wars-1-addk.onrender.com/swagger

## 🤝 Contribuições
Contribuições são sempre bem-vindas! Este projeto foi criado como parte de um desafio da comunidade Front End Fusion, mas você pode ajudar a evoluí-lo ainda mais.<br>

💬 Adoraria trocar ideias com cada um de vocês!
Se tiver sugestões, feedbacks construtivos ou quiser apenas conversar sobre o projeto, sinta-se à vontade para entrar em contato. Toda troca de conhecimento é bem-vinda e valorizada!

<strong>Como contribuir ? </strong><br>
 1 - Fork o repositório

 2 - Crie uma branch com a sua feature ou correção :<br>
 git checkout -b minha-nova-feature

 3 - Faça seus commits com mensagens claras
 
 4 - Envie o código para seu fork:<br>
 git push origin minha-nova-feature

 5 - Abra um Pull Request com uma descrição detalhada da sua contribuição

## 📝 Licença
Este projeto está licenciado sob a Licença MIT - veja os detalhes abaixo:<br>

<strong>MIT License.

 <strong>Copyright (c) 2025 Wellerson

""Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.""
