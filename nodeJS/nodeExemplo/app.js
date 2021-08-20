// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementação da regra de negócio 
const server = http.createServer((req, res) => {

  var resposta;
  const urlparse = url.parse(req.url, true)
  // Receber informacoes do usuario
  const params = queryString.parse(urlparse.search);

  // Criar um usuario - Atualizar um usuario
  if(urlparse.pathname == '/salvar-usuario'){
    
    // Salvar as informacoes
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Saved!');

      resposta = 'Usuario salvo com sucesso'

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }
  // Selecionar usuario
  else if(urlparse.pathname == '/selecionar-usuario'){
    fs.readFile('users/' + params.id + '.txt', function(err, data) {
      resposta = data;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }
  // Remover o usuario
  else if(urlparse.pathname == '/remover-usuario'){
    fs.unlink('users/' + params.id + '.txt', function(err) {
      console.log('File deleted!');

      resposta = err ? "Usuario nao encontrado" : "Usuario removido";

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});