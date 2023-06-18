## Stripe (Payment) 
- API de pagamento focada em experiência de desenvolvimento

## OAuth 
- Padrão de autenticação que consiste em redirecionar o usuário a página de autenticação permitindo o acesso das informações pessoais e posteriormente ser mantido um estado de autenticação do usuário.

## FaunaDB
- Banco de Dados feito especificamente para aplicações `Serverless`

- `Serverless App`: 
    - Cada rota da aplicação será executada em um ambiente esolado
    - A cada execução das funções `Serverless`, a instância do servidor é criada e depois apagada.

## Prismic CMS (CMS) 
- `Content Management System`: Para criar um painel de administração para cadastrar dados e posteriormente serem exibidas. Dados esses que serão consumidos através do JSON.
    - Wordpress
    - Stripper 
#
# SPA (Single Page Application) - `ReactJS`
# SSR (Server-Side Rendering) - `NextJS`
# SSG (Static Site Generation)

# SASS
- `filename.scss`

    ```scss
        .title {
            color: red;
        }
    ```
- `filename.sass`
    ```css
        .title 
            color: red;
    ```

## `_app_.tsx`
- Componente que fica por volta de todas as páginas

## `_document.tsx`

## Layoutshift

## Three different ways to call an api
- Client-side: 
    - Ex: `Comentários de um post`
- Server-side: Dados dinâmico do usuário (quando é preciso indexação)
- Static Site Generation: Compartilhar o mesmo HTML com todos os usuários
    - Ex: `Conteudo de um blog`

## File System Rooting
- Arquivos se tornarem páginas

## As três principais funcionalidades do Next
- Rodam no momento em que os usuários não têm accessos
- Não são executadas no `Browser`
    - ...Static
    - Server Side Rendering
    - Api routes: Executadas utilizando o conceito do `Serverless` (sem servidor/backend)

# Estratégias Autenticação
- JWT (Storage): Com data de expiração
- Next Auth: Para sistema de autenticação simples ouloginsocial (com terceiros) ou quando nao queremos armazenar credenciais de acesso de usuários no backend. Fazendo a autenticação sem depender de um backend.
### Providers de autenticação externo (`Auth as a service`)
- Cognito (WS)
- Auth0