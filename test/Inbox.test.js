// contract test code will go here
const asset = require('assert');
const ganache = require ('ganache-cli');
const Web3 = require('web3');  // Web3 is contructor function (class like package) and hence it should be capatalized and instance should be lower case
//Set up local instance of web3 and use the provider of the network . 1 provider for 1 network
const web3 = new Web3(ganache.provider);

