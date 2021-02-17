const HDWalletprovider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletprovider(
  'satisfy problem weekend enforce marble orbit wink feel cost claw security hedgehog',
  'https://rinkeby.infura.io/v3/1a713903bd0b4688875301d0d66ff9a4'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Countract deployed to', result.options.address);
};

deploy();

// const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({ data: bytecode, arguments: ['Hi there!'] })
//     .send({ gas: '1000000', from: accounts[0] });