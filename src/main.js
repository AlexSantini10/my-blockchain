const {Blockchain, Transaction} = require('./blockchain.js');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('8619b5968986ef9266f844eb5b7a9429c803644f5f0637a8dba90aeaee3d1ccc');
const myWalletAddress = myKey.getPublic('hex');

let pippoCoin = new Blockchain();

pippoCoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'publicKeyGoesHere', 10);
tx1.signTransaction(myKey);
pippoCoin.addTransaction(tx1);

console.log('Starting the miner\n');
pippoCoin.minePendingTransactions(myWalletAddress);

console.log(pippoCoin.getBalanceOfAddress(myWalletAddress));

console.log(pippoCoin.isChainValid()); 