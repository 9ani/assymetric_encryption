
const crypto = require('crypto');

function generateKeyPair() {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
    });
    return { privateKey, publicKey };
}

function encryptMessage(message, publicKey) {
    const bufferMessage = Buffer.from(message, 'utf-8');
    const encrypted = crypto.publicEncrypt(publicKey, bufferMessage);
    return encrypted.toString('base64');
}

function decryptMessage(encryptedMessage, privateKey) {
    const bufferEncrypted = Buffer.from(encryptedMessage, 'base64');
    const decrypted = crypto.privateDecrypt(privateKey, bufferEncrypted);
    return decrypted.toString('utf-8');
}

module.exports = { generateKeyPair, encryptMessage, decryptMessage };
