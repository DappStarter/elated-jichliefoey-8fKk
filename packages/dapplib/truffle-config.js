require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift release pitch home hockey enroll flower text'; 
let testAccounts = [
"0xbe74ee89bc390661502ce7e8b41d3333a16c0600b6cedcd366cf32be6411db35",
"0x3fe98183b70dc6cc0c3b8c561521928307fcfcc21c12ec57d67284c3ba3aa24d",
"0x352142bd6058b2c118688956d3b090cc520aba83c22fb78fb3c57cf115391a70",
"0xc5a9c7d07d5027cc2578b99cf43fa1bbd269331af8066edcb3d6ef6ad4fa514c",
"0x604d4acda86106c8b2616a9e0e814840ffbd2d21e9150eaaf7792d83ee7b003e",
"0xd88ac7038e21fed711044465824be216d8f23ec69aa85ebfc430e8cc1dafd361",
"0x042fb2461a680c8164112f8675d68a68abfd5e34a7e1e68190ab9eae63b0e03e",
"0xfcda9dac3710d8f99bf64368d62c10adef621f918b400a0041f7cc505a0ea0ea",
"0xdcf5d0e27bd8a30a933c2b7ff27e90f5325446f93094da6d47601eda2808cfb0",
"0x75adda2c4566a257dafa02d31e744bb34423a4a3b88b8bed5fc446a6cf7b837a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

