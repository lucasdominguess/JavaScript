#Configuração do TypeScript

1. Inicializar um projeto Node.js 
    Usar `npm init`  / ultilizando `npm init y `(yes para todos)

2. instalar o TypeScript 
    2.1 Instalaçao global : `npm install -g typescript`
    2.2 Instalação local (dentro do projeto) Recomendado `npm install typescript -D`

3. Ultilizar o Typescript instalado para transpilar o nosso codigo.
    (Converter o codigo TS para Js). 
3.1 `npx tsc "Nome do arquivo"`  // usar `npx tsc "Nome do arquivo" -- watch` (atualiza altomaticamente)

#confirar typescript (cria um arquivo "tsconfig.json" para config geral do projeto) 
"
 1. `npx tsc --init` 
 2.`npx tsc` (usar para converter e atualizar todos os arquivos Ts par js)
 