const fetch = require('node-fetch')

class Cielo {
    static compra(params){
    // @ts-ignore
    return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
        method: 'post',
        body: JSON.stringify(params),
        headers: { 
            'Content-Type': 'application/json',
            'MerchantId': 'bbb72249-c6a5-4cf9-a7d4-90e66f8b20ca',
            'MerchantKey': 'APXCMBPTJPKTIKEIXKPHKEUNMGHIZJVMPEIZKBVH',
        },
    })
    .then(res => res.json())
    }

    static captura(paymentId){
    // @ts-ignore
    return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/' + paymentId + '/capture', {
        method: 'put',
        headers: { 
            'Content-Type': 'application/json',
            'MerchantId': 'bbb72249-c6a5-4cf9-a7d4-90e66f8b20ca',
            'MerchantKey': 'APXCMBPTJPKTIKEIXKPHKEUNMGHIZJVMPEIZKBVH',
        },
    })
    .then(res => res.json())
    }

    static consulta(paymentId){
    // @ts-ignore
    return fetch('https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/' + paymentId, {
        method: 'get',
        headers: { 
            'Content-Type': 'application/json',
            'MerchantId': 'bbb72249-c6a5-4cf9-a7d4-90e66f8b20ca',
            'MerchantKey': 'APXCMBPTJPKTIKEIXKPHKEUNMGHIZJVMPEIZKBVH',
        },
    })
    .then(res => res.json())
    }
}

module.exports = Cielo;