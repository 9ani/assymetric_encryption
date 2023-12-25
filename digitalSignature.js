
const crypto = require('crypto');

function generateSignature(message, privateKey) {
    const sign = crypto.createSign('SHA256');
    sign.write(message);
    sign.end();
    const signature = sign.sign(privateKey);
    return signature.toString('base64');
}

function verifySignature(message, signature, publicKey) {
    const verify = crypto.createVerify('SHA256');
    verify.write(message);
    verify.end();
    const isValid = verify.verify(publicKey, signature, 'base64');
    return isValid;
}

module.exports = { generateSignature, verifySignature };
