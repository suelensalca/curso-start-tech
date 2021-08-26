var express = require('express');
var router = express.Router();
var pagarme = require('../lib/pagarme')

/* POST criacao de compra */
router.post('/', function(req, res, next) {

  pagarme.compra(req.body).then((result) => {

    const paymentId = result.data.id;
    const amount = result.data.amount;

    pagarme.captura(paymentId, amount)
    .then((result) => {
      if(result.data.status == 'paid'){
        res.status(201).send({
          "Status": "Sucesso",
          "Message": "Compra realizada com sucesso",
          "CompraId": paymentId
        });     
      }
      else {
        res.status(402).send({
          "Status": "Falhou",
          "Message": "Compra não realizada, problema na cobrança do cartão"
        })
      }
    })
    .catch((err) => {
      // console.error(err);
      res.status(500).send({
        "Status": "Falhou",
        "Message": "Erro no servidor"
      })
    })
  }).catch(function (error) {
    // console.error(error);
    res.status(500).send({
      "Status": "Falhou",
      "Message": "Erro no servidor também"
    })
  })
});

/* GET status de compra */
router.get('/:compra_id/status', function(req, res, next) {
  pagarme.consulta(req.params.compra_id)
  // @ts-ignore
  .then((result) => {

    let message = {}

    switch(result.data.status) {
      case 'authorized':
        message = {
          'Status': 'Pagamento autorizado.'
        };
        break;
      case 'paid':
        message = {
          'Status': 'Pagamento realizado.'
        };
        break;
      case 'processing':
      case 'analyzing':
        message = {
          'Status': 'Pagamento pendente.'
        };
        break;
      default:
        message = {
          'Status': 'Pagamento falhou.'
        };
    }

    res.send(message);

  }).catch(function (error) {
    console.error(error.response.data);
  });
});

module.exports = router;
