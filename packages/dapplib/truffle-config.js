require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth snow collect harvest option bottom toss'; 
let testAccounts = [
"0x1e17a39fce718c6c5efeaa0e76ebdbd9145506aac01119cfc295cc985e50746b",
"0xcfe7fe68e64de5add0339ac5f4d866a3825a610b5e76e92e4b53e472c8af50dd",
"0xa0c7c9182a877258e39ddde3b10da639a5db8bdddc1325b5683ce405ee657ca4",
"0x69a02de0977a6c1c62d78d7cee7e939ada00bd96f707d070453aebc0ce0c5608",
"0x94ba10bfafb09250a07b5f11702426bff8af5a8f618e6e1efe4aea5435b6b49a",
"0xffdd2ea6db229cdaae552a0170e2282aca4a670167458c444058a78f23ee31be",
"0x1019b024925d83418d340ea4390b2259d45a7b638030cee76e53c865db18111c",
"0xa772cc7eedc2332844ea627246e86f5448a0348afe8de8cc2147cec12ece6d11",
"0xdcf24a79d91088dfda5c2265ed8cb8aefd5388cbff97d248126104a49b783f2e",
"0x55963f63d9f3223b99e720b4fca6224681fc54ffc6acc0bb79a22f296f2825b8"
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

