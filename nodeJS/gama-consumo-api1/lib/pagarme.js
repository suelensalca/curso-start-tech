const axios = require('axios')

class Pagarme {
    static compra(params){

        // @ts-ignore
        return axios.post(
            'https://api.pagar.me/1/transactions', 
            params,
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
        
    }
    
    static captura(paymentId, amount){
        
        // @ts-ignore
        return axios.post(
            'https://api.pagar.me/1/transactions/' + paymentId + '/capture', 
            {
                amount: amount,
                api_key: 'ak_test_wWKK2984l7NEzumRRux8BWBl5cPY72'
            },
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        );
        
    }

    static consulta(paymentId){
        // @ts-ignore
        return axios.get(
            'https://api.pagar.me/1/transactions/' + paymentId,
            {
                params: {
                    api_key: 'ak_test_wWKK2984l7NEzumRRux8BWBl5cPY72'                    
                },
                headers: {
                    'content-type': 'application/json',
                }
            }
        )
    }
   
}

module.exports = Pagarme;