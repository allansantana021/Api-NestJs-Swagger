# nestjs-infisical-aula

Projeto NestJS integrado ao Infisical para gerenciamento de secrets (DATABASE_URL, JWT_SECRET, API_KEY).

## Como rodar este projeto

### 1. Instalar as dependências
```bash
npm install
```

### 2. Instalar a Infisical CLI (se ainda não tiver)
```bash
npm install -g @infisical/cli
```

### 3. Fazer login no Infisical
```bash
npx infisical login
```

### 4. Vincular a pasta ao projeto no Infisical
```bash
npx infisical init
```
Selecione a organização e o projeto correspondente (ex: `nestjs-infisical-aula`) no painel do Infisical.
Cadastre os secrets `DATABASE_URL`, `JWT_SECRET` e `API_KEY` no ambiente **Development** antes deste passo.

### 5. Rodar a aplicação com o Infisical
```bash
npm run start:dev:infisical
```

Isso executa:
```
npx infisical run --env=dev -- npm run start:dev
```

O Infisical busca os secrets na nuvem e os injeta como variáveis de ambiente apenas durante a execução — não é criado nenhum arquivo `.env` local.

### 6. Testar
Acesse `http://localhost:3000` no navegador, ou veja o console do terminal. Deve aparecer:
```
Banco: <valor cadastrado no Infisical>
API Key: <valor cadastrado no Infisical>
JWT Secret: <valor cadastrado no Infisical>
```

## Estrutura relevante

- `src/app.module.ts` — importa o `ConfigModule` do `@nestjs/config`, que lê as variáveis de `process.env`
- `src/app.service.ts` — usa o `ConfigService` para acessar os secrets injetados pelo Infisical
- `.gitignore` — ignora `node_modules/`, `dist/`, `.env` e `.env.*` por segurança

## Boas práticas de segurança seguidas

- Nenhuma senha, token ou API Key está escrita no código-fonte
- Nenhum secret real está versionado no GitHub
- `.env` e `.env.*` estão no `.gitignore`, mesmo usando Infisical
- Recomendado cadastrar valores diferentes para Development, Staging e Production
