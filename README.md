# clone-tabnews

Projeto do curso https://curso.dev -- implementação do site https://peregrinonews.com.br, utilizando as idéias de construção do tabnews.

## informações das aulas

### Comandos

- git restore --staged aula_http.txt comandos.txt dns.txt
- nvm install -- instalar o que está definido no arquivo .nvmrc, a saber, o lts/hydrogen na versão referida
- npm init -- criar o package.json, arquivo que contém os programas, ferramentas que serão utilizados no projeto
- npm install next@13.1.6 -- instalar o next na versão referida
- npm install react@18.2.0 -- instalar o react na versão referida
- npm install react-dom@18.2.0 -- instalar o react-dom next na versão referida
- npm run dev -- executar o atalho "dev" da chave "scripts" do arquivo package.json: que inicia o servidor local (localhost).
- git log -- mostrar commits
- criação do arquivo.gitignore -- github irá ignorar os conteúdos dos arquivos mencionados.
- git status -- mostrar situação dos arquivos: untracked, modified, staged e commited.
- git log --stat - situação dos commits
- git add 'nome_do_arquivo' -- adicionar arquivos criados ou modificados (estágio modified) ao estágio commit
- git commit -- realizar o commit e abrir editor de texto para relatar/descrever as alterações.
- git commit -m 'texto aqui' -- idem anterior, mas adiciona mensagem diretamente na mesma linha de código.
- git log --oneline - resumir cada commit em uma linha
- git diff -- mostrar diferenças, delta, dos commits
  caracter "enter" no final das linhas para indicar para o github que a linha se encerrou.
- git commit --amend - "emendar" commit anterior -- não há como modificar, pois os commits são imutáveis -- com as modificações desejadas: é como se o commit anterior não existisse, após as modificações; criando após isso, um commit com uma nova chave/código/identificador.
- git branch -- mostrar linhas do tempo ou ramificações do projeto.
- git push -- empurrar commits da branch local/main (máquina local) para o repositório origin/main (github)
- git push -f ou git push --force - idem, porém, força o push: cuidado ao usar este comando! Polícia do Git pode investigar.
- npm install prettier --save-dev ou npm install prettier -D -- instalar o formatador 'prettier' de códigos, mas somente para o ambiente de desenvolvimento; e não para o de produção.
- npm run lint:check -- executar o atalho "lint:check", em que o formatador checa se há alguma divergência entre os arquivos e a formatação padrão definida.
- npm run lint:fix -- executar o atalho "lint:fix", em que o formatador realiza alterações (escreve) nos códigos, caso haja divergência entre os arquivos e a formatação padrão definida.
- git add -A -- adicionar TODOS os arquivos criados ou modificados (estágio modified) ou untracked ao estágio commit.
- git restore 'nome_do_arquivo' -- restaura arquivo(s) para sua versão original, que é antes das modificações realizadas.
- npm install --save-dev jest@29.6.2 -- instalar o Test Runner Jest na versão referida.
- npm run test ou npm test -- executar o Jest.
- npm run test:watch -- executar o Jest de forma simultânea.
- curl -v http://localhost:3000/api/status -- requisição "crua" da página feita para o servidor local.
- docker compose up -- aplicar configurações do arquivo yaml e inserir banco de dados local no conteiner.
- docker ps - lista processos/conteiners sendo executados no docker.
- docker ps --all ou docker ps -a -- lista processos/conteiners sendo executados ou não no docker.
- docker logs 'nome_database' -- mostra os logs do conteiner.
- docker compose up --detach -- subir banco de dados em conteiner, mas o BD será executado em segundo plano.
- sudo apt update -- atualiza a lista de pacotes disponíveis nos repositórios do sistema.
- sudo apt install postgresql-client -- instala o cliente do PostgreSQL, necessário para conectar-se a bancos PostgreSQL via terminal.
- psql --host=localhost --username=postgres --port=5432
- docker compose up -d --force-recreate -- desligar conteiner e subir banco de dados em conteiner com alterações aplicadas, mas o BD será executado em segundo plano.
- docker compose -f infra/compose.yaml down -- destruir conteiner.
- docker compose -f infra/compose.yaml up -d -- inserir banco de dados local no conteiner com o caminho até o arquivo .yaml com as configurações do docker compose.
- npm install pg@8.11.3
- code jsconfig.json -- criar arquivo através da linha de comando.

### Aula http

Digitar:

- http://'ip-servidor-site'
- https://'ip-servidor-site'

ip-servidor-site = 76.76.21.21

curl https://76.76.21.21 x curl http://76.76.21.21 -- diferença no certificado de segurança.

curl https://76.76.21.21 --insecure --verbose
Host: 76.76.21.21
retorno: HTTP/2 308 -- redirecionamento -> location: https://vercel.com/

curl https://76.76.21.21 --insecure --verbose --header 'Host: peregrinonews.com.br'

### Aula DNS

Caminho: do Domínio até o IP.

- Máquina local - Cliente ->
- Provedor de Internet - Recursive Resolver ->
- Root Server ('.' -- final do domínio, ex.: '.com.br.') - (.) FQDN - Fully Qualified Domain Name; (.br) TLD - Top-Level Domain ->
- Recursive Resolver
  TLD Server (.br, por exemplo) -- substituição dos servidores DNS automáticos da registro.br pelos da Vercel: nsx.vercel-dns.com, x = {1, 2}, no caso. ->
- Recursive Resolver
- Authoritative Server (Vercel no caso) -- servidor que aponta para qual servidor está hospedado, de fato, o domínio.
- Recursive Resolver
- Máquina local
- IP servidor onde está hospedado o domínio (a própria Vercel também)
