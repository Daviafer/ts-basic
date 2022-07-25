TypeScript
- Desenvolvido e mantido pela Microsoft
- É um superset("upgrade") para a linguagem JS
- Adiciona funções JS, como a declaração de tipos de variável
- Pode ser utilizado com frameworks/libs como: Express e React
- Precisa ser compilado em JS, ou seja, não executamos TS
- Adiciona confiabilidade ao programa (tipos)
- Provê novas funcionalidades a JS, como Interfaces
- Pode verificar erros antes da execução
- Deixa JS mais explícito, diminuindo quantidade de bugs

Instalação:
- Terminal = sudo apt install node-typescript
- Terminal = tsc -v		(saber versão)
- Terminal = tsc --init	(no projeto)

- Usando o npm = (npm i -g typescript)
- Adicionar forma global com a flag -g 
- A parti da instalação temos como executar/compilar TS em qualquer local da nossa máquina com o comando tsc (tsc --version)
EXECUÇÃO
- Verificar arquivo tsconfig.json. 
- Caso seja necessário, alterar o outDir ( diretório saída, deploy, onde tem o JS) e rootDir (diretório raiz, diretório do desenvolvimento TS)
- Com o código em TS, executar no terminal: tsc
- Execução automática TS: tsc -w
- Após configuração e executar tsc, será gerado no deploy (outDir) o arquivo JS para compilação do TS.
