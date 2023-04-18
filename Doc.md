## Babel
> Ferramenta que serve para converter o nosso código de uma maneira que todos os `Browsers` e todo ambiente do nosso app consiga entender todos os códigos.

## Webpack
> Ferramenta que estipula uma serie de configurações chamadaas de `louders` que ensinam a nossa aplicação como elaa deve tratar cada tipo de arquivo e o `Babel` irá converte-los em arquivos compreensiveis pelo `brower`

## OS TRÊS CONCEITOS MAIS IMPORTANTES DO REACT
- `Componente`
- `Propriedade = props`: Troca de informações entre repositórios
- `Estado`: 

## react refresh webpack
> Plugin para maner o estado dos componentes

## States
> São `Hooks/Ganchos`

- Atribuição via desestruturação
```javascript
    const [counter, setCounter] = useState(0);
```
- `useEffect`: Para disparar uma funcção quando algo acontecer no app (mudança de var etc).

## Global Style

```javascript
    export const GlobalStyle = createGlobalStyle`
     `   
        :root {
            --bg: #F0F2F5;
            --text: #969CB3;
            --title: #363F5F;
            --main-shape: #FFFFFF;
            --red-color: #E62E4D;
            --green-color: #33CC95;
            --blue-color: #5429CC;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        // font-size: 16px (Desktop)

        html {
            @media (max-width: 1080px) {
                font-size: 93.75%; // 16 x 0.9375 = 15px
            }

            @media (max-width: 720px) {
                font-size: 87.5%; // 16 x 0.875 = 14px
            }

            // rem = 1rem = 16px
        }

        body {
            background-color: var(--bg);
            -webkit-font-smoothing: antialiased;
        }

    `
```

## JSON Server
> Onde cada chave é uma rota da nossa app

## Miragg JS
> Para construção de `APIs fakes` dentro do frontend
- Banco de dados integrado
- Suporte a relacionamentos
- Preenchimento de `dados fakes`

## MSW
> Adiciona um `funcionamento fake` para camada de `network` do nosso app

## fetch
> API nativa para requisições `http`
- Desvantagens comparando com o `axios`
    - Repetir todo endereço da nossa app em cada requisição feita
    - Transformar o resultado da nossa resposta em `json` a cada requisição feita.

## Axios
> Configura cliente `http`
- Interceptações nas requisições e nas respostas

## Repasse de funções
> Usamos no componente modal