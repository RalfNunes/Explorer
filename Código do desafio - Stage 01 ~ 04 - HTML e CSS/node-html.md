# Raciocinio para montar o HTML:


## Geral: 
- criar uma <code style="color:gold">section</code>  para cada bloco do site usando <code style="color:lightskyblue">id</code>.
- as demais <code style="color:lightskyblue">divs</code>, vão ser criadas como <code style="color:lightskyblue">class</code>.


### No primeiro bloco temos 4 itens:
- 1 imagem 
- 1 titulo
- 1 sub-titulo 
- 1 botão (é destinado a levar a parte de cards)

> Primeiro Bloco
  - <code style="color:gold">section</code>, do primeiro bloco vai se chamar <code style="color:lightskyblue">banner</code>.
  - dentro da <code style="color:gold">section</code> vai ter duas <code style="color:lightskyblue">divs</code> sendo uma para imagem e outra para o texto, <code style="color:lightskyblue">banner-img</code>, <code style="color:lightskyblue">title</code>.
  - na relação do botão vai ter uma tag <code style="color:lightskyblue">"a"</code> criando um arcora ao destino, e após colocar a imagem do botão. 


### No segundo bloco temos 3 itens:
- 3 imagens de lua
- 3 titulos
- 3 textos<br> 
obs 1. sendo que o fundo é diferente do corpo do site.<br> 
obs 2. é um card com 3 colunas e 1 linha. 

> Segundo Bloco 
  - <code style="color:gold">section</code>, do segundo bloco vai ser chamar <code style="color:lightskyblue">cards</code>.
  - na <code style="color:lightskyblue">div-cards</code> dentro dela vai  o <code style="color:lightskyblue">div-card</code>, com a imagem da lua, e abaixo uma outra <code style="color:lightskyblue">div-texto</code>.<br>
  obs. lembrando que são três colunas, então a <code style="color:lightskyblue">div-card</code> vai ser repedir.<br>


### No terceiro bloco temos 5 itens:
- 1 campo de nome 
- 1 campo de email
- 1 campo de texto 
- 1 botão de enviar o formulário
- 1 imagem lateral

> Terceiro Bloco
- <code style="color:gold">section</code>, do terceiro bloco vai ser chamar <code style="color:lightskyblue">contact</code>.
- criar um <code style="color:lightskyblue">form</code>, com a seguintes coisas dentro dele.
  - <code style="color:lightskyblue">h2</code> do titulo do formulário. 
  - <code style="color:lightskyblue">fieldset</code>, com uma <code style="color:lightskyblue">div-input-wrapper</code> para cada elemento "nome, email e texto". 
  - após o fechamento do <code style="color:lightskyblue">fieldset</code>, vai ter o <code style="color:lightskyblue">botão</code> para enviar o formulário
  - 
