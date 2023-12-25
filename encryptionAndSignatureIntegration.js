
const path = require('path');

const {
    generateKeyPair,
    encryptMessage,
    decryptMessage,
} = require('./asymmetricEncryption.js');
const {
    generateSignature,
    verifySignature,
} = require('./digitalSignature.js');
const { getUserInput, displayResult } = require('./userInterface.js');

async function performTransaction() {
    const message = await getUserInput('Enter transaction details: ');

    // Asymmetric Encryption
    const { privateKey, publicKey } = generateKeyPair();
    const encryptedMessage = encryptMessage(message, publicKey);
    const decryptedMessage = decryptMessage(encryptedMessage, privateKey);

    // Digital Signature
    const signature = generateSignature(message, privateKey);
    const isSignatureValid = verifySignature(message, signature, publicKey);

    displayResult(`
        Original Message: ${message}
        Encrypted Message: ${encryptedMessage}
        Decrypted Message: ${decryptedMessage}
        Signature: ${signature}
        Is Signature Valid? ${isSignatureValid ? 'Yes' : 'No'}
    `);
}

performTransaction();

