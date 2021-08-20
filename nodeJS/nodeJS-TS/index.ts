// Importacao de bibliotecas
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile, unlink, readFile } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';

// Definicao de porta
const port = 5000

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    const urlparse = url.parse(request.url ? request.url : '', true);

    var resposta;

    const params = parse(urlparse.search ? urlparse.search : '');

    if(urlparse.pathname == '/salvar-usuario'){

        writeFile('users/' + params.id + '.txt', JSON.stringify(params), function(err: any) {
            if (err) throw err;
            console.log('Saved!');

            resposta = 'Usuario salvo com sucesso';

            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);

        });
    }
    else if(urlparse.pathname == '/selecionar-usuario') {
        readFile('users/' + params.id + '.txt', function(err, data) {
            console.log(data)
            resposta = data;

            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
        });
    }
    else if(urlparse.pathname == '/remover-usuario'){
        unlink('users/' + params.id + '.txt', function(err: any){
            console.log('File deleted!');

            resposta = err ? "Usuario nao encontrado" : "Usuario removido";

            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
});

// Execucao
server.listen( port, () => {
    console.log(`Server running on port ${port}`)
});

// http://localhost:5000/salvar-usuario?id=123&nome=su
// http://localhost:5000/selecionar-usuario?id=123
// http://localhost:5000/remover-usuario?id=123