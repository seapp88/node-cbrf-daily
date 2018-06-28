/**
 * Полная документация и схемы ответов доступна по адресу: https://www.cbr.ru/development/
 */

const https = require('https');

/** CBR Focus API class */

class Cbr {

    /**
     * API constructor
     */
    constructor() {

    }

    /**
     * Клиент
     * @private
     * @param {string} api Название метода
     * @param {params} params Параметры
     * @returns {promise}
     */
    _client(api, params) {
        const options = {
            method: 'GET',
            hostname: 'www.cbr-xml-daily.ru',
            path: `/${api}`,
            port: 443,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        return new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                let result = '';
                if (res.statusCode !== 200) {
                    return reject({
                        code: res.statusCode,
                        message: res
                    });
                }
                res.on('data', (chunk) => {
                    result += chunk;
                });
                res.on('end', () => {
                    try {
                        result = JSON.parse(result);
                    } catch (err) {
                        return reject(err);
                    }
                    resolve(result);
                });
            });
            req.on('error', reject);
            req.end();
        });
    }

    /**
     * Получение курсов валюты
     * @return {promise<object[]>}
     */
    daily() {
        return this._client('daily_json.js', {})
    }


}

// exports
module.exports = Cbr;