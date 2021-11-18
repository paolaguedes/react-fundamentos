# React fundamentos

### JSX

É uma extensão de sintaxe para JavaScript. Com ele fica possível mesclar códigos HTML com JS. O exmplo abaixo não é html nem js, mas sim jsx.

  ```js
    const element = <h1>Hello, world!</h1>;
  ```

### Babel

É um transpilador que permite escrever javascript de forma moderna, usando funções e recursos que ainda não estão disponíveis de forma nativa nos browsers, e torna possível a compatibilidade com JSX. Para instalar:

  ```js
    yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader -D
  ```
  
### Webpack

 O webpack permite escrever módulos e empacotar todos eles em um ou mais pacotes. Além do javascript, ele também pode incluir outros tipos de arquivos como css, font, image, HTML e etc. e em, seguida transformá-los no formato aceitável do webpack. Para instalar:
 
   ```js
    yarn add webpack webpack-cli -D
  ```
 
 - Entry especifica qual pasta e arquivo precisa ser empacotado, ou seja, onde o webpack deve iniciar a construção do seu grafo de dependências interno. No caso abaixo é na pasta src, arquivo index.js.
 - Output é a pasta que será gerada para conter os pacotes. No caso abaixo é a build, e o arquivo a ser criado é bundle.js. O [hash] foi colocado para forçar o navegador a atualizar o arquivo bundle se houver alterações.
 
 ```js
 entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[hash].js',
    } 
 ```
 
### Props e Prop children
  >
  > Todo componente React aceita um único argumento de objeto "props", significa propriedades, com dados e retorna um elemento React.
  > 
  
  O componente abaixo é um exemplo:
  
  ```js
  function Header({title, children}) {
    return (
        <>
        <h1>{title}</h1>
        {children}
        <hr/>
        </>
    )
  }
  ```
  O componente Header possui as propriedades title e children (que significa que qualquer nó/filho pode ser adicionado ou não). As {} foram usadas na desestruturação assim não é necessário escrever props.nomePropriedade. 
  
  No componente principal o Header poderia ser escrito assim:
  
  ```js
  <Header title="Titulo qualquer">
		<h2>
			posts da semana
			<button onClick={handleRefresh}>atualizar</button>
		</h2>
</Header>
  ```
  
### Rnderização de listas

  Todo componente pode ser repetido quantas vezes você quiser. Mas uma forma mais eficiente de fazer essa repetição é usar o método .map. Suponhamos o componente Post que será repetido n vezes dentro do componente principal.
  
  ```js
  function Post(props){
    return(
        <>
        <article>
        <strong>{props.post.title}</strong>
        <button onClick={() => props.onRemove(props.post.id)}>
            Remover
        </button>
        <br/>
        <small>{props.post.subtitle}</small>
        <br/>
        <small>Likes: {props.likes / 2}</small>
        </article>
        <br/>
        </>
    )
  }
  ```
  
  Ele possui como propriedades o title, subtitle, likes e id. Então é possível criar um array que de objetos que contenham esses valores. Assim:
  
   ```js
const posts = [		
      { id: Math.random(), title: 'Titulo1', subtitle: 'Subtitulo 1', likes: 20},
      { id: Math.random(), title: 'Titulo2', subtitle: 'Subtitulo 2', likes: 10},
      { id: Math.random(), title: 'Titulo3', subtitle: 'Subtitulo 3', likes: 50},
]
  ```
  
  O método map serve para modificar os elementos de um array conforme especificarmos e gerar um novo. Um exemplo básico é quando queremos que todos os números de um array sejam multiplicados por outro número e assim criarmos um segundo array modificado com base no original. Nesse caso queremos que o React converta cada item/objeto do array em um componente do tipo Post.
  
  ```js
  	{
			posts.map( post => (
				<Post 
					key={post.id}
					likes={post.likes}
					post={{
						id: post.id,
						title: post.title,
						subtitle: post.subtitle,
					}}	
				/>
			))
		}
  ```
 Acima estamos pegando o array posts, colocando o método map para mapear cada item. Passamos o parâmetro post na nossa função e dentro dela o que queremos 'transformar'. Observamos que cada propriedade do item em questão será iterada e atribuida o valor contido no objeto do array. 
 
 Fazendo isso não é necessário copiar e colar o <Post/> 3 vezes, e o código fica mais inteligente e 'compacto'.
 
### useState
  
  É um React Hook que nos permite alterar um elemento a partir de seu estado anterior. Nele definimos um estado inicial e a função que será usada para alterá-lo. Voltando para o exemplo dos Posts, suponhamos que queremos acrescentar mais post ao nosso site de forma mais dinâmica. Para isso podemos usar o useState para dizer como nossa página irá começar, ou seja, os posts iniciais e adicionarmos uma função para gerar mais posts.
  
 ```js
  	const [posts, setPosts] = useState([		
     { id: Math.random(), title: 'Titulo1', subtitle: 'Subtitulo 1', likes: 20},
     { id: Math.random(), title: 'Titulo2', subtitle: 'Subtitulo 2', likes: 10},
     { id: Math.random(), title: 'Titulo3', subtitle: 'Subtitulo 3', likes: 50},
		])
```

A declaração desse hook é de forma generalizada assim:

  - count: contador que começa a partir do estado inicial e vai sendo incrementado de acordo com o estado anterior;
  - setCount: função que será usada para modificar o estado;
  - useState(0): dentro dos parênteses atribuímos o estado inicial.

  > const [count, setCount] = useState(0);

A função handleRefresh vai ser a responsável por chamar conter a setPosts. prevState representa o array passado no useState, e ...prevState é o spread que irá 'espalhar' cada item do array, ele cria um clone do array original para não modifica-lo. No caso abaixo a função setPosts pega todos os itens que já existiam e acrescenta outro. Como tinhamos usado o map para mostrar em tela os objetos contidos no array post, então o novo post aparece na tela quando o botão é clicado.
  
```js
	function handleRefresh(){
		setPosts((prevState)=>[
			...prevState,
			{ 
				id: Math.random(),
				title: `Titulo#0${prevState.length+1}`,
				subtitle: `Subtitulo#0${prevState.length+1}`,
				likes: 50
			}
		])
	}
  
  ...
  
  <button onClick={handleRefresh}>atualizar</button>
```


### Funções de Callback via Props

Como o nome já diz significa passar uma função via propriedade. Já fizemos uma função para adicionar posts e agora podemos fazer uma para remover posts a partir do seu id. Dentro do map passamos outra propriedade que recebe a função handleRemove. Essa função usará novamente o setPosts, mas dessa vez iremos filtrar todos os post que não tem o id clicado. Isso porque o método .filter retorna sempre um valor true. Então se é verdade que tal id não é igual ao clicado, ele é mantido e o outro é descartado.

```js
	function handleRemove(postId){
		setPosts((prevState)=>(
			prevState.filter(post => post.id != postId)
		))
	}
  
  .....
  
		{
			posts.map( post => (
				<Post 
					key={post.id}
					onRemove={handleRemove}
					likes={post.likes}
					post={{
						id: post.id,
						title: post.title,
						subtitle: post.subtitle,
					}}	
				/>
			))
		}
```

No nosso componente adicionamos um botão que ao ser clicado retornará o id do post em que está contido. E assim a filtragem é feita :)

```js
        <button onClick={() => props.onRemove(props.post.id)}>
            Remover
        </button>
```

### Renderização condicional

É definir uma condição para um elemento. O post pode ter um formato diferente caso ele já tenha sido lido, e usando a renderização condicional podemos manipular isso. Temos três opções:

1. Adicionando um if

```
if(props.post.read){
        return <h2>{props.post.title} já foi lido</h2>
    }
    return(
        <>
        <article>...<article>
	</>
```
2. Adicionando uma condicional ternária
``` 
<strong>
   {props.post.read?
   <s>{props.post.title}</s>
   :
   props.post.title}
</strong>
```

4. Adicionando uma short circuit evaluation

``` 
<strong>
   {props.post.read && <s>{props.post.title}</s>}
   {!props.post.read && props.post.title}
</strong>
```
### useContext

É uma função que retorna o valor do contexto. Para criar um contexto usamos createContext e para usarmos o contexto criado usamos useContext. Abaixo estamo crinado um contexto de nome ThemeContext, e atribuindo a propriedade value um objeto com a propriedade mode. E estamos usando esse contexto dentro do nosso componente Button. O useContext recebe então o valor da propriedade value e assim conseguimos acessá-lo por meio da constante theme.

```js
    const ThemeContext = createContext()
   
    function App(){
         
     return(
     	<ThemeContext.Provider value={{ mode: 'dark' }}>
	
	<Button/>
	
	</ThemeContext.Provider>
     )
    }
    
    function Button(){
     const theme = useContext(ThemeContext)

     return(
	<button>
	  { theme.mode }
	</button>
     )
    }
```

### Estilo inline

Assim como no HTML é possível estilizar elementos adicionando style dentro da tag. Só que no React algumas coisas são diferentes.

### style no HTML vs style no React, respectivamente:

```html
<div style="color: #fff; background-color: #000;">
	<p>Hello world</p>
</div>
```

```html
<div 
     style={{
     color: '#fff', 
     backgroundColor: '#000',
     }}
>
	<p>Hello world</p>
</div>
```

Basicamente no React declaramos um objeto, cada valor de propriedade precisa ir entre aspas, são separados por vírgula (até por que é um objeto) e o nome das propriedades que no HTML são separadas com -, usamos o camelCase. Note isso observando como o background color foi declarado. :)

### Usando CSS no React
Para isso é necessário instalar 2 loaders.

> yarn add css-loader style-loader -D

- css-loader interpreta o @import e url(), converte isso para que o javascript entenda
- style-loader ele pega nosso código css e injeta no html

No arquivo webpack configuramos assim:

```js
 {
   test: /\.css$/,
   use: ['style-loader','css-loader'],
 }

```

### Instalando o SASS no projeto

O SASS é um pré-procesador do css e com ele conseguimos escrever um código css melhorado. Para mais veja a <a href="https://sass-lang.com">documentação</a>. Para instalar a dependência do sass no React rode no terminal:

> yarn add sass sass-loader -D


No arquivo webpack configuramos assim:

```js
 {
   test: /\.scss$/,
   use: ['style-loader','css-loader'],
 }, 'sass-loader',

```
### Styled-components
Também chamado de CSS-in-JS. Que como o nome já diz é usar css dentro do JavaScript. Com ele criamos componentes de estilo. Para instalar no projeto:

```js
yarn add styled-components
```
Um exemplo de estilização:

```js
import styled from "styled-components";

export default styled.h1`
  color: cyan;
  font-family: 'Trebuchet MS';
`
```

E usamos assim como usariamos um componente:

```js
import Title from '../Title'

...

<Title>An example</Title>
```
### useEffect
Casos de uso:

- Ele executa uma função toda vez que o componente em questão é renderizado.

```js

useEffect( () => {
  console.log("sou executado sempre após a renderização")
})

```

- Executa na primeira renderização do componente.

```js

useEffect( () => {
  console.log("sou executado uma vez após a renderização")
}, [] )

```

- Executa toda vez que um state ou prop é alterada.

```js

useEffect( () => {
  console.log("sou executado uma vez após a renderização")
}, [theme] )

```

- Executa toda vez que o componente sai da tela.

```js

useEffect( () => {
  console.log("sou executado uma vez após a renderização")
  
  return () => {
   console.log("componente saiu da tela")
  }
  
}, [theme] )

```

### useEffect x useLayoutEffect

A única diferença entre os dois é o tempo em que são executados no Lifecycle. Enquanto o useEffect espera toda a renderização, alteração no DOM e as mudanças visuais acontecerem para disparar, o useLayoutEffect é disparado antes das mudanças visuais e o React espera que ele finalize para prosseguir.


### useRef
Semelhante ao useState, mas não recebe função de callback. Podemos usá-lo se queremos que o useEffect não execute na primeira renderização do componente, mas sim nas vezes após.

```js

const firstRender = useRef(true)

useEffect( () => {
  if (firstRender.current) {
  firstRender.current = false
  return
  }
  
  return () => {
   console.log("componente saiu da tela")
  }
  
}, [theme] )

```

### react-router-dom
Cria rotas dentro do nosso projeto que nos possibilita trocar de página. Ele nada mais é do que um componente e para utiliza-lo é preciso instalar com o seguinte código:

```js
yarn add react-router-dom
```

E no nosso projeto, podemos criar um arquivo chamado Routes.js e importar.

```js
import { Route } from 'react-router-dom'
```

Adicionando uma rota para a raiz do projeto:

```js
<Route path="/" component={Home}/>
```

 -path especifica o caminho da url (como: /produtos)
 -component o componente que será renderizado
 
 
### BrowserRouter
Usamos para acoplar todas os componentes <Routes/>, basicamente é o que nos permite navegar entre as urls da página. Importamos assim:

```js
import { BrowserRouter } from 'react-router-dom'
```

### Criando rota 404 (not found)
Para que uma página personalizada seja renderizada quando o usuário tentar acessar uma URL não existente no site podemos fazer nossa rota de duas formas:

```js
 <Route component={NotFound}/>
 
 // ou
 
  <Route path="*" component={NotFound}/>
```

E para que o React não renderize mais de um componente por vez importamos o Switch do react-router-dom e usamos ele como componente pai das nossas rotas.

### Pegando parâmetros pela URL

Podemos importar os hooks useParams e useLocation de react-router-dom. O useParams nos retorna tudo que passamos na nossa URL pela após a / e o useLocation retorna um objeto com parâmetros.


```js

const params = useParams()
const {search} = useLocation()
const queryParams = useMemo(() => new URLSearchParams(search), [search])

console.log(params)
console.log(queryParams.get('meuQueryParams'))

```

useLocation nos retorna um objeto, e a propriedade retorna os queryParams. Por isso no exemplo acima foi usada a desestruturação. E com o useMemo conseguimos alterar o valor da new URLSearchParams toda vez que a propriedadde search tiver seu valor alterado.
