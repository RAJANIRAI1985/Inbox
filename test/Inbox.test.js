// contract test code will go here
const asset = require('assert');
const ganache = require ('ganache-cli');
const Web3 = require('web3');  // Web3 is contructor function (class like package) and hence it should be capatalized and instance should be lower case
//Set up local instance of web3 and use the provider of the network . 1 provider for 1 network
const web3 = new Web3(ganache.provider);
const {interface, bytecode } = require('../compiler');  // .. because the complier is up 1 directory

//Get a list of all accounts and use one of those accounts to deploy the contract 
//this is without async and await statement
//beforeEach(() => {
  //get list of all accounts
 // web3.eth.getAccounts()
 // .then(fetchedAccounts => {
  //  console.log(fetchedAccounts);
 // });
  //use one of those accounts to deploy the contract
  //});


let accounts;
let inbox;
beforeEach(async () => {
  //get list of all accounts
  accounts = await web3.eth.getAccounts()

  //use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contact(JSON.parse(interface)    //note C is capital
    .deploy({data: bytecode, argument: ["Hi There"]})
     .send({from: accounts[0], gas: '100000'})
});//

describe('Inbox',() => {
  it('deployes a contact',()=>{
    //console.log(accounts);  
    console.log(inbox);
  });
});
//go to package json and change test = "mocha" and then on consol npm run test
