# 🚀 Refund – Requisições HTTP
Sistema completo para gerenciamento de solicitações de reembolso, com autenticação por perfil (manager e employee), 
formulários dinâmicos e integração entre frontend e backend.
Este projeto é uma API REST desenvolvida como parte da minha jornada de aprendizado na [Rocketseat](https://www.rocketseat.com.br/).

-------
👨‍💻 Autor

laborado por Dev. Eduardo Marinho

---

## 📁 Estrutura do Projeto

Este repositório contém duas aplicações separadas:

- [`api/`](./api): Backend em Node.js + Express + Prisma
- [`web/`](./web): Frontend em React + Vite + TypeScript

---

🧠 Funcionalidades
🔐 Autenticação
- Cadastro e login com validação de campos
- Perfis distintos: manager e employee
- Redirecionamento automático conforme o tipo de usuário
- Proteção de rotas por perfil
📄 Reembolsos
- Criação de solicitações com upload de comprovantes
- Listagem paginada com filtro por nome
- Visualização detalhada de cada reembolso
- Ícones personalizados por categoria
📊 Interface
- Layout responsivo com navegação fluida
- Feedback visual em ações (loading, sucesso, erro)
- Separação clara entre rotas públicas e privadas
- Componentes reutilizáveis com estilização via TailwindCSS
⚙️ Backend
- API RESTful com rotas protegidas
- Autenticação via JWT
- Validação com Zod
- Banco de dados relacional com Prisma ORM

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT

### Frontend
- React
- Vite
- TypeScript
- TailwindCSS
- Axios
- Zod

---

## ▶️ Como rodar o projeto

### 🔧 API

```bash
cd api
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```
🌐 Web
cd web
npm install
npm run dev


O frontend espera que a API esteja rodando em http://localhost:3333.

📌 Observações
- Projeto separado por responsabilidade, mas integrado via chamadas HTTP.
- Estrutura pensada para escalar e facilitar manutenção.
- Código limpo, tipado e com foco em boas práticas.


-----

Se curtir o projeto, ⭐️ no repositório é sempre bem-vinda




-----
Certifique-se de configurar o arquivo .env com suas variáveis de conexão.

-----

## 📄 Licença
Este projeto está sob licença MIT.


---

##
--🧠 Analisar 📚 Aprender ❌ Errar  
    🔁 Refatorar  🛠️ Construir  
            → → → → → → →  
→ Esse é o caminho do Dev. — Edu Marinho






