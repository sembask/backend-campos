# Backend para Teste Técnico Brasão Sistemas



Este é o backend para o teste técnico, construído utilizando as seguintes tecnologias:



* **Node.js:** Um ambiente de tempo de execução JavaScript construído sobre o motor JavaScript do Chrome.

* **Express:** Um framework web minimalista e flexível para Node.js.

* **Zod:** Uma biblioteca de declaração e validação de esquemas TypeScript com inferência de tipos.

* **TypeORM:** Um ORM (Object-Relational Mapping) para TypeScript e JavaScript que pode ser executado em Node.js, Browser, NativeScript, Ionic, Deno e Electron plataformas e pode ser usado com TypeScript e JavaScript.

* **PostgreSQL:** Um sistema de gerenciamento de banco de dados relacional de código aberto.
* **Swagger:** Está disponível em: SEUHOST/api-docs


## Tecnologias Utilizadas



* **Node.js (versão compatível com as dependências)**

* **Express v5.1.0**

* **Zod v3.24.4**

* **TypeORM v0.3.23**

* **PostgreSQL (versão compatível com o driver `pg`)**

* **TypeScript v5.8.3**

* **cors v2.8.5:** Middleware para habilitar o CORS (Cross-Origin Resource Sharing).

* **dotenv v16.5.0:** Para carregar variáveis de ambiente do arquivo `.env`.

* **express-openapi-validator v5.4.9:** Middleware para validar requisições e respostas HTTP com base em uma especificação OpenAPI.

* **swagger-ui-express v5.0.1:** Para servir e visualizar a documentação da API Swagger UI.

* **@anatine/zod-openapi v2.2.8:** Utilitário para gerar esquemas OpenAPI a partir de esquemas Zod.

* **pg v8.15.6:** Driver PostgreSQL para Node.js.

* **reflect-metadata v0.2.2:** Dependência para o TypeORM funcionar corretamente.

* **tsx v4.19.4:** Executor de TypeScript para Node.js com suporte a `watch` para desenvolvimento.



## Passo a Passo para Rodar o Projeto Localmente



Siga estes passos para clonar e executar o backend na sua máquina:



1.  **Clonar o Repositório do GitHub:**



    Abra o seu terminal ou prompt de comando e navegue até o diretório onde você deseja clonar o projeto. Em seguida, execute o seguinte comando, substituindo `https://github.com/sembask/backend-campos.git` pela URL do repositório do GitHub:



    ```bash

    git clone https://github.com/sembask/backend-campos.git

    ```



2.  **Navegar para o Diretório do Projeto:**



    Após a clonagem, entre no diretório do projeto backend:



    ```bash

    cd backend-campos

    ```



3.  **Instalar as Dependências:**



    Este projeto utiliza o npm (Node Package Manager) para gerenciar as dependências. Certifique-se de ter o Node.js e o npm instalados na sua máquina. Execute o seguinte comando para instalar todas as dependências listadas no arquivo `package.json`:



    ```bash

    npm install

    ```



4.  **Configurar as Variáveis de Ambiente:**



    Crie um arquivo chamado `.env` na raiz do seu projeto (se ele ainda não existir) e configure as seguintes variáveis de ambiente com as suas credenciais do PostgreSQL:



    ```

    PORT=5001

    HOST=localhost

    DATABASE=campos-db

    DBPORT=5432

    USER=

    PASSWORD=

    ```



    **Observação:** O projeto utiliza a biblioteca `dotenv` para carregar essas variáveis de ambiente.



5.  **Configurar o Banco de Dados PostgreSQL:**



    Certifique-se de ter o PostgreSQL instalado e em execução na sua máquina. Crie um banco de dados com o nome especificado na variável `DATABASE` do seu arquivo `.env` (`campos-db` por padrão) e configure as credenciais de acesso conforme as variáveis `USER` e `PASSWORD`.



6.  **Executar as Migrações do TypeORM:**



    Este projeto utiliza o TypeORM para gerenciar o esquema do banco de dados através de migrations. Execute os seguintes comandos para criar o esquema do banco de dados:



    * **Gerar Migração (se necessário criar uma nova):**



        ```bash

        npm run migration:generate

        ```



        Este comando irá gerar um novo arquivo de migration na pasta `src/infra/database/migrations/` com base nas suas alterações nas entidades. Edite o arquivo gerado para refletir as mudanças desejadas no esquema.



    * **Executar as Migrações Pendentes:**



        ```bash

        npm run migration:run

        ```



        Este comando irá executar todas as migrations pendentes e criar ou atualizar o esquema do seu banco de dados.



7.  **Executar a Aplicação em Modo de Desenvolvimento:**



    Para iniciar o servidor backend utilizando o `tsx` com suporte a `watch` (para recarregar automaticamente em caso de alterações no código), execute o seguinte comando:



    ```bash

    npm run dev

    ```



    Isso irá iniciar o servidor Express. A aplicação estará disponível na porta configurada na variável `PORT` do seu arquivo `.env` (por padrão, `http://localhost:5001`).



## Comandos Necessários



Aqui estão os comandos mais comuns que você pode usar neste projeto:



* **`npm install`**: Instala todas as dependências do projeto.

* **`npm run dev`**: Inicia o servidor backend em modo de desenvolvimento com `tsx` e `watch` para recarregamento automático.

* **`npm run migration:generate`**: Gera um novo arquivo de migration.

* **`npm run migration:run`**: Executa as migrations pendentes.

* **`npm run migration:revert`**: Reverte a última migration executada.



---



Obrigado por avaliar meu teste técnico. Espero que as instruções acima sejam claras e ajudem a rodar o backend localmente.
